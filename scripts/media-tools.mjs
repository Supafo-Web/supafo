#!/usr/bin/env node

import fs from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import sharp from "sharp"

/**
 * @typedef {"inspect" | "svg-to-png" | "svg-to-webp" | "svg-to-jpg" | "png-to-webp" | "png-to-jpg" | "png-to-avif" | "webp-to-png" | "webp-to-jpg" | "webp-to-avif" | "jpg-to-webp" | "jpeg-to-webp" | "jpg-to-png" | "jpeg-to-png" | "jpg-to-avif" | "jpeg-to-avif" | "avif-to-png" | "avif-to-webp" | "resize" | "optimize"} MediaCommand
 */

/**
 * @typedef {Record<string, string | boolean>} CliOptions
 */

const [, , rawCommand, fileName, ...args] = process.argv

/** @type {MediaCommand | undefined} */
const command = /** @type {MediaCommand | undefined} */ (rawCommand)

/** @type {CliOptions} */
const options = parseArgs(args)

const DEFAULT_SVG_SCALE = 3
const DEFAULT_SVG_DENSITY = 300
const DEFAULT_WEBP_QUALITY = 100
const MAX_OUTPUT_WIDTH = 4096
const MAX_OUTPUT_HEIGHT = 4096
const DEFAULT_JPEG_QUALITY = 100
const DEFAULT_AVIF_QUALITY = 100

/**
 * @param {string[]} args
 * @returns {CliOptions}
 */
function parseArgs(args) {
   /** @type {CliOptions} */
   const result = {}

   for (let i = 0; i < args.length; i++) {
      const arg = args[i]

      if (!arg.startsWith("--")) continue

      const key = arg.slice(2)
      const next = args[i + 1]

      if (!next || next.startsWith("--")) {
         result[key] = true
      } else {
         result[key] = next
         i++
      }
   }

   return result
}

function printHelp() {
   console.log(`
Media Tools

Kullanım:
  media <komut> <dosya> [opsiyonlar]

Temel örnekler:
  media inspect Team.svg
  media svg-to-png Team.svg
  media svg-to-webp Team.svg
  media png-to-webp Cart.png
  media webp-to-png Cart.webp
  media jpg-to-webp Photo.jpg
  media resize Cart.webp --width 1400
  media optimize Cart.webp

Komutlar:
  inspect          Dosyanın formatını, ölçüsünü ve boyutunu gösterir

  svg-to-png       SVG -> PNG
  svg-to-webp      SVG -> WebP
  svg-to-jpg       SVG -> JPG

  png-to-webp      PNG -> WebP
  png-to-jpg       PNG -> JPG
  png-to-avif      PNG -> AVIF

  webp-to-png      WebP -> PNG
  webp-to-jpg      WebP -> JPG
  webp-to-avif     WebP -> AVIF

  jpg-to-webp      JPG/JPEG -> WebP
  jpeg-to-webp     JPG/JPEG -> WebP
  jpg-to-png       JPG/JPEG -> PNG
  jpeg-to-png      JPG/JPEG -> PNG
  jpg-to-avif      JPG/JPEG -> AVIF
  jpeg-to-avif     JPG/JPEG -> AVIF

  avif-to-png      AVIF -> PNG
  avif-to-webp     AVIF -> WebP

  resize           Görseli yeniden boyutlandırır
  optimize         Aynı formatta optimize edilmiş kopya üretir

Opsiyonlar:
  --overwrite      Var olan çıktı dosyasının üstüne yazar
  --suffix @2x     Çıktı dosya adına suffix ekler
  --scale 4        SVG çevirilerinde çözünürlük çarpanı. Varsayılan: 4
  --density 300    SVG render density değeri. Varsayılan: 300
  --width 1400     Resize için genişlik
  --height 800     Resize için yükseklik

Not:
  Çıktılar otomatik olarak aynı klasöre üretilir.
  Kalite ayarları otomatik olarak maksimum kaliteye yakındır.
`)
}

/**
 * @param {string} key
 * @param {number} fallback
 * @returns {number}
 */
function getNumberOption(key, fallback) {
   const value = options[key]

   if (typeof value !== "string") return fallback

   const numberValue = Number(value)

   return Number.isFinite(numberValue) ? numberValue : fallback
}

/**
 * @param {string} key
 * @returns {number | undefined}
 */
function getOptionalNumberOption(key) {
   const value = options[key]

   if (typeof value !== "string") return undefined

   const numberValue = Number(value)

   return Number.isFinite(numberValue) ? numberValue : undefined
}

/**
 * @param {string} filePath
 * @returns {Promise<boolean>}
 */
async function fileExists(filePath) {
   try {
      await fs.access(filePath)
      return true
   } catch {
      return false
   }
}

/**
 * @param {string} input
 * @returns {string}
 */
function getInputPath(input) {
   return path.resolve(process.cwd(), input)
}

/**
 * @param {string} inputPath
 * @param {string} outputExtension
 * @returns {string}
 */
function getOutputPath(inputPath, outputExtension) {
   const parsed = path.parse(inputPath)
   const suffix = typeof options.suffix === "string" ? options.suffix : ""

   return path.join(parsed.dir, `${parsed.name}${suffix}${outputExtension}`)
}

/**
 * @param {number} bytes
 * @returns {string}
 */
function formatBytes(bytes) {
   if (bytes < 1024) return `${bytes} B`
   if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`

   return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

/**
 * @param {string} filePath
 * @returns {Promise<void>}
 */
async function inspect(filePath) {
   const metadata = await sharp(filePath).metadata()
   const stat = await fs.stat(filePath)

   console.log(`
File: ${path.basename(filePath)}
Path: ${filePath}
Format: ${metadata.format || "unknown"}
Width: ${metadata.width || "unknown"}px
Height: ${metadata.height || "unknown"}px
Size: ${formatBytes(stat.size)}
Has Alpha: ${metadata.hasAlpha ? "yes" : "no"}
`)
}

/**
 * @param {string} outputPath
 * @returns {Promise<void>}
 */
async function preventOverwrite(outputPath) {
   const overwrite = Boolean(options.overwrite)

   if (!overwrite && await fileExists(outputPath)) {
      throw new Error(
         `Output already exists: ${path.basename(outputPath)}

Üstüne yazmak için:
media ${command || ""} ${fileName || ""} --overwrite

Farklı isimle üretmek için:
media ${command || ""} ${fileName || ""} --suffix @new`
      )
   }
}

/**
 * @param {string} inputPath
 * @returns {Promise<sharp.Sharp>}
 */
async function createSvgPipeline(inputPath) {
   const scale = getNumberOption("scale", DEFAULT_SVG_SCALE)
   const density = getNumberOption("density", DEFAULT_SVG_DENSITY)

   const metadata = await sharp(inputPath, { density }).metadata()

   const originalWidth = metadata.width || 1024
   const originalHeight = metadata.height || 1024

   let width = Math.round(originalWidth * scale)
   let height = Math.round(originalHeight * scale)

   if (width > MAX_OUTPUT_WIDTH || height > MAX_OUTPUT_HEIGHT) {
      const widthRatio = MAX_OUTPUT_WIDTH / width
      const heightRatio = MAX_OUTPUT_HEIGHT / height
      const ratio = Math.min(widthRatio, heightRatio)

      width = Math.round(width * ratio)
      height = Math.round(height * ratio)
   }

   console.log(`Rendering SVG: ${originalWidth}x${originalHeight} -> ${width}x${height}`)

   return sharp(inputPath, { density })
      .resize({
         width,
         height,
         fit: "inside",
         withoutEnlargement: false,
      })
      .timeout({
         seconds: 60,
      })
}

/**
 * @param {string} inputPath
 * @param {string} outputPath
 * @param {"png" | "webp" | "jpg" | "avif"} format
 * @returns {Promise<void>}
 */
async function savePipeline(inputPath, outputPath, format) {
   let pipeline = sharp(inputPath)

   await savePreparedPipeline(pipeline, outputPath, format)
}

/**
 * @param {sharp.Sharp} pipeline
 * @param {string} outputPath
 * @param {"png" | "webp" | "jpg" | "avif"} format
 * @returns {Promise<void>}
 */
async function savePreparedPipeline(pipeline, outputPath, format) {
   if (format === "png") {
      await pipeline
         .png({
            compressionLevel: 0,
            adaptiveFiltering: false,
            force: true,
         })
         .toFile(outputPath)

      return
   }

   if (format === "webp") {
      await pipeline
         .webp({
            quality: DEFAULT_WEBP_QUALITY,
            nearLossless: true,
            effort: 4,
            smartSubsample: true,
            force: true,
         })
         .timeout({
            seconds: 60,
         })
         .toFile(outputPath)

      return
   }

   if (format === "jpg") {
      await pipeline
         .flatten({
            background: "#ffffff",
         })
         .jpeg({
            quality: DEFAULT_JPEG_QUALITY,
            mozjpeg: true,
            force: true,
         })
         .toFile(outputPath)

      return
   }

   if (format === "avif") {
      await pipeline
         .avif({
            quality: DEFAULT_AVIF_QUALITY,
            effort: 9,
            lossless: true,
            force: true,
         })
         .toFile(outputPath)

      return
   }
}

/**
 * @param {string} inputPath
 * @param {string} outputExtension
 * @param {"png" | "webp" | "jpg" | "avif"} format
 * @returns {Promise<void>}
 */
async function convertImage(inputPath, outputExtension, format) {
   const outputPath = getOutputPath(inputPath, outputExtension)

   await preventOverwrite(outputPath)
   await savePipeline(inputPath, outputPath, format)

   console.log(`Created: ${path.basename(outputPath)}`)
}

/**
 * @param {string} inputPath
 * @param {string} outputExtension
 * @param {"png" | "webp" | "jpg" | "avif"} format
 * @returns {Promise<void>}
 */
async function convertSvg(inputPath, outputExtension, format) {
   const outputPath = getOutputPath(inputPath, outputExtension)

   await preventOverwrite(outputPath)

   const pipeline = await createSvgPipeline(inputPath)

   await savePreparedPipeline(pipeline, outputPath, format)

   console.log(`Created: ${path.basename(outputPath)}`)
}

/**
 * @param {string} inputPath
 * @returns {Promise<void>}
 */
async function resizeImage(inputPath) {
   const width = getOptionalNumberOption("width")
   const height = getOptionalNumberOption("height")

   if (!width && !height) {
      throw new Error(
         `Resize için --width veya --height vermelisin.

Örnek:
media resize Cart.webp --width 1400
media resize Cart.webp --height 900`
      )
   }

   const parsed = path.parse(inputPath)
   const outputPath = getOutputPath(inputPath, parsed.ext)

   await preventOverwrite(outputPath)

   await sharp(inputPath)
      .resize({
         width,
         height,
         fit: "inside",
         withoutEnlargement: true,
      })
      .toFile(outputPath)

   console.log(`Created: ${path.basename(outputPath)}`)
}

/**
 * @param {string} inputPath
 * @returns {Promise<void>}
 */
async function optimizeImage(inputPath) {
   const metadata = await sharp(inputPath).metadata()
   const format = metadata.format
   const parsed = path.parse(inputPath)

   const outputPath = getOutputPath(inputPath, parsed.ext)

   await preventOverwrite(outputPath)

   if (format === "png") {
      await savePipeline(inputPath, outputPath, "png")
      console.log(`Created: ${path.basename(outputPath)}`)
      return
   }

   if (format === "webp") {
      await savePipeline(inputPath, outputPath, "webp")
      console.log(`Created: ${path.basename(outputPath)}`)
      return
   }

   if (format === "jpeg" || format === "jpg") {
      await savePipeline(inputPath, outputPath, "jpg")
      console.log(`Created: ${path.basename(outputPath)}`)
      return
   }

   if (format === "avif") {
      await savePipeline(inputPath, outputPath, "avif")
      console.log(`Created: ${path.basename(outputPath)}`)
      return
   }

   throw new Error(`Unsupported optimize format: ${format || "unknown"}`)
}

async function run() {
   if (!command || command === "help" || command === "--help") {
      printHelp()
      return
   }

   if (!fileName) {
      printHelp()
      process.exit(1)
   }

   const inputPath = getInputPath(fileName)

   if (!await fileExists(inputPath)) {
      throw new Error(`File not found: ${fileName}`)
   }

   switch (command) {
      case "inspect":
         await inspect(inputPath)
         break

      case "svg-to-png":
         await convertSvg(inputPath, ".png", "png")
         break

      case "svg-to-webp":
         await convertSvg(inputPath, ".webp", "webp")
         break

      case "svg-to-jpg":
         await convertSvg(inputPath, ".jpg", "jpg")
         break

      case "png-to-webp":
         await convertImage(inputPath, ".webp", "webp")
         break

      case "png-to-jpg":
         await convertImage(inputPath, ".jpg", "jpg")
         break

      case "png-to-avif":
         await convertImage(inputPath, ".avif", "avif")
         break

      case "webp-to-png":
         await convertImage(inputPath, ".png", "png")
         break

      case "webp-to-jpg":
         await convertImage(inputPath, ".jpg", "jpg")
         break

      case "webp-to-avif":
         await convertImage(inputPath, ".avif", "avif")
         break

      case "jpg-to-webp":
      case "jpeg-to-webp":
         await convertImage(inputPath, ".webp", "webp")
         break

      case "jpg-to-png":
      case "jpeg-to-png":
         await convertImage(inputPath, ".png", "png")
         break

      case "jpg-to-avif":
      case "jpeg-to-avif":
         await convertImage(inputPath, ".avif", "avif")
         break

      case "avif-to-png":
         await convertImage(inputPath, ".png", "png")
         break

      case "avif-to-webp":
         await convertImage(inputPath, ".webp", "webp")
         break

      case "resize":
         await resizeImage(inputPath)
         break

      case "optimize":
         await optimizeImage(inputPath)
         break

      default:
         console.log(`Unknown command: ${command}`)
         printHelp()
         process.exit(1)
   }
}

run().catch((error) => {
   const message = error instanceof Error ? error.message : String(error)

   console.error(`\n${message}\n`)
   process.exit(1)
})

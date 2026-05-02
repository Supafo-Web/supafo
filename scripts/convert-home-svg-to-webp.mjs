import sharp from "sharp"
import fs from "fs/promises"
import path from "path"

const files = [
   {
      input: "public/home/1.svg",
      output: "public/home/1.webp",
      width: 900,
   },
   {
      input: "public/home/2.svg",
      output: "public/home/2.webp",
      width: 900,
   },
   {
      input: "public/home/3.svg",
      output: "public/home/3.webp",
      width: 900,
   },
   {
      input: "public/home/Donation.svg",
      output: "public/home/Donation.webp",
      width: 900,
   }
]

async function convert() {
   for (const file of files) {
      const inputPath = path.resolve(file.input)
      const outputPath = path.resolve(file.output)

      await fs.mkdir(path.dirname(outputPath), { recursive: true })

      await sharp(inputPath, { density: 300 })
         .resize({ width: file.width })
         .webp({ quality: 82 })
         .toFile(outputPath)

      console.log(`Converted: ${file.input} -> ${file.output}`)
   }

   console.log("All SVG files converted to WebP.")
}

convert().catch((err) => {
   console.error(err)
   process.exit(1)
})

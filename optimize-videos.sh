#!/bin/bash

mkdir -p public/videos/mobile
mkdir -p public/videos/desktop

for file in 1-3 2-1 1-2 2-2
do
  echo "Optimizing mobile: $file"

  ffmpeg -y -i public/videos/$file.mp4 \
  -vf "scale=900:-2,fps=30" \
  -c:v libx264 \
  -profile:v high \
  -preset slow \
  -crf 20 \
  -pix_fmt yuv420p \
  -an \
  -movflags +faststart \
  public/videos/mobile/$file.mp4

  echo "Optimizing desktop: $file"

  ffmpeg -y -i public/videos/$file.mp4 \
  -vf "scale=1280:-2,fps=30" \
  -c:v libx264 \
  -profile:v high \
  -preset slow \
  -crf 19 \
  -pix_fmt yuv420p \
  -an \
  -movflags +faststart \
  public/videos/desktop/$file.mp4
done

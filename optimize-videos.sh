#!/bin/bash

mkdir -p public/videos/mobile
mkdir -p public/videos/desktop
mkdir -p public/videos/posters

for file in 1-3 2-1 1-2 2-2
do
  echo "Optimizing mobile: $file"

  ffmpeg -y -i public/videos/$file.mp4 \
  -vf "scale=540:-2,fps=24" \
  -c:v libx264 \
  -profile:v high \
  -preset slow \
  -crf 28 \
  -pix_fmt yuv420p \
  -an \
  -movflags +faststart \
  public/videos/mobile/$file.mp4

  echo "Optimizing desktop: $file"

  ffmpeg -y -i public/videos/$file.mp4 \
  -vf "scale=900:-2,fps=24" \
  -c:v libx264 \
  -profile:v high \
  -preset slow \
  -crf 27 \
  -pix_fmt yuv420p \
  -an \
  -movflags +faststart \
  public/videos/desktop/$file.mp4

  echo "Creating poster: $file"

  ffmpeg -y -i public/videos/$file.mp4 \
  -ss 00:00:00.300 \
  -vframes 1 \
  -vf "scale=540:-2" \
  -q:v 6 \
  public/videos/posters/$file.jpg
done

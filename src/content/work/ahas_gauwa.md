---
title: Ahas Gauwa (1974)
date: "2023-10-17"
description: Using OCR to extract burnt-in subtitles from video files
hero: "writing/ocr/ocr.gif"
---

![ocr](/writing/ocr/ocr.gif)

During my time at Cineric, I had the pleasure of working on the restoration of Ahas Gauwa (1974), a classic Sri Lankan film directed by Dharmasena Pathiraja. I handled the film's digital assembly and helped produce new English subtitles. This post focuses on the latter.

The client needed brand new English subtitles, but manually transcribing and timing subtitles for a feature-length film is time-consuming. Fortunately, we had access to a digital video transfer (likely VHS) with burnt-in English subtitles we could leverage as a starting point.

 The challenge was extracting the on-screen text. I managed to do so using Torbjørn Pedersen's (National Library of Norway) Python script [video-ocr2srt](https://github.com/torbjornbp/video-ocr2srt) to extract the burnt-in English subtitles. The script performs optical character recognition (OCR) on the video file and generates a SRT subtitle file along with a detailed JSON file.

The script uses the EAST (Efficient and Accurate Scene Text) detector model for text detection and the Pytesseract library for OCR. It handled the heavy lifting of creating in and out points for subtitle lines, processing the 110-minute video in under 40 minutes. The output needed cleanup work—duplicate lines and stray special characters appeared throughout, likely due to the poor quality of the source transfer. I still needed to correct spelling, grammar, punctuation, and timing manually.

Despite the cleanup required, the script gave us a solid foundation that made collaborating with the translator significantly faster than a from-scratch approach.
---
title: Handwriting Corrector with Robot Arm
date: '2024-01-21'
description: Handwriting Corrector using React, Django, ESP32 Robot Arm (for the lolz) for NUS Hack&Roll 2024
link: 'https://devpost.com/software/handwriting-corrector-for-kids?ref_content=my-projects-tab&ref_feature=my_projects'
tags: ['Event', 'Team Project', 'React', 'Django', 'ESP32']
cover:
  [
    '/projects/2024_01_21_handwriting.png',
    'https://docs.google.com/presentation/d/1MdPcgQ-L4R9tchKWKkCT3o-WJN2rFLp9NnFTf3fFWnU/embed?start=false&loop=false&delayms=3000'
  ]
---

## Inspiration
In a class of 30 something young students, it's often the case that teachers are unable to offer the best feedback on penmanship of little ones. They mix letters like "d" and "b" together or mix letters of different capitalization in a sentence. When reviewing work, teachers often don't have the capacity to point out every mistake in their writing - indeed, it's usually enough if the rough meaning is carried across. Our app aims to solve that by intelligent handwriting analysis to give suggestions, so that *speling mistaks will be no moar.*

## What it does
On the web app, take a picture of the handwriting/text with your phone (or laptop webcam, if you're that kind of person). The app will take a bit of time in analysis and then display the corrections to the writing that can be made. If the handwriting is poor, you will get a slap on the wrist from the robot arm.

## How we built it
This project is built on a simple React frontend and a Django backend. The secret sauce behind text analysis is the open-source Tesseract OCR engine and interfaced with the `tesserocr` python wrapper. The detected text is then fed into ChatGPT before being displayed on the frontend. The app is deployed on Render as a docker instance. The virtue of discipline compels the robot arm to move when the model detects bad handwriting

## Challenges we ran into
The principal challenge, as suspected initially, was the reliability of Tesseract on handwritten text, 
and that in turn affected the quality of the subsequent output from ChatGPT. Tesseract is primarily pre-trained on printed text and has difficulty identifying handwritten text. We tried to make a preprocessing pipeline with contrast increasing/threshold and de-skewing but could not get auto de-skew to work reliably. So we disabled that. But then the inferences made by the model changed quite wildly based on lighting conditions of the photo and the preprocessing did not necessarily make our results better, so we decided to skip the preprocessing step altogether.

## Accomplishments that we're proud of
This is functional, and the robot arm.

## What we learned
Open source is *crazy*. Without open source programs like Tesseract or hacky libraries like g4f, this project could not have come to life.

## What's next for Handwriting Corrector for Kids
1. Tesseract was chosen because of its all-around ability to identify groups of text from an image, the individual characters in a word and the ability to string characters together to form distinct words, though its inferences are not the most robust, especially without proper preprocessing.

2. A reliable image preprocessing pipeline might increase inference quality significantly, as would a different OCR method (like CNN-based model)

3. Increase IOT integration to provide better reinforcement learning outcomes.

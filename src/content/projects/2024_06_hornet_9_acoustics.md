---
title: Hornet 9 Acoustics
date: '2023-06'
description: STM32 PCB with FFT and SPI Screen
link: ''
tags: ['STM32', 'Altium', 'C++']
cover:
  [
    'https://www.youtube.com/embed/FN5eDfjWPFo?si=UTK4ZLzU-uXgoMBx',
    '/projects/hornet_9_acoustics/1.jpeg',
    '/projects/hornet_9_acoustics/2.png',
    '/projects/hornet_9_acoustics/3.jpeg',

    '/projects/hornet_9_acoustics/10.jpeg',
    '/projects/hornet_9_acoustics/11.jpeg',
    '/projects/hornet_9_acoustics/12.jpeg',
    '/projects/hornet_9_acoustics/13.jpeg',
    '/projects/hornet_9_acoustics/14.jpeg',
    '/projects/hornet_9_acoustics/15.jpeg',
    '/projects/hornet_9_acoustics/16.jpeg',
    '/projects/hornet_9_acoustics/17.jpeg'
  ]
---

1. Generated a Butterworth Filter using the [Filter Design Tool](https://webench.ti.com/filter-design-tool/)
2. Implemented an STM32G473 PCB with add on filter boards. Meant to take in 4 hydrophone signals, and processed it.
3. Repurposed the PCB to use a regular microphone, and used CMSIS DSP FFT to implement a rudimentary communication system to send bits
4. Configured & Debugged SPI Settings with STM32 Cube, and used PlatformIO. Added ST7735 LCD.
5. Debugged the main Hornet 9 Robot during pool tests, such as power issues, sensor reliability issues.

[Youtube Short](https://youtube.com/shorts/diRej3JHTR4?si=pdne9r9ZMjfEfvD4)

---
title: Count2ROM
date: '2023-02-19'
description: Simple DIY CPU built from EEPROM, Counter and lower level logic chips
link: 'https://oshwlab.com/zunmun/3dsage-computer'
tags: ['Highlight', 'PCB', 'Electronics']
cover:
  [
    '/projects/count2rom/count2rom.jpg',
    'https://www.youtube.com/embed/G6IVHm1JEh0',
    'https://www.youtube.com/embed/akaKY63T-8I',
    '/projects/count2rom/pcb1.png',
    '/projects/count2rom/schematic/main.png',
    '/projects/count2rom/schematic/program-counter.png',
    '/projects/count2rom/schematic/EEPROM.png',
    '/projects/count2rom/schematic/controller.png',
    '/projects/count2rom/schematic/led-visualiser.png'
  ]
---

DIY CPU built from EEPROM, Counter and lower level logic chips.

This is a very simplified processing unit. It is designed such that you can

1. Program instructions on the EEPROM & Execute them in sequence
2. You can pass in input through the buttons and see output through LEDs
3. This input can be read by the EEPROM, which would change the instruction being ran
4. The instruction can modify the output/ modify the program counter (OUTPUT->PC_IN_CTRL1), acting as a JMP statement

Arduino is acting as a stand in clock module.

Components are bought online (using Shopee).
PCB Designed using EasyEDA Designer, Manufactured by JLCPCB.
EEPROM Programmed using a Raspberry Pi Pico (with a related PCB)

Some code available at https://github.com/Hackin7/techmodlogic

https://oshwlab.com/zunmun/3dsage-computer

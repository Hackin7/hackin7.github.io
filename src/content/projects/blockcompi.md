---
title: BlockComPi
date: '2015-06'
description: This website! Still a work in progress. Will want to add features!
link: 'https://github.com/Hackin7/BlockComPi'
tags: ['+', 'Personal Project', 'Raspberry Pi', 'Python', 'Electronics', 'Casing']
cover: 'https://raw.githubusercontent.com/Hackin7/BlockComPi/master/Images/DSC_4991.JPG'
---

# BlockComPi

A Block of a Computer of a Raspberry Pi Phone

No longer working as of 2017 (due to 2G being phased out)

## Overview

Thought of what to do with your Raspberry Pi? During Mid 2015, I decided to use a Raspberry Pi 2, and mainly some other components to build a Raspberry Pi Phone, mainly because i had an Adafruit FONA 2G that is going to be outdated in 2017. This design is partially based on the PiPhone, because i also conveniently had a PiTFT 2.8 , so I couldn't use this TyPhone Design.

Most DIY Phones back then only showed that they could make phone calls.
I wanted to improve it and make it receive phone calls as well as send/ receive text messages

Components needed to build:

1. Raspberry Pi 2
1. Raspberry Pi Camera Module
1. Adafruit PiTFT 2.8 resistive
1. Adafruit FONA 2G (could use 3G but have to modify the design a bit)
1. Earphones with Mic
1. 5V boost converter 
1. 2000mah or so battery from phone
1. Buttons,  Female Headers, Diode
1. Wires and a PCB to connect everything together
1. White Acrylic Case with PLA filament from 3Doodler to connect the pieces together 
1. Wooden Back Plate
1. Black Stylus (Nintendo DS)
1. Buzzer (For Notifications) (connects through expansion port)

Software:

1. Based on Raspbian Jessie
1. Crappily Coded in Python
1. Uses PyGame, with PiTFT Rotated 180
1. garthvh's menu_8button.py is under no license, and has been adapted into PitftGraphicLib.py for easier use with PyGame in my code
1. No Bitmaps or images used
1. Note that virtual keyboard, licensed under the GNU GPL, is included, used, and has not been modified.
1. The Main Menu, Notifcentral.py, has a Notifications  and Service system and an App drawer which layout apps as in App.py
1. Can actually Receive and send Phone Calls and SMS through Notifications and Service System
1. The Apps included are, Phone, Messages (just something that sends Messages), Contacts, Camera, X11 and Tab Mode.
1. The ones coded my me are Phone (just a dialer ), Messages (just something that sends Messages), Contacts (stores contacts in config file
1. The Camera app actually adafruit pi cam software , which is included under BSD license
1. X11 shows the X Server with Matchbox Desktop Environment on PiTFT, while Tab Mode actually shows the full Raspbian Desktop through the main TV Output, HDMI or Composite

What it can do:

1. Modular (Anything Major like the PiTFT, Camera, Pi, FONA etc. can be removed and replaced)(Small components like the buttons can be easily desoldered)
1. Expandable (All unused GPIO can be used through the female header connectors, I2C is also available)(4 Full USB ports)
1. Can be used in other projects (eg. Upcoming Home Automation System)
1. Full power of Command Line and X11 Linux (Programming)
1. Portable use (But battery is not that good and would be best used as a UPS)
1. Can Receive and send Phone Calls and SMS through embedded Earpiece
1. Why build This: Why not?

That's all. Thanks for reading. Have Fun!

Original Source at http://makingbuildingstuff.blogspot.sg/2016/03/blockcompi-block-of-computer-of.html for more info

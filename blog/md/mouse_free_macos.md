---
title: Mouse-free mac OS
date: 2021-04-02
description: Share my configuration to achieve mouse-free mac OS
tags: [mac OS, Vim]
categories: [Productivity]
---

# Why mouse-free?

Mouse-free is a state that you can do almost all of you work by using only the
keyboard, so it is meaningful when you are frequently switching between keyboard
and mouse/trackpad, where keyboard for editing and mouse/trackpad for
navigation. In my opinion, mouse-free is only useful for programmer or word
editor, and it is useless for gamer or graphic designer.

Mouse-free seems like a geek term, but its true intention is to refine your
workflow, improve your productivity, and give more fun to your job. It is not
necessary, but it is harmless to try.

# What do we need?

First of all, there are many alternatives to my configuration. One should be
open-mind and find the best way for yourself.

## A good keyboard

This is not necessary, but a good keyboard makes you want to use it more, and
that is the motivation to mouse-free.

## Vim-mode editor

First of all, I said `vim-mode editor` instead of a software call `vim`.
Vim-mode is an powerful editing pattern, which uses the alphanumeric keys and a
few function keys, like `ctrl`, `shift` or `tab`, to do all the work of editing,
navigating, modifying, and searching by using different modes. With vim-mode,
you can achieve mouse-free for your editing work.

## Quick Launch App

During programming, maybe we want to google something, so we will switch to the
browser. Or we want to take a note, loop up something or chat with others, so we
need to open other App. My practise is to launch all the App by searching and
open, using spotlight or its alternative: Alfred. Furthermore, I defined some
key combination for some commonly used App, like

| Key stroke   | App        |
| :----------- | :--------- |
| `Opt-Ctrl-F` | Browser    |
| `Opt-Ctrl-I` | Terminal   |
| `Opt-Ctrl-M` | Mail       |
| `Opt-Ctrl-e` | Finder     |
| `Opt-Ctrl-]` | PDF reader |

So I can quickly switch between these App without any mouse click. This
function can be achieved using the Alfred workflow or native Automator software.
Here is the
[tutorial](https://learn.adafruit.com/launch-deck-trellis-m4/app-launching) for
automator.

## Window management

To someone who are still using mouse to resize your window, there is better
choice now. Normally, we just want to resize our window to some specific layout.
For example, left-half and right-half, or maybe a quarter. Here is a free
software to do that, [Rectangle](https://rectangleapp.com/) (Do not pay for
these basic functions).

If you want to split your finder window, here is a powerful alternative,
[QSpace](https://qspace.awehunt.com/en-us/index.html). This software makes me
like finder, so I think it deserves the money.

## Maximize your working area

As I mentioned before, I do not need to click to open App or any file, so I
will hide the dock and this gives my extra working space. Another thing that
annoys me is the menu bar, so I also hide it.

```text
System preferences -> Docks & MenuBar -> Automatically hide and show the Dock
System preferences -> Docks & MenuBar -> Automatically hide and show the menu bar
```

# Last word

This is one's personal preference to choose his/her workflow, and there is
nothing right or wrong.

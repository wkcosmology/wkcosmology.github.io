---
title: "Vim tutorial-2: Tab and Window, Buffer and File"
date: 2021-04-12
description:
    I will introduce the concept of tab and window, buffer and file, and their
    relationships.
tags: [Vim, Software]
categories: [Productivity]
---

# Preface

Buffer, file, window, tab are the most basic things in an editor, but they are
easily ignored by many users. <a href="#fig1">Fig. 1</a> summarizes the
relationships among tabs and windows, buffers and files in Vim.

-   File is the file on the disk.
-   Buffer is the temporary object created by Vim. Users can use buffer to
    interact with files.
-   Window is to display the content in buffer. Each window can only be binded
    to one buffer, but the same buffer can be displayed though several windows.
-   Tab is the collection of all windows on the same full screen (here full
    screen means the screen occupied by Vim). In one tab, we can generate
    windows though splitting (vertical or horizontal).

<figure id="fig1">
<img src="/blog/image/vim_buffer_window.svg" width=740>
<figcaption>
Figure 1. Demonstration of the tabs and windows, buffers and files in Vim.
</figcaption>
</figure>

# Buffer and File

File is the easiest concept to understand here, which is the file on the disk.
The core task of an editor is to read the content of a file, edit it and save it
back to the disk. A basic computer hardware knowledge is that the read and write
to a disk is super-slow compared to the main memory. So most of the software
will create a temporary object in the main memory and write the content to the
disk when the job is done. In Vim, buffer is the that object.

-   You input `:edit filename`;
-   Vim will first create a buffer called `filename`. Then, Vim will see if
    `filename` exists. If it exists, Vim will load the content in the disk to
    the buffer and you can edit it. Otherwise, Vim will do nothing, and you can
    edit an empty buffer.
-   After editing, you can use `:write` to write to the disk. If the file
    already exists on the disk, Vim will replace the content with the new one.
    Otherwise, Vim will create a new file on the disk and write the content to
    it.

There are something you need to be careful.

-   Buffer is not necessary to be binded with a file on the disk. Actually, some
    plugins use buffer to present other things, like file tree, searching
    result, terminals and so on.
-   Vim will not synchronize the content of buffer and the disk until you
    explicitly call `:write` or `:w`. So the two commands that Vim used to
    interact with file on the disk is `:write` and `:edit`, while all other
    editing commands is for the user to interact with the buffer.

# Tab and window

## Creation

When you enter Vim though `vim` command, you will have one window in one tab.
Then you can use `:split` to split the window horizontally (`:vsplit` for
vertical splitting), and you will have several windows (like
<a href="#fig1">Fig. 1</a>) in one tab.

To create new tabs, you can use `:tabnew` to create more tabs, and you can split
windows in the new tabs.

## Navigation

To jump to other window, the most basic key-mappings are `<Ctrl-w>h`,
`<Ctrl-w>j`, `<Ctrl-w>k` and `<Ctrl-w>l`. It will jump to the adjacent window
relative to the current cursor position. For example, if you press `<Ctrl-w>l`
in `Win-1` in <a href="fig1">Fig. 1</a>, which window it will jump to? If your
cursor is at the upper half of `Win-1`, it will jump to `Win-2`. Otherwise, it
will jump to `Win-3`.

If there are too many windows, a useful plugin is
[vim-choosewin](https://github.com/t9md/vim-choosewin). It will generate
alphabetic characters for each window, and you can jump to the target window by
pressing the corresponding character. Another useful function of this plugin is
that you can swap the buffers of two windows.

Sometimes, you might want to maximize one window. For example, you opened the
documentation in a small splitting window, which is inconvenient for reading, so
you want to maximize it. After that, you want to restore to the previous window
layout. There are many plugins out there for this, and I found a stable one,
[vim-maximizer](https://github.com/szw/vim-maximizer).

To navigate the tabs, you can use `:tabnext` and `:tabprevious`, and I mapping
these two commands to `]t` and `[t`.

To customize the name of the tab, you can use the plugin
[taboo.vim](https://github.com/gcmt/taboo.vim).

## Other things

-   In one Vim process, you can only have one active cursor, so you can only
    have one current tab and current window.
-   The content of one buffer can be displayed in several windows in different
    tabs. You do not need to worry about the synchronization, because you can
    only have one current tab and window.
-   It is a good habit to restrict the maximum line length of your code (there
    are many formatting plugins out there), then your code will not be hidden
    when you vertically split the tab.

# Last word

A conceptual knowledge of the relation between buffer and file is sufficient.
The tab and window are more practical, and you need to use them to maximize the
usage of your screen.

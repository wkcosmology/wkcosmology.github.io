---
title: "Vim tutorial-0: Why vim?"
date: 2021-04-07
description:
    I will introduce my own experience on vim, and why I
    choose it.
tags: [Vim, Software]
categories: [Productivity]
---

# Some terminology

-   `vi`: an ancient text editor for Unix operating system created in 1976 by
    Bill Joy.
-   `Vim (Vi improved)`: a clone of `vi` by Bram Moolennaar in 1991. This is
    still updating.
-   `NeoVim`: a refactor of traditional Vim, released in 2015.

# Why Vim?

## Editing pattern

Normally, editing code is not just inserting characters. Instead, you need to
navigate, delete, modify, copy, paste, replace, search and do many other things.
So, if your editing is so simple that a plain text editor, like TextEdit on mac
OS, is sufficient, just skip this blog. Otherwise, Vim/NeoVim might provide a
way to do your job more efficiently.

The most powerful thing of Vim is its editing pattern, rather than the editor
itself. For example, many modern popular code editor have implemented vim mode
using plugin or as built-in functionality, like VS code, Jupyter Notebook, or
some note-taking App like Obsidian. Even Emacs, the most famous competitor of
Vim, has vim-mode. All these facts prove that Vim is about the editing pattern,
instead of a editor itself. Nowadays, people are still actively developing and
using the editor of Vim/Neovim, because these editors have implemented the
Vim-editing-pattern to the best.

Vim is a [modal editor](https://en.wikipedia.org/wiki/Vi#Interface), and this is
its essence. We know that, in a normal editor, the home row (alphanumerical
keys) is used to insert characters, so we need to use the modifier keys (`Ctrl`,
`Alt`) or mouse for other functions, like jump or select. In Vim, all these
functionalities can be done using just the home row. And the trick is to
interpret the same key differently in different **mode**. For example, `h` is to
insert the character `h` in `insert` mode, but it is to move cursor left in
`normal` mode. `w` is to move forward by a word in `normal` mode, but it is to
write (means save) the buffer to the file in `command` mode. And you just need
some extra keys to switch between these modes. Consequently, you can keep your
hands in the home row for code editing and achieve
[mouse-free](mouse_free_macos.html).

## Highly customizable

One of the reasons that makes me choose Vim/NeoVim is its high customizalibity.

**Vim is simple and transparent.** Vim is assembled by many basic elements, like
buffer, window, tab etc. And it has all kinds of public APIs that I can use. For
example, I can put the file-tree or terminal on the side of the window, below
it, or just floating on it. Since most of the Vim plugins are built on the APIs
provided by Vim, one can easily hack into it to change its behavior (except some
heavy plugins, like YouCompleteMe or coc).

**Vim is well-documented.** In Vim, all the commands and functions are
well-documented. Most importantly, these APIs are very stable. Moreover, there
is already a very large Vim plugin ecosystem out there, where you can easily
install, use and configure them.

## Longlived

I am a stingy guy, so I am not willing to spend so much time to learn something
I will not use for a long time. I know, there are many popular and modern code
editors out there, like VS Code, and I tried some of them. However, I have a
strong believe, as long as coders are still using terminals instead of
graphic-centric system, or programmers still code by typing, Vim will have many
users. But I do not have this belief for other editors, except Emacs.

# Why not Vim?

## Expensive

It takes a long time to learn Vim for a beginner. The first thing is to break
the normal editing habit: move without arrow keys, and jump without mouse. One
need to practise on purpose to form the muscle memory, and it will be
inconvenient at the beginning. Moreover, it will make you question the
motivation to learn Vim.

## Addictive

One of the huge problem of Vim is that it can make you addicted to it. Of my own
experience, once I have been familiar with Vim's motion though `h`, `j`, `k`,
`l`, some jump commands, and the usage of text object, I just cannot control
myself to use these in other editors. As a result, I use the Vim-mode in
Obsidian, install the Vim extension in JupyterLab etc.

# Last word

Vim is not a silver bullet, and no editor is. It is more like a choice, a hobby,
or a taste. I will not recommend Vim to anyone. Instead, I will only tell others
what Vim is, and let himself/herself to judge if it can help. Meanwhile, I will
not accept any slander to Vim, because I know what I am doing.

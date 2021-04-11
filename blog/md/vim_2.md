---
title: "Vim tutorial-1: Motions"
date: 2021-04-08
description: I will introduce how to move effectively in Vim
tags: [Vim, Software]
categories: [Productivity]
---

# Preface

In this blog, I will only present some commands commonly used by myself instead
of a comprehensive list, because you can check the documentation for that.
Nevertheless, there are still a lot of commands introduced in this blog,
compared with four arrow keys and one mouse used in other editors. The method to
digest these commands is to learn by using it. No matter how fancy a command is,
it is meaningless if you do not use it in your editing workflow. So here is my
suggestion. You starts from the most basic commands. Once you find that you are
repeating some tedious pattern, like pressing the same key many times, and you
want to do it more efficiently. Then you can check the documentation or this
blog for more advanced commands. One of the beauty for Vim is that you can
always find a way to do the repeating tedious work efficiently. For other
editors (not Emacs), the only thing you can do is to wait for the developers to
invent some magic button for it.

# Basic motions

## Character-wise motion

To effectively use Vim, you should keep your fingers on the home row keys and
abandon the arrow keys. In normal mode, you should use `h`, `j`, `k`, `l`
instead. This might feel weird at first, but once the muscle memory is formed,
you will find it much more efficient than the arrow keys. To help Vim users
practice, there is a plugin called
[vim-hardtime](https://github.com/takac/vim-hardtime), which is to disable the
arrow keys in normal mode.

In insert mode, we need to map other keys for character-wise motion to replace
the arrow keys, because Vim does not have other default key mappings. I prefer
to use the `<Ctrl-f>` to right arrow and `<Ctrl-b>` for left arrow, where these
keys are borrowed from emacs and supported in other places, like terminal.

My config is

```vim
inoremap <C-f> <Right>
inoremap <C-b> <Left>
cnoremap <C-f> <Right>
cnoremap <C-b> <Left>
```

Here `inoremap` means key mapping in insert mode and `cnoremap` is for command
mode.

## Inline motion

When the line is too long, like more than 100 characters, it is annoying to move
the cursor one character per time. Vim has some more efficient inline motions.

**Jump by word** In Vim, a **word** is a contiguous sequence of letters, digits
and underscores, **or** a sequence of other non-blank characters, separated with
white space. For example, `123mutouren`, `vim_user`, `,,,` are words, and
`vim,user` consists three words: `vim`, `,` and `user` (I will introduce more
about word in the section of text object). Now, back to the motion. In Vim, you
can use `w` to jump to the first character of next word, and `b` to jump to the
first character of the previous word.

**Jump by search** In Vim, you can perform inline search by pressing `f{char}`
for forward searching `{char}` and `F{char}` for backward searching. Notice that
this is an inline searching, so you cannot jump to other line with this
operation. If there are other same character between the cursor position and the
destination, you can use `;` to repeat the same search. If you jump too far, you
can use `,` to repeat the same search in the opposite direction.

**Special destinations** In Vim, you can jump to the first non-empty character
by pressing `^` in normal mode, or to the last character by pressing `$` in
normal mode. Besides, Vim has `<Shift-i>` to jump to the beginning of the line
and switch to the insert mode; `<Shift-a>` is to the end of the line.

## Line-wise motion

The most basic line-wise motion is to use `j` and `k` to move upper and down. To
speed up, you can use `{count}j` or `{count}k` to repeat the operation `{count}`
times. For example, `10j` is moving the cursor downward 10 lines in normal mode.
A practical configuration is to enable the absolute and the relative line number
simultaneously in Vim with

```vim
set number relativenumber
```

so it will present the absolute line number for current line and relative line
number for other lines. The absolute line number helps you to locate your
position in the buffer, and relative line number is very useful for jumping.

If you want to scroll the page more fast, you can use `<Ctrl-d>` to scroll
downward by half a page and `<Ctrl-u>` to scroll upward by half a page (Here a
page means the height of the window). Meanwhile, you can use `gg` to the first
line and `<Shift-g>` to the last line.

## Easymotion

The killer of the motion in current window (the visible part of the buffer) is
[vim-easymotion](https://github.com/easymotion/vim-easymotion) or
[hop.nvim](https://github.com/phaazon/hop.nvim). Using these plugins, you can
input the character of the destination and it will generate different keystroke
combinations for all the same characters in the visible area. Then you just need
to input the keystroke that located in the destination. Here the text cannot
express it power, so I suggest you go to their website to see the demo.

# Motion by search

Normally, when you perform a search, the cursor will be moved to the matched
result. Thus, we can also use search to do the motion (`f{char}` and `F{char}`
introduced above have the same logic).

## In-buffer search

In Vim, you can use `/{patter}` to perform the search in the current buffer, and
all the results will be highlighted. Then you can use `n` to jump forward (`N`
for backward) among these matched results. One should be careful that the search
will start from the beginning of the buffer, instead of the visible window.
Thus, if you can see the target or destination on the visible window, I suggest
you use <a href="#easymotion">Easymotion</a>.

A similar command is `*`, which is to search the word under the cursor and jump
to the next match. Then, you can use `n` (`N`) to jump forward (backward). This
command is to exactly match the word, thus the matched substring does not count.
For example, if you press `*` when your cursor is on `vim`, then `vim_user` will
not be included in the results. However, if you perform a search with
`/vim<cr>`, the substring of `vim` in `vim_user` will be included.

## Cross-files search

If you want to search in the project, like a Git repository, the best practice
is to use some external plugins. There are many great plugins out there to
perform these kind of searching or fuzzy searching, like
[fzf.vim](https://github.com/junegunn/fzf.vim),
[telescope.nvim](https://github.com/nvim-telescope/telescope.nvim),
[coc.nvim](https://github.com/neoclide/coc.nvim),
[LeaderF](https://github.com/Yggdroot/LeaderF) etc. These plugins use the
external command line tools, like
[ripgrep](https://github.com/BurntSushi/ripgrep) or
[Ag](https://github.com/ggreer/the_silver_searcher), to perform the search under
certain directory and present the result though Vim interface.

The best part of these plugins is the fuzzy, live, interactive searching or
filtering. We known the basic searching is that you input some pattern, and it
returns all the matched results. These tools can do better.

-   It will return the matched results while you are typing. As a result, when
    you notice that there are too many matched results, you can input more
    information to narrow it down.
-   It can perform fuzzy match. For example, if you input `vimuser`, it may also
    return the result that include substring like `vim_user` or `VimUser` etc.
    This is very useful, because most of the time we only have a fuzzy idea
    about what we want to search.
-   It can sort the results according the similarity between the input pattern
    and the returned results. This depends on the specific algorithm, but we can
    imagine that the exact matching should have a high score than the fuzzy
    matching.

These fuzzy finders have greatly boosted my working efficiency. For example, I
use it to open files, search variable names, search recently opened files, jump
to different sections in `.tex` file and many other things.

# Last word

When I am writing this blog, there are so many usage examples of Vim jump into
my head. And I am so impressed about how Vim have helped me on editing, even
though I have just explored less than 10% of full Vim functionality.

In the word of softwares, we see old things gone and new things come. But I
prefer to regard the softwares as a container for wisdoms. It is merely that the
old softwares are too small to hold those new wisdoms, and we need bigger
container. Meanwhile, the old wisdoms preserves.

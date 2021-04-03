---
title: Make your homepage from scratch
date: 2021-04-01
description: Share my experience of making this homepage from scratch.
tags: [HTML, CSS, JavaScript]
categories: [Programming]
---

# Motivations

Previously, I use [Hexo](https://hexo.io/) to make my homepage and host my
blogs. Later, I found that I spent too much time to figure out how to configure
Hexo, make it right, and fix many meaningless bugs. So I think it might be a
good idea to make my owen homepage from scratch using HTML, CSS and JavaScript.
Even though I will meet much more obstacles, these knowledge is at least useful.

# Experience

## Learn HTML, CSS and JavaScript

At first, I just want to make several static pages to host some introduction to
myself, and this is quite easy to achieve using HTML and CSS. Both languages are
quite easy to learn, because I only spent several hours reading
[HTML and CSS: Design and Build Websites](https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?dchild=1&keywords=html+css&qid=1617297625&sr=8-3)
to get all I need.

Then I thought that it might be a good idea to add a unified navigation sidebar.
Since I do not want to copy and paste the same code to my `.html` files, I learnt
use JavaScript to retrieve the code for sidebar and paste it in all the `.html`
files. The basic idea is that JavaScript can interact with html using the `id`
or `class` as identifier, so I just put code for sidebar in a isolated file and
use this code to replace the pre-defined anchor in HTML. During that time, I
found that Google is really a good thing, because I can found nearly all the
solutions for my requests.

After that, I thought I should add some fancy things, or something that can
move, so I added two pie charts in the `Publication` section. During that time,
I learnt how to call other packages using the content delivery network (CDN).
Basically, there are many existing JavaScript code on the internet, and you can
include the URLs in your HTML page, then you can call the functions in those
code. I have to say this is very convenient, because you do not need to install
these packages on the server. There is one thing to do, which is to
automatically retrieve the citation statistics from ADS using JavaScript.
Currently, I have not figured out their APIs, but I come back to this later.

## Build the Blog

Until now, the general framework on my homepage is done, except one thing, blog.
I personally do not like to write blog on other platform, because it is
something like that you are selling your work to these platform for nothing.
Moreover, some platforms require readers to register before they can read.

My general idea is to write blogs using markdown and convert it to HTML with
some tools. Initially, I want to do the conversion on the fly, where the HTML
page is generated and presented after you click on the entry. However, I still
do not know how to do that after spending lots of time searching. Then, I have
to generate the HTML pages in advance, and deliver it to the server.

Now the TODOs are clear.

-   Convert the markdown file to `.html` content
-   Append the content to a pre-defined header, where the header includes the
    elements of sidebar etc.
-   Extract table of content, because I want to put it in a sidebar
-   Generate a `.json` file for all the information for all the blogs, like
    title, path, date etc. - Render LaTex equations

For markdown conversion, I choose
[showdown](https://github.com/showdownjs/showdown) because it has a lot of stars
on GitHub, and it turns out that my choice is wise. Then I need to manipulate
the HTML elements, and I found it cannot be done natively in Node.js (Node.js is
what I used to run JavaScript code locally.). The solution is to install a
package call [jsdom](https://github.com/jsdom/jsdom) which provides all the
functions on browser. The following things are fluent, where I use
[markdown-toc](https://github.com/jonschlinkert/markdown-toc) to extract the
table of content, [front-matter](https://github.com/jxson/front-matter) to
extract the header information for markdown file, like title, date, description
etc.

# Last word

It takes me about three days to make all these things, and I found this process
is really fun. I think it is fine to copy and paste other's code or use the
framework like Hexo. However, if you want to spend some time managing it, like
hosting a blog, it will be better to learn the basic things. It is meaningless
to spend time fixing a bug of Hexo using Google, but it is benefit to learn how
to implement some stuff using the basic language.

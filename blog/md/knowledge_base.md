---
title: "Knowledge base for an astrophysicist-1"
date: 2022-08-18
description:
    As a rookie astrophysicist, I need to read papers, take notes, write code,
    analysis results, and write paper for projects, and I need to push several
    projects simultaneously. My head is not powerful enough to store all the
    relevant information, so I must dump them somewhere and retrieve them when
    needed. To do that, I built a knowledge base system based on several
    powerful applications. In this blog, I mainly introduce the applications I
    used for my workflow.
tags: [Software]
categories: [Productivity]
---

# Introduce my workflow

## Reading paper

Literature reading is a necessary step before and during any project. Before
initiating a project, one should do a comprehensive literature searching and
glancing for several reasons:

-   to ensure the 'noval' idea that motivates you has not been done by others
-   to learn the status of this field, like what has been done, what are the
    main remaining problems, etc.

Papers are usually very long with like 10+ pages, and I can only get a general
idea by reading it once. This idea can only exist in my mind for a very short
time, like a day, before I lose it. To make this paper useful for my project, I
have to dump this idea somewhere and, most importantly, make sure that it can be
retrieved conveniently when needed. _In summary, I need to textualize my general
idea on each paper I read and store it to a place that is convenient for
retrieval even I have forgotten that I read this paper._

## Tracking project

Doing scientific research is like gold mining, as you don't know where the gold
is and where to mine. So you cannot foresee the obstacles or predict the
results, not to mention to plan the whole project. This is one aspect. Another
aspect is about the strategy for mining. I prefer to dig some shallow holes to
see if I can get some trace of potential gold. Then I go deeper with the most
probable hole. And I predefine a threshold after which I will not go deeper and
turn to other holes. This is my strategy for doing science, which is tree-like.
Maybe other prefer different strategy, but I promise you that none of them is
linear.

The nonlinearity of scientific research makes it hard to organize, and the best
I can do is to track the project and record all the results I got. The majority
of my scientific results is figures.

## Recording idea

## Archiving material

# Applications

> I want to make the claim that the applications introduced here are not the
> optimal choices. Instead, these choices are made as a balance between the
> functions of these softwares and the time I spent to find them and learn them.

## Zotero

[Zotero](https://www.zotero.org) is a literature management application. I use
it to

-   Clip papers from internet and retrieve the meta-data for these papers;
-   Organize papers by putting them into different categories;
-   Generate bibtex entries for paper writing.

And I do not use Zotero to

-   Storage PDFs.
    -   The file system constructed by Zotero is unorganized, so I cannot index
        these files using DEVONThink.
    -   Also, the cloud storage of Zotero is kind of expensive.
    -   I kind of don't trust the cloud service of Zotero since they are not
        professional.
    -   So I put all my PDFs in my OneDrive and link to them in Zotero;
-   Add annotations.
    -   Applications come and go, but PDFs exist forever. So I want to the
        annotation is attached to the file.
    -   So I read PDFs using [PDF Expert](https://www.pdfexpert.com).

<figure id="fig1">
<img src="/blog/image/zotero_samp1.png" width=740>
<figcaption>
Figure 1. My Zotero screenshot.
</figcaption>
</figure>

## DEVONThink

[DEVONThink](https://www.devontechnologies.com) is an AI-powered file management
application. I use it to

-   Index all my literatures in Zotero
    -   So that I can use the powerful intelligent search engine in DEVONThink.
    -   And I can generate unique DEVONThink link so that I can link to this
        file from other places, like my note.
    -   I can also sync them to all my other devices, like my computer in the
        office and my iPad.
-   Track all my scientific projects, including
    -   my thoughts and ideas
    -   introduction to the data processing pipeline
    -   literature review
    -   scientific figures and their explanations
    -   discussion with my collaborators
-   Record all the programming-related stuff, including
    -   some problems I met and solutions
    -   some tricks
    -   some articles and blogs
-   Archive
    -   course material and notes
    -   my personal stuff
    -   my presentation slides
    -   all the administrative-related stuff

Nearly all my stuff is stored or indexed by DEVONThink, so it is my main
information-management application.

I have multiple databases for different purposes (See <a href="#fig2">Fig.
2</a>).

-   `Administration` includes all the administrative stuff like paperwork,
    application forms etc.
-   `Archive` has all the material that I am not gone use recently.
-   `Courses` has all the course-related material, and excellent lectures I
    found.
-   `Literature` is a pure indexed database to my Zotero papers and Obsidian
    vault.
-   `Programming` includes all the programming-related stuff, like some tricks,
    installation instruction of some software, bookmarks, RSS, scripts etc.
-   `ScientificProject` is for my researching
    -   Numbered folders are for all the projects that I have finished, or tried
        to finish, or am working on.
    -   `Collaborations` is for some collaboration meetings, seminars etc.
    -   `IncubationCenter` is to record some fuzzy ideas. Some of them are
        incubated and generate a numbered project folder, while others will be
        abandoned.
    -   `Math&Phys` includes note of some basic (astro)physics and mathematics
        needed by my projects, like some formulas.
    -   `Reviews` includes my own summary to some scientific topics.
    -   `Misc` includes all the stuff that I don't know where to put.

<a href="#fig3">Fig. 3</a> shows the file structure of one project.

-   `Overview.md` includes a general introduction to the project, its
    motivation, relative literature, and index to other parts.
-   `Discussion.md` includes all the discussions with my collaborators and my
    own thoughts.
-   `Topics` includes my summary to some sub-topics of this project.
-   `Logs` includes all the results I have gotten in a time order.

    -   As I said before, it is impossible to determine or even plan the
        structure of a scientific project before you finishing it. So this is
        the only way that I can think of to record the complete procedure of a
        scientific project.
    -   `Logs` is only for a complete record. For a higher perspective of the
        project, we can refer to these results from `Topics`, `Overview.md` and
        `Discussion.md`.

-   `Report` archives all the slides for discussion with my collaborators.

<figure id="fig2">
<img src="/blog/image/dt_samp1.png" width=740>
<figcaption>
Figure 2. My DEVONThink databases.
</figcaption>
</figure>

<figure id="fig3">
<img src="/blog/image/dt_samp2.png" width=740>
<figcaption>
Figure 3. File structure for one of my project.
</figcaption>
</figure>

## Obsidian

[Obsidian](https://www.obsidian.md) is a note-taking application featured in
double-link. I use it only for one thing -- taking notes of my paper reading.

My obsidian vault (or database) have three main folders

-   **Topic**: All the topics in my research field that I am familiar with,
    including research objects, methods, physical models etc.
-   **Paper**: All the papers that I have read, named by their arXiv number.
    -   The metadata of each paper includes its title, main authors, link to
        arXiv website, DEVONThink link to the PDF file, tags.
    -   The tag field in each paper reading note includes links to all the
        relevant topics, so that I can link different papers together through
        common topics.
    -   The note field includes: a quick summary to the paper, its method, its
        results and a discussion field for my opinion on this paper.
-   **Attachment**: All the figures.

<figure id="fig3">
<img src="/blog/image/obsidian_samp1.png" width=740>
<figcaption>
Figure 3. Demonstration of my paper reading note in Obsidian.
</figcaption>
</figure>

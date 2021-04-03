# Structure of the project

I have two kinds of pages, one is `main page` with white sidebar and dark page.
The other one is the `blog page` with dark sidebar and white page.

-   `main page`
    -   `index.html`: Welcom page
    -   `sidebar.html`: html code for sidebar
    -   `CNAME`: connect to my website
    -   `GITHUB-PAGES-SERVER`: Github added, I do not know what it is
    -   `about_me/`
        -   `introduction.html`: my introduction and cv
        -   `publiction.html`: my publication
        -   `research.html`: introducing the research
        -   `resource.html`: introducing the resource
    -   `blog/`
        -   `blog_index.html`: Introducing the blog in the main page
    -   `tool/`
        -   `tool_index.html`: This is to share the tools I made in the future
-   `blog page`
    -   `blog_sidebar.html`: html template to generate the sidebar for each blog
        page
    -   `blog_header.html`: html tempalte to generate the header for each blog
        page
    -   `blog_meta.json`: generated meta files for the blogs, containing the
        title, path, date and table of content.
-   `css/`
    -   `styles.css`: mainly for the styles of `main page`, also used for blog
        page
    -   `blog_styles.css`: only used for styles of the `blog page`
-   `js/`
    -   `sidebar.js`: generate the side for both the `main page` and the
        `blog page`. For the main page, it only copy and paste the content in
        the `/sidebar.html`. The `blog page` contains two part, one is the
        header part which only contains some simple elements, the other one is
        the content part which is for the table of contents of the blog.
    -   `generate_blogs_files.js`: This file is to combine the raw html page
        generated form the markdown file with the header and sidebar to provide
        a full html page.
    -   `mathjax.js`: Script directly copied online to configure mathjax
    -   `pub_chart.js`: Script directly copied online to configure the
        publication chart.
-   `script/`
    -   `generate_md.js`: local js file to convert markdown file to raw html
        file

# Workflow of the blog

-   Write the blog using markdown in `/blog/md/` directory.
-   run `node generate_md.js` in `/script/` directory to convert the markdown
    file to raw html file.
-   Stage, commoit and push all the chagnes to the github.

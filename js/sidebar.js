// display the sidebar for main page
function display_sidebar() {
    let sidebar = document.querySelector("#sidebar");
    fetch("/sidebar.html")
        .then((response) => response.text())
        .then((response) => {
            sidebar.innerHTML += response;
            let file = location.href.split("/").pop().split(".")[0];
            if (file === "") file = "index";
            let select = sidebar.querySelector("#" + file);
            select.className = "select";
        });
}

// display the sidebar header for blog page
function display_blog_sidebar_header() {
    let header = document.querySelector("#blog_sidebar_header");
    fetch("/blog/blog_sidebar.html")
        .then((response) => response.text())
        .then((response) => {
            header.innerHTML += response;
        });
}

// read json file recursively to get the sidebar hierarchy
function read_sidebar(ol, sidebar, k, lvl_cur) {
    for (var i = k; i < sidebar.length; i++) {
        if (sidebar[i]["lvl"] == lvl_cur + 1) {
            var ol_next = document.createElement("ol");
            var ret = read_sidebar(ol_next, sidebar, i, lvl_cur + 1);
            ol.appendChild(ret[0]);
            i = ret[1];
            // add collapsable function
            ol_next.classList.add("collapsed");
            ret[0].previousElementSibling.addEventListener(
                "click",
                function () {
                    this.nextElementSibling.classList.toggle("collapsed");
                }
            );
        } else if (sidebar[i]["lvl"] == lvl_cur) {
            var li_tmp = document.createElement("li");
            var a_tmp = document.createElement("a");
            var title = sidebar[i]["content"];
            a_tmp.appendChild(document.createTextNode(title));
            a_tmp.title = sidebar[i]["slug"];
            a_tmp.href = "#" + sidebar[i]["slug"];
            li_tmp.appendChild(a_tmp);
            ol.appendChild(li_tmp);
        } else if (sidebar[i]["lvl"] == lvl_cur - 1) {
            return [ol, i - 1];
        }
    }
    return [ol, i];
}

// display the sidebar content for the blog page
function display_blog_sidebar_content() {
    let content = document.querySelector("#blog_sidebar_content");
    var entries = JSON.parse(
        $.getJSON({ url: "/blog/blog_meta.json", async: false }).responseText
    );
    let blog_name = location.href.split("/").pop().split(".")[0] + ".md";
    var ol = document.createElement("ol");
    let sidebar = read_sidebar(ol, entries[blog_name]["toc"], 0, 1)[0];
    content.appendChild(sidebar);
}

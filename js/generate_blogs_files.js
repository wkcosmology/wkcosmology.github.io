// quick format the date
function dateToYMD(date) {
    var strArray = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    var d = date.getDate();
    var m = strArray[date.getMonth()];
    var y = date.getFullYear();
    return "" + m + " " + (d <= 9 ? "0" + d : d) + ", " + y;
}

// global variable: read the json file
var entries = JSON.parse(
    $.getJSON({ url: "/blog/blog_meta.json", async: false }).responseText
);
var cate_cur = "__all";
var tag_cur = "__all";

function cate_onclick_helper(instance, click_name) {
    if (instance.classList.contains("onclick")) return;
    $(instance)
        .siblings()
        .each(function () {
            this.classList.remove("onclick");
        });
    generate_blogs_helper(click_name, tag_cur);
    cate_cur = click_name;
    instance.classList.toggle("onclick");
}

function tag_onclick_helper(instance, click_name) {
    if (instance.classList.contains("onclick")) return;
    $(instance)
        .siblings()
        .each(function () {
            this.classList.remove("onclick");
        });
    generate_blogs_helper(cate_cur, click_name);
    tag_cur = click_name;
    instance.classList.toggle("onclick");
}

function generate_blogs() {
    // collect the catagories and tags
    var cates = [];
    var tags = [];
    for (var k in entries) {
        cates = cates.concat(entries[k]["categories"]);
        tags = tags.concat(entries[k]["tags"]);
    }
    cates = [...new Set(cates)];
    tags = [...new Set(tags)];
    generate_blogs_helper("__all", "__all");

    // process the category
    // here I use cate_tmp to create all the elements, be careful
    var cate_elmt = document.querySelector("#blog_category");
    var cate_tmp = document.createElement("span");
    cate_tmp.classList = "blog_cate_title";
    cate_tmp.innerHTML = "Categories:";
    cate_elmt.appendChild(cate_tmp);
    cate_tmp = document.createElement("span");
    cate_tmp.classList.add("blog_cate_name");
    cate_tmp.classList.add("onclick");
    cate_tmp.innerHTML = "All";
    cate_tmp.addEventListener("click", function () {
        cate_onclick_helper(this, "__all");
    });
    cate_elmt.appendChild(cate_tmp);
    cates.forEach((cate) => {
        cate_tmp = document.createElement("span");
        cate_tmp.classList.add("blog_cate_name");
        cate_tmp.innerHTML = cate;
        cate_tmp.addEventListener("click", function () {
            cate_onclick_helper(this, this.innerHTML);
        });
        cate_elmt.appendChild(cate_tmp);
    });

    // process the tag
    // here I use tag_tmp to create all the elements, be careful
    var tag_elmt = document.querySelector("#blog_tag");
    var tag_tmp = document.createElement("span");
    tag_tmp.className = "blog_tag_title";
    tag_tmp.innerHTML = "Tags:";
    tag_elmt.appendChild(tag_tmp);
    tag_tmp = document.createElement("span");
    tag_tmp.classList.add("blog_tag_name");
    tag_tmp.classList.add("onclick");
    tag_tmp.innerHTML = "All";
    tag_tmp.addEventListener("click", function () {
        tag_onclick_helper(this, "__all");
    });
    tag_elmt.appendChild(tag_tmp);
    tags.forEach((tag) => {
        tag_tmp = document.createElement("span");
        tag_tmp.classList.add("blog_tag_name");
        tag_tmp.innerHTML = tag;
        tag_tmp.addEventListener("click", function () {
            tag_onclick_helper(this, this.innerHTML);
        });
        tag_elmt.appendChild(tag_tmp);
    });
}

// Combine the html page generated from markdown file with the header and sidebar.
function generate_blogs_helper(cate, tag) {
    // copy the entries
    entries_copy = JSON.parse(JSON.stringify(entries));
    // filter the cate or tag
    if (cate !== "__all") {
        var new_entries = {};
        for (var k in entries_copy) {
            if (entries_copy[k]["categories"].includes(cate)) {
                new_entries[k] = entries_copy[k];
            }
        }
        entries_copy = new_entries;
    }

    if (tag !== "__all") {
        var new_entries = {};
        for (var k in entries_copy) {
            if (entries_copy[k]["tags"].includes(tag)) {
                new_entries[k] = entries_copy[k];
            }
        }
        entries_copy = new_entries;
    }

    // create the blog entries
    let blogs_files_elmt = document.querySelector("#blogs_files");
    if (Object.keys(entries_copy).length == 0) {
        blogs_files_elmt.innerHTML = "";
        return;
    }
    // sort entries by year
    entries_copy = Object.keys(entries_copy)
        .sort((a, b) => {
            if (entries_copy[a]["date"] < entries_copy[b]["date"]) return 1;
            if (entries_copy[a]["date"] > entries_copy[b]["date"]) return -1;
            if (entries_copy[a]["date"] == entries_copy[b]["date"]) return 0;
        })
        .reduce((obj, key) => {
            obj[key] = entries_copy[key];
            return obj;
        }, {});
    var ent2year = (entry) => parseInt(entry["date"].substr(0, 4));
    var year_cur = ent2year(Object.entries(entries_copy)[0][1]);
    blogs_files_elmt.innerHTML = "";
    var p = document.createElement("p");
    var ul = document.createElement("ul");
    var p_year = document.createElement("p");
    p_year.className = "blogs_files_year";
    p_year.innerHTML = year_cur.toString();
    p.appendChild(p_year);
    for (var k in entries_copy) {
        var entry = entries_copy[k];
        var year_tmp = ent2year(entry);
        if (year_tmp != year_cur) {
            p.appendChild(ul);
            ul = document.createElement("ul");
            year_cur = year_tmp;
            var p_year = document.createElement("p");
            p_year.className = "blogs_files_year";
            p_year.innerHTML = year_cur.toString();
            p.appendChild(p_year);
        }
        var li = document.createElement("li");
        var a = document.createElement("a");
        var link = document.createTextNode(entry["title"]);
        a.appendChild(link);
        a.title = k;
        a.href = entry["filepath"];
        var label = document.createElement("label");
        label.className = "blogs_files_date";
        label.innerHTML = dateToYMD(new Date(entry["date"]));
        li.appendChild(a);
        li.addEventListener("click", function () {
            var content = this.nextElementSibling;
            if (content.style.display == "block") {
                content.style.display = "none";
            } else if (content.style.display == "none") {
                content.style.display = "block";
            }
            var label = this.previousSibling;
            label.classList.toggle("label_toggle");
            this.classList.toggle("label_toggle");
        });
        ul.appendChild(label);
        ul.appendChild(li);
        var p_descri = document.createElement("p");
        p_descri.innerHTML = entry["description"];
        p_descri.className = "blogs_files_descri";
        ul.appendChild(p_descri);
        p_descri.style.display = "none";
    }
    p.appendChild(ul);
    blogs_files_elmt.appendChild(p);
}

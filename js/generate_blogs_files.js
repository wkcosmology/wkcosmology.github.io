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
    return "" + m + " " + (d <= 9 ? "0" + d : d);
}

// global variable: read the json file
var entries = JSON.parse(
    $.getJSON({ url: "/blog/blog_meta.json", async: false }).responseText
);

var filter_cur = {
    categories: "__all",
    tags: "__all",
};

// filter on click
function filter_onclick(instance, filter_name) {
    if (instance.classList.contains("onclick")) return;
    $(instance)
        .siblings()
        .each(function () {
            this.classList.remove("onclick");
        });
    Object.entries(filter_name).forEach((ent) => {
        filter_cur[ent[0]] = ent[1];
    });
    generate_blogs_files(filter_cur);
    instance.classList.toggle("onclick");
}

// generate blog tags: means categoties and tags
function generate_blogs() {
    var display_elmts = {
        categories: {
            text: "Categories",
            id: "#blog_category",
            title_class: "blog_cate_title",
            name_class: "blog_cate_name",
        },
        tags: {
            text: "Tags",
            id: "#blog_tag",
            title_class: "blog_tag_title",
            name_class: "blog_tag_name",
        },
    };
    generate_blogs_files({});
    Object.entries(display_elmts).forEach((ent) => {
        var opt = ent[1];
        var name = ent[0];
        var ents = [];
        for (var k in entries) {
            ents = ents.concat(entries[k][name]);
        }
        ents = [...new Set(ents)];

        var ent_elmt = document.querySelector(opt["id"]);
        var icon = document.createElement("img");
        icon.src = "/image/icon/expand.png";
        icon.id = "expand";
        ent_elmt.appendChild(icon);
        var ent_tmp = document.createElement("span");
        icon.addEventListener("click", function () {
            this.classList.toggle("onclick");
            var elmt_tmp = this.nextElementSibling.nextElementSibling;
            if (elmt_tmp.style.display === "none") {
                elmt_tmp.style.display = "block";
                this.setAttribute("style", "transform: rotate(90deg)");
            } else {
                elmt_tmp.style.display = "none";
                this.setAttribute("style", "transform: rotate(0deg)");
            }
        });
        ent_tmp.className = opt["title_class"];
        ent_tmp.innerHTML = opt["text"];
        ent_elmt.appendChild(ent_tmp);
        var span_elmts = document.createElement("span");
        span_elmts.style.display = "none";
        ent_tmp = document.createElement("span");
        ent_tmp.classList.add(opt["name_class"]);
        ent_tmp.classList.add("onclick");
        ent_tmp.innerHTML = "All";
        ent_tmp.addEventListener("click", function () {
            var filter_tmp = {};
            filter_tmp[name] = "__all";
            filter_onclick(this, filter_tmp);
        });
        span_elmts.appendChild(ent_tmp);
        ents.forEach((ent) => {
            ent_tmp = document.createElement("span");
            ent_tmp.classList.add(opt["name_class"]);
            ent_tmp.innerHTML = ent;
            ent_tmp.addEventListener("click", function () {
                var filter_tmp = {};
                filter_tmp[name] = this.innerHTML;
                filter_onclick(this, filter_tmp);
            });
            span_elmts.appendChild(ent_tmp);
            ent_elmt.appendChild(span_elmts);
        });
    });
}

// Combine the html page generated from markdown file with the header and sidebar.
function generate_blogs_files(filter_map) {
    // copy the entries
    entries_copy = JSON.parse(JSON.stringify(entries));
    // filter the cate or tag
    Object.entries(filter_map).forEach((ent) => {
        var filter_k = ent[0];
        var filter_v = ent[1];
        if (filter_v !== "__all") {
            entries_copy = Object.fromEntries(
                Object.entries(entries_copy).filter((tmp) =>
                    tmp[1][ent[0]].includes(filter_v)
                )
            );
        }
    });
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
        li.appendChild(label);
        // expand the short discription
        var icon = document.createElement("img");
        icon.src = "/image/icon/expand2.png";
        icon.id = "expand";
        li.appendChild(icon);
        li.appendChild(a);
        icon.addEventListener("click", function () {
            var content = this.parentElement.nextElementSibling;
            if (content.style.display == "block") {
                content.style.display = "none";
                this.setAttribute("style", "transform: rotate(0deg)");
            } else if (content.style.display == "none") {
                content.style.display = "block";
                this.setAttribute("style", "transform: rotate(90deg)");
            }
            var label = this.previousSibling;
            label.classList.toggle("label_toggle");
            this.parentElement.classList.toggle("label_toggle");
        });
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

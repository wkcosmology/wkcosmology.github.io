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

function create_blogs_files() {
    var entries = JSON.parse(
        $.getJSON({ url: "/blog/blog_toc.json", async: false }).responseText
    );
    // sort entries by year
    entries = Object.keys(entries)
        .sort((a, b) => {
            if (entries[a]["date"] < entries[b]["date"]) return 1;
            if (entries[a]["date"] > entries[b]["date"]) return -1;
            if (entries[a]["date"] == entries[b]["date"]) return 0;
        })
        .reduce((obj, key) => {
            obj[key] = entries[key];
            return obj;
        }, {});
    var ent2year = (entry) => parseInt(entry["date"].substr(0, 4));
    var year_cur = ent2year(Object.entries(entries)[0][1]);
    let side_bar = document.querySelector("#blogs_files");
    var p = document.createElement("p");
    var ul = document.createElement("ul");
    var p_year = document.createElement("p");
    p_year.className = "blogs_files_year";
    p_year.innerHTML = year_cur.toString();
    p.appendChild(p_year);
    for (var k in entries) {
        var entry = entries[k];
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
    side_bar.appendChild(p);
}

// Render the publication list from /about_me/publication.toml
//
// The data file is a small TOML-like format: entries are introduced by
// [[first_author]] / [[coauthor]] / [[opensource]] and followed by
// "key = <json-value>" lines (see the header of publication.toml).

// --- minimal TOML-like parser -------------------------------------------------
function parse_pub_toml(text) {
    var sections = {};
    var current = null;
    var lines = text.split(/\r?\n/);
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line === "" || line.charAt(0) === "#") continue;

        var header = line.match(/^\[\[(.+?)\]\]$/);
        if (header) {
            var name = header[1].trim();
            if (!sections[name]) sections[name] = [];
            current = {};
            sections[name].push(current);
            continue;
        }

        var kv = line.match(/^([A-Za-z0-9_]+)\s*=\s*(.+)$/);
        if (kv && current) {
            try {
                current[kv[1]] = JSON.parse(kv[2]);
            } catch (e) {
                console.error("publication.toml: cannot parse value on line", i + 1, line);
            }
        }
    }
    return sections;
}

// --- inline markup for the author string ------------------------------------
function render_authors(str) {
    var escaped = String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    return escaped
        .replace(/\*\*(.+?)\*\*/g, '<span class="strong">$1</span>')
        .replace(/†/g, "<sup>†</sup>");
}

// --- build one <li> --------------------------------------------------------
function build_pub_item(entry) {
    var li = document.createElement("li");

    var p = document.createElement("p");
    p.className = "publication";
    p.textContent = entry.title || "";
    li.appendChild(p);

    var div = document.createElement("div");
    div.className = "author";

    var authors = document.createElement("span");
    authors.innerHTML = render_authors(entry.authors || "");
    div.appendChild(authors);
    div.appendChild(document.createElement("br"));

    var journal = document.createElement("span");
    journal.className = "journal";
    journal.textContent = entry.journal || "";
    div.appendChild(journal);

    function add_link(text, href) {
        div.appendChild(document.createTextNode(" "));
        var a = document.createElement("a");
        a.href = href;
        a.target = "_blank";
        a.textContent = text;
        div.appendChild(a);
    }

    if (entry.arxiv) {
        add_link(
            "arXiv:" + (entry.arxiv_label || entry.arxiv),
            "https://arxiv.org/abs/" + entry.arxiv
        );
    }
    if (entry.links) {
        entry.links.forEach(function (pair) {
            add_link(pair[0], pair[1]);
        });
    }
    if (entry.blog) {
        add_link("[Go to the blog]", entry.blog);
    }

    li.appendChild(div);
    return li;
}

function render_pub_section(target_id, entries) {
    var ol = document.querySelector(target_id);
    if (!ol || !entries) return;
    entries.forEach(function (entry) {
        ol.appendChild(build_pub_item(entry));
    });
}

function display_publications() {
    fetch("/about_me/publication.toml")
        .then(function (r) {
            return r.text();
        })
        .then(function (text) {
            var data = parse_pub_toml(text);
            render_pub_section("#pub-first-author", data.first_author);
            render_pub_section("#pub-coauthor", data.coauthor);
            render_pub_section("#pub-opensource", data.opensource);
        })
        .catch(function (e) {
            console.error("Failed to load publication.toml", e);
        });
}

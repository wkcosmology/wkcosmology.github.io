// Render the presentation list from /presentation/presentation.toml
//
// The data file is a small TOML-like format: entries are introduced by
// [[talk]] and followed by "key = <json-value>" lines (see the header of
// presentation.toml).

// --- minimal TOML-like parser -------------------------------------------------
function parse_presentation_toml(text) {
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
                console.error("presentation.toml: cannot parse value on line", i + 1, line);
            }
        }
    }
    return sections;
}

// --- build one <li> --------------------------------------------------------
function build_talk_item(entry) {
    var li = document.createElement("li");
    li.className = "pre_ul";

    var p0 = document.createElement("p");
    p0.className = "pre_place";
    p0.appendChild(document.createTextNode(entry.title || ""));
    li.appendChild(p0);

    var p1 = document.createElement("p");
    p1.className = "pre_title";
    p1.appendChild(document.createTextNode(entry.description || ""));
    li.appendChild(p1);

    var p2 = document.createElement("p");
    p2.className = "pre_coord";
    p2.appendChild(
        document.createTextNode((entry.date || "") + " @ " + (entry.place || ""))
    );

    if (entry.slide) {
        var a_slide = document.createElement("a");
        a_slide.appendChild(document.createTextNode(" [slide]"));
        a_slide.href = entry.slide;
        a_slide.target = "_blank";
        p2.appendChild(a_slide);
    }
    if (entry.video) {
        var a_video = document.createElement("a");
        a_video.appendChild(document.createTextNode(" [video]"));
        a_video.href = entry.video;
        a_video.target = "_blank";
        p2.appendChild(a_video);
    }

    li.appendChild(p2);
    return li;
}

function display_presentations() {
    var target = document.querySelector("#softwares");
    fetch("/presentation/presentation.toml")
        .then(function (r) {
            return r.text();
        })
        .then(function (text) {
            var data = parse_presentation_toml(text);
            if (!target || !data.talk) return;
            var ul = document.createElement("ul");
            data.talk.forEach(function (entry) {
                ul.appendChild(build_talk_item(entry));
            });
            target.appendChild(ul);
        })
        .catch(function (e) {
            console.error("Failed to load presentation.toml", e);
        });
}

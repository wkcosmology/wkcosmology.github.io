var entries = JSON.parse(
    $.getJSON({ url: "/about_me/tool.json", async: false }).responseText
);
function get_data(elmt_id, name, title_class, place_class, coord_class, li_class) {
    var softwares_elmt = document.querySelector(elmt_id);
    var ul = document.createElement("ul");
    var entries_tmp = entries[name];
    Object.entries(entries_tmp).forEach((ent) => {
        var li = document.createElement("li");
        var p0 = document.createElement("p");
        p0.classList.add(place_class);
        p0.appendChild(document.createTextNode(ent[0]));
        var p1 = document.createElement("p");
        p1.classList.add(title_class);
        p1.appendChild(document.createTextNode(ent[1]["description"]));
        var p2 = document.createElement("p");
        p2.classList.add(coord_class);
        p2.appendChild(
            document.createTextNode(ent[1]["date"] + " @ " + ent[1]["place"])
        );
        if (ent[1]["slide"]) {
            var a_slide = document.createElement("a");
            a_slide.appendChild(document.createTextNode(" [slide]"));
            a_slide.href = ent[1]["slide"];
            a_slide.target = "_blank";
            p2.appendChild(a_slide);
        }
        if (ent[1]["video"]) {
            var a_video = document.createElement("a");
            a_video.appendChild(document.createTextNode(" [video]"));
            a_video.href = ent[1]["video"];
            a_video.target = "_blank";
            p2.appendChild(a_video);
        }
        li.appendChild(p0);
        li.appendChild(p1);
        li.appendChild(p2);
        li.classList.add(li_class);
        ul.appendChild(li);
    });
    softwares_elmt.appendChild(ul);
}

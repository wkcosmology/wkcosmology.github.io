var entries = JSON.parse(
    $.getJSON({ url: "/about_me/tool.json", async: false }).responseText
);
function get_data(elmt_id, name, annot_class) {
    var softwares_elmt = document.querySelector(elmt_id);
    var ul = document.createElement("ul");
    var entries_tmp = entries[name];
    Object.entries(entries_tmp).forEach((ent) => {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode(ent[0]));
        a.href = ent[1]["url"];
        a.target = "_blank";
        var p = document.createElement("p");
        p.classList.add(annot_class);
        p.appendChild(document.createTextNode(ent[1]["description"]));
        li.appendChild(a);
        li.appendChild(p);
        ul.appendChild(li);
    });
    softwares_elmt.appendChild(ul);
}

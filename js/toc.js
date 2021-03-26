function display_toc() {
    let toc = document.querySelector("#toc");
    let nodes = {
        "Kosmos": ["/index.html", 0],
        "About Me": ["/about_me/introduction.html", 0],
        "Research": ["/about_me/research.html", 0],
        "Publication": ["/about_me/publication.html", 0],
    };

    for (var key in nodes) {
        var a = document.createElement("a");
        var class_name = "toc_node";
        var indent = nodes[key][1];
        a.setAttribute("class", class_name.concat(indent.toString()));
        var linkText = document.createTextNode(key);
        a.appendChild(linkText);
        a.title = key;
        a.href = nodes[key][0];
        toc.append(a);
        // add line break
        var br = document.createElement("br")
        toc.append(br);
    }
}
display_toc();

var fs = require("fs");
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
var showdown = require("showdown");
var fm = require("front-matter");
var dateFormat = require("dateformat");
var toc = require('markdown-toc');

showdown.setFlavor("github");

// utility function
const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
};

// variable
var homepage = "/Users/wangk/Documents/Project/wkcosmology.github.io";
var converter = new showdown.Converter({
    simpleLineBreaks: false,
});
var files = fs.readdirSync(homepage + "/blog/md/");
var blog_json = {};
var show_annot = ["date", "description"];

// loop blog files
for (var i in files) {
    var doc = new JSDOM(
        fs.readFileSync(homepage + "/blog/blog_header.html", "utf-8")
    ).window.document;
    var data = fm(fs.readFileSync(homepage + "/blog/md/" + files[i], "utf-8"));
    // process the front matter
    var attr = data.attributes;
    blog_json[files[i]] = {};
    file_tmp = blog_json[files[i]];
    for (var k in data.attributes) {
        file_tmp[k] = data.attributes[k];
    }
    file_tmp["filepath"] = "/blog/html/" + files[i].split(".")[0] + ".html";
    // process the title
    var front = doc.querySelector(".blog_front");
    var p_title = doc.createElement("p");
    p_title.className = "blog_title";
    p_title.innerHTML = attr["title"];
    var ul_annot = doc.createElement("ul");
    ul_annot.className = "blog_annot";
    show_annot.forEach((k) => {
        if (!attr[k]) return;
        var li = doc.createElement("li");
        if (k == "date") {
            li.textContent =
                capitalize(k) + ": " + dateFormat(attr[k], "mmm. dd, yyyy");
        } else {
            li.textContent = capitalize(k) + ": " + attr[k];
        }
        ul_annot.appendChild(li);
    });
    // append elements to front
    front.appendChild(p_title);
    front.appendChild(ul_annot);
    // process the toc
    var md = data.body;
    file_tmp["toc"] = toc(md).json;
    // process the markdown part
    var content = doc.querySelector("#blog_content");
    content.innerHTML = converter.makeHtml(md);
    fs.writeFileSync(
        homepage + "/blog/html/" + files[i].split(".")[0] + ".html",
        doc.documentElement.innerHTML
    );
}
// write to json file
fs.writeFileSync(homepage + "/blog/blog_toc.json", JSON.stringify(blog_json));

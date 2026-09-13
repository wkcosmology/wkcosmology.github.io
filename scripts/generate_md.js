// var fs = require("fs");
import fs from "fs"
// var jsdom = require("jsdom");
import jsdom from "jsdom"
const { JSDOM } = jsdom;
// var showdown = require("showdown");
import showdown from "showdown"
// var fm = require("front-matter");
import fm from "front-matter"
// var dateFormat = require("dateformat");
import dateFormat from "dateformat"
// var toc = require("markdown-toc");
import toc from "markdown-toc"

showdown.setFlavor("github");

// utility function
const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
};

// variable
var homepage = "/Users/wangk/Project/homepage";
var converter = new showdown.Converter({
    simpleLineBreaks: false,
    openLinksInNewWindow: true,
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
    var file_tmp = blog_json[files[i]];
    for (var k in data.attributes) {
        file_tmp[k] = data.attributes[k];
    }
    file_tmp["filepath"] = "/blog/html/" + files[i].split(".")[0] + ".html";
    // process the title
    var front = doc.querySelector(".blog_front");
    var p_title = doc.createElement("p");
    p_title.className = "blog_title";
    p_title.innerHTML = attr["title"];
    // add date
    var p_date = doc.createElement("p");
    p_date.classList.add("date");
    p_date.textContent = dateFormat(attr["date"], "mmm. dd, yyyy");
    var p_descri = doc.createElement("p");
    p_descri.classList.add("descri");
    p_descri.textContent = attr["description"];
    front.appendChild(p_title);
    front.appendChild(p_date);
    front.appendChild(p_descri);
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
fs.writeFileSync(homepage + "/blog/blog_meta.json", JSON.stringify(blog_json));

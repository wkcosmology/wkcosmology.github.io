var blog = document.querySelector("#blog1");
var text = "# hello, markdown!";
blog.innerHTML += text;
var converter = new showdown.Converter();
blog.innerHTML += converter.makeHtml(text);

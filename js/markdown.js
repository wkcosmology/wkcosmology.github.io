function display_md() {
    let toc = document.querySelector("#md");
    var converter = new showdown.Converter();

    fetch("/blog/test.md")
        .then((response) => response.text())
        .then((response) => {
            toc.innerHTML += converter.makeHtml(response);
        });
}

function display_toc() {
    let toc = document.querySelector("#toc");
    fetch("/toc.html")
        .then((response) => response.text())
        .then((response) => {
            toc.innerHTML += response;
        });
}

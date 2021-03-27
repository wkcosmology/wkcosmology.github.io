function display_toc() {
    let toc = document.querySelector("#toc");
    fetch("/toc.html")
        .then((response) => response.text())
        .then((response) => {
            toc.innerHTML += response;
            let file = location.href.split("/").pop().split(".")[0];
            let select = toc.querySelector("#" + file);
            select.className = "select";
        });
}

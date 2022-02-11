if (localStorage.getItem("url") && localStorage.getItem("url").length > 0) {
    if (localStorage.getItem("change") && localStorage.getItem("change").length > 0 && localStorage.getItem("change") == "true") {
        window.location.href = localStorage.getItem("url");
    } else {
        document.getElementById("iframe").setAttribute("src", localStorage.getItem("url"));
    }
}

if (localStorage.getItem("title") && localStorage.getItem("title").length > 0) {
    document.title = localStorage.getItem("title");
} else {
    document.title = 'blank';
}

if (localStorage.getItem("css") && localStorage.getItem("css").length > 0) {
    var styleSheet = document.createElement("style");
    styleSheet.innerText = localStorage.getItem("css");
    document.head.appendChild(styleSheet);
}
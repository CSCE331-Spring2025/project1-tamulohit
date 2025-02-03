function toggleStyle(){
    let theme = document.getElementById("style");

    // let currTheme = theme.getAttribute("href");
    let newTheme = "style1.css"; // default to style1
    if (theme.getAttribute("href") === "style1.css"){  newTheme = "style2.css"; } 
    else{ newTheme = "style1.css"; }

    theme.setAttribute("href", newTheme);
    localStorage.setItem("currTheme", newTheme);
}

window.onload = function(){
    let savedTheme = localStorage.getItem("currTheme") || "style1.css";
    document.getElementById("style").setAttribute("href", savedTheme);
}
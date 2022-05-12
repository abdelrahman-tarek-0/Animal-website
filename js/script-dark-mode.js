let checkBox = document.getElementById("checkbox");

if(localStorage.getItem("darkMode") == "true"){
    checkBox.checked = true;
    document.body.classList.add("dark-theme");
}else{
    checkBox.checked = false;
    document.body.classList.remove("dark-theme");
}

checkBox.addEventListener("change", function() {
    if (checkBox.checked) {
        document.body.classList.add("dark-theme");
        localStorage.setItem("darkMode",'true');
    } else {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("darkMode",'flase');
    }
}
);
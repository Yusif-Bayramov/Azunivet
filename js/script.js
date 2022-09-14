const lg = document.querySelectorAll(".lg button")
lg.forEach(element => {
    element.addEventListener("click", function() {
        lg.forEach(lgs => lgs.classList.remove(("active")))
        this.classList.add("active")
    });
});
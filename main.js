document.addEventListener("DOMContentLoaded", function () {
    // const button = document.querySelector("#openMainMenu");
    // const buttonClose = document.querySelector("#closeMainMenu");

    // button.addEventListener("click", function (e) {
    //     e.preventDefault();

    //     button.closest(".header-nav").classList.toggle("open");
    // })

    // buttonClose.addEventListener("click", function (e) {
    //     e.preventDefault();

    //     buttonClose.closest(".header-nav").classList.toggle("open");
    // })

    const toggleButtons = document.querySelectorAll(".toggleMianMenu");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
    
            button.closest(".header-nav").classList.toggle("open");
        })
    })
})
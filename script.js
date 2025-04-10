document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-button");
    const sections = document.querySelectorAll(".tab-section");

    let activeSection = null;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");
            const section = document.getElementById(target);

            if (activeSection === section) {
                section.classList.remove("visible");
                activeSection = null;
            } else {
                sections.forEach(sec => sec.classList.remove("visible"));
                section.classList.add("visible");
                activeSection = section;
            }
        });
    });
});
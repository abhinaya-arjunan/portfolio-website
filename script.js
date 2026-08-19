/*=============== ACTIVE NAVIGATION ON SCROLL ===============*/

const navLinks = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {

    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {
                link.classList.remove("active-link");
            });

            const activeLink = document.querySelector(
                `.nav__link[href="#${sectionId}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active-link");
            }

        }

    });

}

window.addEventListener("scroll", updateActiveLink);


/*=============== CURRENT YEAR ===============*/

const footer = document.querySelector(".footer p");

if (footer) {

    const currentYear = new Date().getFullYear();

    footer.textContent =
        `© ${currentYear} Abhinaya Arjunan | All Rights Reserved`;

}


/*=============== INITIAL ACTIVE LINK ===============*/

updateActiveLink();
/* =========================
   COVER → EXPLORE
========================= */

const enterBtn = document.getElementById("enterBtn");
const cover = document.getElementById("cover");
const categories = document.getElementById("categories");

enterBtn.addEventListener("click", () => {
    cover.classList.remove("active");
    categories.classList.add("active");
});


/* =========================
   CATEGORY HOVER SOUND
========================= */

const categoryButtons = document.querySelectorAll(".category");

const hoverSound = new Audio("sounds/select.mp3");
hoverSound.volume = 0.35;

categoryButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(() => {});
    });

});


/* =========================
   THEME
========================= */

const themeToggle = document.getElementById("themeToggle");
const themeTransition = document.getElementById("themeTransition");

const themeSound = new Audio("sounds/select3.wav");
themeSound.volume = 0.35;

themeToggle.addEventListener("click", () => {

    themeSound.currentTime = 0;
    themeSound.play().catch(() => {});

    const rect = themeToggle.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    themeTransition.style.left = `${x - 10}px`;
    themeTransition.style.top = `${y - 10}px`;

    themeTransition.classList.remove("animate");

    void themeTransition.offsetWidth;

    themeTransition.classList.add("animate");


    setTimeout(() => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeToggle.textContent = "☾";
            themeTransition.style.background = "#080808";

        } else {

            themeToggle.textContent = "☼";
            themeTransition.style.background = "#f4f4f1";

        }

    }, 350);


    setTimeout(() => {
        themeTransition.classList.remove("animate");
    }, 800);

});


/* =========================
   ART GALLERY
========================= */

const artBtn = document.querySelector(".category.art");
const artGallery = document.getElementById("artGallery");
const backToExplore = document.getElementById("backToExplore");

artBtn.addEventListener("click", () => {

    categories.classList.remove("active");
    artGallery.classList.add("active");

    artGallery.classList.remove("art-reveal");

    void artGallery.offsetWidth;

    artGallery.classList.add("art-reveal");

});


backToExplore.addEventListener("click", () => {

    artGallery.classList.remove("active");
    artGallery.classList.remove("art-reveal");

    categories.classList.add("active");

});


/* =========================
   FASHION GALLERY
========================= */

const fashionBtn = document.querySelector(".category.fashion");
const fashionGallery = document.getElementById("fashionGallery");
const backFromFashion = document.getElementById("backFromFashion");

fashionBtn.addEventListener("click", () => {

    categories.classList.remove("active");
    fashionGallery.classList.add("active");

    fashionGallery.classList.remove("fashion-reveal");

    void fashionGallery.offsetWidth;

    fashionGallery.classList.add("fashion-reveal");

});


backFromFashion.addEventListener("click", () => {

    fashionGallery.classList.remove("active");
    fashionGallery.classList.remove("fashion-reveal");

    categories.classList.add("active");

});


/* =========================
   GAMING GALLERY
========================= */

const gamingBtn = document.querySelector(".category.gaming");
const gamingGallery = document.getElementById("gamingGallery");
const backFromGaming = document.getElementById("backFromGaming");

gamingBtn.addEventListener("click", () => {

    categories.classList.remove("active");
    gamingGallery.classList.add("active");

    gamingGallery.classList.remove("gaming-reveal");

    void gamingGallery.offsetWidth;

    gamingGallery.classList.add("gaming-reveal");

});


backFromGaming.addEventListener("click", () => {

    gamingGallery.classList.remove("active");
    gamingGallery.classList.remove("gaming-reveal");

    categories.classList.add("active");

});


/* =========================
   SEARCH
========================= */

const searchOpen = document.getElementById("searchOpen");
const searchOverlay = document.getElementById("searchOverlay");
const searchClose = document.getElementById("searchClose");
const searchInput = document.getElementById("searchInput");

const searchSound = new Audio("sounds/select4.wav");
searchSound.volume = 0.35;


/* Open search */

searchOpen.addEventListener("click", () => {

    searchOverlay.classList.add("active");

    setTimeout(() => {

        searchSound.currentTime = 0;
        searchSound.play().catch(() => {});

    }, );

    setTimeout(() => {
        searchInput.focus();
    }, 650);

});


/* Close search */

searchClose.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
});


/* Escape */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        searchOverlay.classList.remove("active");
    }

});


/* Sidebar search */

const sideSearch = document.getElementById("sideSearch");

sideSearch.addEventListener("click", () => {

    searchOverlay.classList.add("active");

    setTimeout(() => {

        searchSound.currentTime = 0;
        searchSound.play().catch(() => {});

    }, );

    setTimeout(() => {
        searchInput.focus();
    }, 650);

});


/* =========================
   SEARCH DATABASE
========================= */

const searchResults = document.getElementById("searchResults");
const suggestionButtons = document.querySelectorAll(".search-suggestions button");

const pins = [];


/* ART */

const artImages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 39, 40, 41
];

artImages.forEach(i => {

    pins.push({
        image: `images/art/a${i}.jpg`,
        title: `Art ${i}`,
        tags: ["art"]
    });

});


/* FASHION */

for (let i = 1; i <= 21; i++) {
    pins.push({
        image: `images/fashion/b${i}.jpg`,
        title: `Fashion ${i}`,
        tags: ["fashion"]
    });
}


/* GAMING */

for (let i = 1; i <= 27; i++) {

    pins.push({
        image: `images/gaming/c${i}.jpg`,
        title: `Gaming ${i}`,
        tags: ["gaming"]
    });

}


/* =========================
   SHOW SEARCH RESULTS
========================= */

function showResults(query) {

    searchResults.innerHTML = "";

    query = query.toLowerCase().trim();

    if (!query) {
        return;
    }


    const results = pins.filter(pin =>

        pin.title.toLowerCase().includes(query) ||

        pin.tags.some(tag =>
            tag.toLowerCase().includes(query)
        )

    );


    if (results.length === 0) {

        searchResults.innerHTML =
            `<p class="no-results">
                Nothing found for "${query}"
            </p>`;

        return;
    }


    results.forEach(pin => {

        const result = document.createElement("div");

        result.className = "search-result";

        result.style.backgroundImage =
            `url("${pin.image}")`;

        result.innerHTML =
            `<span>${pin.title}</span>`;

        searchResults.appendChild(result);

    });

}


/* =========================
   SEARCH INPUT
========================= */

searchInput.addEventListener("input", () => {

    showResults(searchInput.value);

});


/* =========================
   SEARCH SUGGESTIONS
========================= */

suggestionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const searchTerm = button.dataset.search;

        searchInput.value = searchTerm;

        showResults(searchTerm);

        searchInput.focus();

    });

});
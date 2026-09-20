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

/* OUR TOOL SEARCH DATABASE START */

pins.push({
    image: "Images/art/a1.jpg",
    title: "Art 1",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a2.jpg",
    title: "Art 2",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a3.jpg",
    title: "Art 3",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a4.jpg",
    title: "Art 4",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a5.jpg",
    title: "Art 5",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a6.jpg",
    title: "Art 6",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a7.jpg",
    title: "Art 7",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a8.jpg",
    title: "Art 8",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a9.jpg",
    title: "Art 9",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a10.jpg",
    title: "Art 10",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a11.jpg",
    title: "Art 11",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a12.jpg",
    title: "Art 12",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a13.jpg",
    title: "Art 13",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a14.jpg",
    title: "Art 14",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a15.jpg",
    title: "Art 15",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a16.jpg",
    title: "Art 16",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a17.jpg",
    title: "Art 17",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a18.jpg",
    title: "Art 18",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a19.jpg",
    title: "Art 19",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a20.jpg",
    title: "Art 20",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a21.jpg",
    title: "Art 21",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a22.jpg",
    title: "Art 22",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a23.jpg",
    title: "Art 23",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a24.jpg",
    title: "Art 24",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a25.jpg",
    title: "Art 25",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a26.jpg",
    title: "Art 26",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a27.jpg",
    title: "Art 27",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a28.jpg",
    title: "Art 28",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a29.jpg",
    title: "Art 29",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a30.jpg",
    title: "Art 30",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a31.jpg",
    title: "Art 31",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a32.jpg",
    title: "Art 32",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a33.jpg",
    title: "Art 33",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a34.jpg",
    title: "Art 34",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a35.jpg",
    title: "Art 35",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a36.jpg",
    title: "Art 36",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a37.jpg",
    title: "Art 37",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a38.jpg",
    title: "Art 38",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a39.jpg",
    title: "Art 39",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a40.jpg",
    title: "Art 40",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a41.jpg",
    title: "Art 41",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a42.jpg",
    title: "Art 42",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a43.jpg",
    title: "Art 43",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a44.jpg",
    title: "Art 44",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a45.jpg",
    title: "Art 45",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/art/a46.jpg",
    title: "Art 46",
    tags: ["art", "collection"]
});

pins.push({
    image: "Images/fashion/b1.jpg",
    title: "Fashion 1",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b2.jpg",
    title: "Fashion 2",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b3.jpg",
    title: "Fashion 3",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b4.jpg",
    title: "Fashion 4",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b5.jpg",
    title: "Fashion 5",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b6.jpg",
    title: "Fashion 6",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b7.jpg",
    title: "Fashion 7",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b8.jpg",
    title: "Fashion 8",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b9.jpg",
    title: "Fashion 9",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b10.jpg",
    title: "Fashion 10",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b11.jpg",
    title: "Fashion 11",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b12.jpg",
    title: "Fashion 12",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b13.jpg",
    title: "Fashion 13",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b14.jpg",
    title: "Fashion 14",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b15.jpg",
    title: "Fashion 15",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b16.jpg",
    title: "Fashion 16",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b17.jpg",
    title: "Fashion 17",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b18.jpg",
    title: "Fashion 18",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b19.jpg",
    title: "Fashion 19",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b20.jpg",
    title: "Fashion 20",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/fashion/b21.jpg",
    title: "Fashion 21",
    tags: ["fashion", "collection"]
});

pins.push({
    image: "Images/gaming/c1.jpg",
    title: "Gaming 1",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c2.jpg",
    title: "Gaming 2",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c3.jpg",
    title: "Gaming 3",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c4.jpg",
    title: "Gaming 4",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c5.jpg",
    title: "Gaming 5",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c6.jpg",
    title: "Gaming 6",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c7.jpg",
    title: "Gaming 7",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c8.jpg",
    title: "Gaming 8",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c9.jpg",
    title: "Gaming 9",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c10.jpg",
    title: "Gaming 10",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c11.jpg",
    title: "Gaming 11",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c12.jpg",
    title: "Gaming 12",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c13.jpg",
    title: "Gaming 13",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c14.jpg",
    title: "Gaming 14",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c15.jpg",
    title: "Gaming 15",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c16.jpg",
    title: "Gaming 16",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c17.jpg",
    title: "Gaming 17",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c18.jpg",
    title: "Gaming 18",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c19.jpg",
    title: "Gaming 19",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c20.jpg",
    title: "Gaming 20",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c21.jpg",
    title: "Gaming 21",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c22.jpg",
    title: "Gaming 22",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c23.jpg",
    title: "Gaming 23",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c24.jpg",
    title: "Gaming 24",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c25.jpg",
    title: "Gaming 25",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c26.jpg",
    title: "Gaming 26",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/gaming/c27.jpg",
    title: "Gaming 27",
    tags: ["gaming", "collection"]
});

pins.push({
    image: "Images/tech/e1.jpg",
    title: "Tech 1",
    tags: ["tech", "collection"]
});

pins.push({
    image: "Images/tech/e2.jpg",
    title: "Tech 2",
    tags: ["tech", "collection"]
});

pins.push({
    image: "Images/tech/e3.jpg",
    title: "Tech 3",
    tags: ["tech", "collection"]
});

pins.push({
    image: "Images/tech/e4.jpg",
    title: "Tech 4",
    tags: ["tech", "collection"]
});

pins.push({
    image: "Images/tech/e5.jpg",
    title: "Tech 5",
    tags: ["tech", "collection"]
});

pins.push({
    image: "Images/tech/e6.jpg",
    title: "Tech 6",
    tags: ["tech", "collection"]
});

pins.push({
    image: "Images/tech/e7.jpg",
    title: "Tech 7",
    tags: ["tech", "collection"]
});

pins.push({
    image: "Images/tech/e8.jpg",
    title: "Tech 8",
    tags: ["tech", "collection"]
});

pins.push({
    image: "Images/tech/e9.jpg",
    title: "Tech 9",
    tags: ["tech", "collection"]
});

pins.push({
    image: "Images/tech/e10.jpg",
    title: "Tech 10",
    tags: ["tech", "collection"]
});

/* OUR TOOL SEARCH DATABASE END */


    pins.push({
        image: `Images/aesthetic/d1.jpg`,
        title: `Aesthetic 1`,
        tags: ["aesthetic"]
    });

    pins.push({
        image: `Images/aesthetic/d2.jpg`,
        title: `Aesthetic 2`,
        tags: ["aesthetic"]
    });

    pins.push({
        image: `Images/aesthetic/d3.jpg`,
        title: `Aesthetic 3`,
        tags: ["aesthetic"]
    });

    pins.push({
        image: `Images/aesthetic/d4.jpg`,
        title: `Aesthetic 4`,
        tags: ["aesthetic"]
    });


/* ART */

const artImages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 39, 40, 41
];

artImages.forEach(i => {

    pins.push({
        image: `Images/art/a${i}.jpg`,
        title: `Art ${i}`,
        tags: ["art"]
    });

});

    pins.push({
        image: `Images/art/a42.jpg`,
        title: `Art 42`,
        tags: ["art"]
    });

    pins.push({
        image: `Images/art/a43.jpg`,
        title: `Art 43`,
        tags: ["art"]
    });

    pins.push({
        image: `Images/art/a44.jpg`,
        title: `Art 44`,
        tags: ["art"]
    });


/* FASHION */

for (let i = 1; i <= 21; i++) {
    pins.push({
        image: `Images/fashion/b${i}.jpg`,
        title: `Fashion ${i}`,
        tags: ["fashion"]
    });
}


/* GAMING */

for (let i = 1; i <= 27; i++) {

    pins.push({
        image: `Images/gaming/c${i}.jpg`,
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

/* =========================================================
   OURPIN IMAGE VIEWER
========================================================= */

const imageViewer = document.getElementById("imageViewer");

const viewerImage = document.getElementById("viewerImage");
const viewerClose = document.getElementById("viewerClose");

const viewerPrev = document.getElementById("viewerPrev");
const viewerNext = document.getElementById("viewerNext");

const viewerPrevBottom = document.getElementById("viewerPrevBottom");
const viewerNextBottom = document.getElementById("viewerNextBottom");

const viewerCategory = document.getElementById("viewerCategory");
const viewerTitle = document.getElementById("viewerTitle");
const viewerDescription = document.getElementById("viewerDescription");
const viewerTags = document.getElementById("viewerTags");

const viewerCounter = document.getElementById("viewerCounter");

const viewerSave = document.getElementById("viewerSave");
const viewerShare = document.getElementById("viewerShare");


/* =========================================================
   CATEGORY INFORMATION
========================================================= */

const viewerCategoryData = {
    art: {
        title: "Art",
        description:
            "A curated collection of artwork, characters and creative designs.",
        tags: ["art", "creative", "collection"]
    },

    fashion: {
        title: "Fashion",
        description:
            "A curated collection of fashion, outfits and creative styles.",
        tags: ["fashion", "style", "collection"]
    },

    gaming: {
        title: "Gaming",
        description:
            "A curated collection of games, setups and gaming inspiration.",
        tags: ["gaming", "setup", "collection"]
    },

    aesthetic: {
        title: "Aesthetic",
        description:
            "A curated collection of visual moods, spaces and aesthetic inspiration.",
        tags: ["aesthetic", "mood", "visual"]
    },

    tech: {
        title: "Tech",
        description:
            "A curated collection of technology, devices and futuristic inspiration.",
        tags: ["tech", "digital", "future"]
    },

    photography: {
        title: "Photography",
        description:
            "A curated collection of photographs, scenes and visual moments.",
        tags: ["photography", "visual", "moments"]
    }
};


/* =========================================================
   GET CATEGORY FROM IMAGE PATH
========================================================= */

function getViewerCategory(src) {

    const path = src.toLowerCase();

    if (path.includes("/art/")) return "art";
    if (path.includes("/fashion/")) return "fashion";
    if (path.includes("/gaming/")) return "gaming";
    if (path.includes("/aesthetic/")) return "aesthetic";
    if (path.includes("/tech/")) return "tech";
    if (path.includes("/photography/")) return "photography";

    return "art";
}


/* =========================================================
   COLLECT ALL PINS
========================================================= */

function getViewerPins() {

    return [...document.querySelectorAll(
        "#artGallery .pin, " +
        "#fashionGallery .pin, " +
        "#gamingGallery .pin, " +
        "#aestheticGallery .pin, " +
        "#techGallery .pin, " +
        "#photographyGallery .pin"
    )];
}


/* =========================================================
   CURRENT INDEX
========================================================= */

let viewerPins = [];
let viewerIndex = 0;


/* =========================================================
   UPDATE VIEWER
========================================================= */

function updateViewer(index) {

    viewerPins = getViewerPins();

    if (!viewerPins.length) return;

    if (index < 0) {
        index = viewerPins.length - 1;
    }

    if (index >= viewerPins.length) {
        index = 0;
    }

    viewerIndex = index;

    const pin = viewerPins[viewerIndex];

    const img = pin.querySelector("img");

    if (!img) return;


    /* image */

    viewerImage.classList.remove("visible");

    setTimeout(() => {

        viewerImage.src = img.src;
        viewerImage.alt = img.alt || "";

        viewerImage.onload = () => {
            viewerImage.classList.add("visible");
        };

        viewerImage.onerror = () => {
            viewerImage.classList.add("visible");
        };

    }, 80);


    /* category */

    const categoryKey = getViewerCategory(img.src);

    const categoryInfo =
        viewerCategoryData[categoryKey] ||
        viewerCategoryData.art;

    viewerCategory.textContent =
        categoryInfo.title.toUpperCase();


    /* title */

    const filename =
        img.src.split("/").pop().split("?")[0];

    const fileNumber =
        filename.match(/\d+/);

    const number =
        fileNumber ? fileNumber[0] : (viewerIndex + 1);

    viewerTitle.textContent =
        `${categoryInfo.title} ${number}`;


    /* description */

    viewerDescription.textContent =
        categoryInfo.description;


    /* tags */

    viewerTags.innerHTML = "";

    categoryInfo.tags.forEach(tag => {

        const tagElement =
            document.createElement("span");

        tagElement.textContent = tag;

        viewerTags.appendChild(tagElement);

    });


    /* counter */

    viewerCounter.textContent =
        `${viewerIndex + 1} / ${viewerPins.length}`;


    /* reset save */

    viewerSave.classList.remove("saved");

    viewerSave.innerHTML =
        "<span>♡</span> Save";
}


/* =========================================================
   OPEN VIEWER
========================================================= */

function openViewer(pin) {

    viewerPins = getViewerPins();

    const index =
        viewerPins.indexOf(pin);

    if (index === -1) return;

    updateViewer(index);

    imageViewer.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   CLOSE VIEWER
========================================================= */

function closeViewer() {

    imageViewer.classList.remove("active");

    document.body.style.overflow = "";

    viewerImage.classList.remove("visible");
}


/* =========================================================
   CLICK ANY PIN
========================================================= */

document.addEventListener("click", (event) => {

    const pin =
        event.target.closest(".pin");

    if (!pin) return;

    const img =
        pin.querySelector("img");

    if (!img) return;

    openViewer(pin);
});


/* =========================================================
   PREVIOUS
========================================================= */

function previousViewerImage() {

    updateViewer(viewerIndex - 1);
}


/* =========================================================
   NEXT
========================================================= */

function nextViewerImage() {

    updateViewer(viewerIndex + 1);
}


/* =========================================================
   BUTTONS
========================================================= */

viewerPrev.addEventListener(
    "click",
    previousViewerImage
);

viewerPrevBottom.addEventListener(
    "click",
    previousViewerImage
);

viewerNext.addEventListener(
    "click",
    nextViewerImage
);

viewerNextBottom.addEventListener(
    "click",
    nextViewerImage
);


/* =========================================================
   CLOSE BUTTON
========================================================= */

viewerClose.addEventListener(
    "click",
    closeViewer
);


/* =========================================================
   CLICK OUTSIDE
========================================================= */

imageViewer.addEventListener(
    "click",
    (event) => {

        if (event.target === imageViewer) {
            closeViewer();
        }

    }
);


/* =========================================================
   ESC / KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (!imageViewer.classList.contains("active")) {
            return;
        }

        if (event.key === "Escape") {
            closeViewer();
        }

        if (event.key === "ArrowLeft") {
            previousViewerImage();
        }

        if (event.key === "ArrowRight") {
            nextViewerImage();
        }

    }
);


/* =========================================================
   SAVE
========================================================= */

viewerSave.addEventListener(
    "click",
    () => {

        viewerSave.classList.toggle("saved");

        if (viewerSave.classList.contains("saved")) {

            viewerSave.innerHTML =
                "<span>♥</span> Saved";

        } else {

            viewerSave.innerHTML =
                "<span>♡</span> Save";

        }

    }
);


/* =========================================================
   SHARE
========================================================= */

viewerShare.addEventListener(
    "click",
    async () => {

        const url =
            viewerImage.src;

        try {

            if (navigator.share) {

                await navigator.share({
                    title: viewerTitle.textContent,
                    url: url
                });

            } else {

                await navigator.clipboard.writeText(url);

                const oldText =
                    viewerShare.innerHTML;

                viewerShare.innerHTML =
                    "<span>✓</span> Copied";

                setTimeout(() => {

                    viewerShare.innerHTML =
                        oldText;

                }, 1600);

            }

        } catch (error) {

            console.log(
                "Share cancelled or unavailable."
            );

        }

    }
);

/* =========================================================
   OPEN IMAGE VIEWER FROM SEARCH RESULTS
========================================================= */

function getBackgroundImageUrl(element) {
    const bg = getComputedStyle(element).backgroundImage;

    if (!bg || bg === "none") {
        return null;
    }

    const match = bg.match(/url\(["']?(.*?)["']?\)/);

    return match ? match[1] : null;
}


function normalizeImagePath(path) {

    if (!path) return "";

    return decodeURIComponent(path)
        .replace(/\\/g, "/")
        .split("?")[0]
        .toLowerCase()
        .replace(window.location.origin.toLowerCase(), "")
        .replace(/^\//, "");
}


searchResults.addEventListener("click", (event) => {

    const result = event.target.closest(".search-result");

    if (!result) return;


    const backgroundUrl =
        getBackgroundImageUrl(result);

    if (!backgroundUrl) {
        console.warn("Search result has no image.");
        return;
    }


    const wantedPath =
        normalizeImagePath(backgroundUrl);


    /* -----------------------------------------
       Find the same image in the actual gallery
    ----------------------------------------- */

    const pins = getViewerPins();

    const matchingPin = pins.find(pin => {

        const img = pin.querySelector("img");

        if (!img) return false;

        return normalizeImagePath(img.getAttribute("src")) === wantedPath
            || normalizeImagePath(img.src) === wantedPath;

    });


    /* -----------------------------------------
       If image exists in a gallery,
       use the normal viewer system.
    ----------------------------------------- */

    if (matchingPin) {

        openViewer(matchingPin);

        return;
    }


    /* -----------------------------------------
       Fallback:
       open the image directly even if it
       hasn't been added to a gallery yet.
    ----------------------------------------- */

    openSearchImageDirectly(
        backgroundUrl,
        result.querySelector("span")?.textContent || "OurPin"
    );

});


/* =========================================================
   DIRECT SEARCH IMAGE VIEWER
========================================================= */

function openSearchImageDirectly(imageSrc, title) {

    viewerImage.classList.remove("visible");


    setTimeout(() => {

        viewerImage.src = imageSrc;
        viewerImage.alt = title;

        viewerImage.onload = () => {
            viewerImage.classList.add("visible");
        };

    }, 80);


    const categoryKey =
        getViewerCategory(imageSrc);

    const categoryInfo =
        viewerCategoryData[categoryKey] ||
        viewerCategoryData.art;


    viewerCategory.textContent =
        categoryInfo.title.toUpperCase();


    viewerTitle.textContent =
        title;


    viewerDescription.textContent =
        categoryInfo.description;


    viewerTags.innerHTML = "";

    categoryInfo.tags.forEach(tag => {

        const tagElement =
            document.createElement("span");

        tagElement.textContent =
            tag;

        viewerTags.appendChild(tagElement);

    });


    viewerCounter.textContent =
        "Search result";


    viewerSave.classList.remove("saved");

    viewerSave.innerHTML =
        "<span>♡</span> Save";


    imageViewer.classList.add("active");

    document.body.style.overflow = "hidden";
}





































































































































/* OUR TOOL CATEGORY NAVIGATION START */

document.addEventListener("DOMContentLoaded", () => {

    const ourToolCategories = [

        {
            button: ".category.aesthetic",
            gallery: "aestheticGallery",
            back: "backFromAesthetic",
            reveal: "aesthetic-reveal"
        },

        {
            button: ".category.tech",
            gallery: "techGallery",
            back: "backFromTech",
            reveal: "tech-reveal"
        },

        {
            button: ".category.photography",
            gallery: "photographyGallery",
            back: "backFromPhotography",
            reveal: "photography-reveal"
        }

    ];


    ourToolCategories.forEach(item => {

        const button =
            document.querySelector(
                item.button
            );

        const gallery =
            document.getElementById(
                item.gallery
            );

        const back =
            document.getElementById(
                item.back
            );


        if (!button || !gallery) {
            return;
        }


        if (
            button.dataset.ourToolBound
            === "true"
        ) {
            return;
        }


        button.dataset.ourToolBound =
            "true";


        button.addEventListener(
            "click",
            () => {

                categories.classList.remove(
                    "active"
                );

                gallery.classList.add(
                    "active"
                );


                gallery.classList.remove(
                    "aesthetic-reveal",
                    "tech-reveal",
                    "photography-reveal"
                );


                void gallery.offsetWidth;


                gallery.classList.add(
                    item.reveal
                );

            }
        );


        if (back) {

            back.addEventListener(
                "click",
                () => {

                    gallery.classList.remove(
                        "active",
                        item.reveal
                    );

                    categories.classList.add(
                        "active"
                    );

                }
            );

        }

    });

});


/* OUR TOOL CATEGORY NAVIGATION END */


/* =====================================
   OURPIN — COMPREHENSION ENGINE
===================================== */

// DEMONSTRATION CONTENT
// These are practice examples, not live news.

const practiceSets = {

    national: {
        category: "SECTION A / NATIONAL",
        title: "Public Infrastructure and Civic Life",
        description: "Understand how public infrastructure influences everyday life.",
        passage: [
            "Public infrastructure forms the foundation of everyday civic life. Roads, public transport, schools, hospitals and water systems enable communities to function effectively. Their importance extends beyond the services they provide because they also influence access to opportunities and the quality of life.",
            "Effective infrastructure planning requires long-term investment, maintenance and coordination between different public authorities. Building new facilities alone is insufficient if existing infrastructure is neglected. A sustainable approach considers accessibility, reliability and the needs of different communities."
        ],
        questions: [
            {
                question: "What is the central idea of the passage?",
                options: [
                    "Infrastructure is limited to road construction.",
                    "Public infrastructure supports civic life and access to opportunities.",
                    "Private organisations manage all public services.",
                    "Infrastructure requires no long-term planning."
                ],
                answer: 1
            },
            {
                question: "According to the passage, what is insufficient on its own?",
                options: [
                    "Maintaining existing facilities",
                    "Coordinating public authorities",
                    "Building new facilities without maintaining existing ones",
                    "Planning for accessibility"
                ],
                answer: 2
            },
            {
                question: "Which is an important element of sustainable infrastructure?",
                options: [
                    "Ignoring maintenance",
                    "Considering accessibility and reliability",
                    "Avoiding public investment",
                    "Focusing exclusively on construction"
                ],
                answer: 1
            }
        ]
    },

    international: {
        category: "SECTION A / INTERNATIONAL",
        title: "International Cooperation and Shared Challenges",
        description: "Explore the importance of cooperation between countries.",
        passage: [
            "Many challenges faced by modern societies extend beyond national borders. Environmental concerns, public health risks, international trade and technological developments can affect several countries simultaneously. Consequently, individual governments may find it difficult to address certain issues independently.",
            "International cooperation allows countries to exchange information, coordinate policies and develop common approaches. However, successful cooperation depends on mutual trust, clear communication and the willingness of participating countries to fulfil their commitments."
        ],
        questions: [
            {
                question: "Why can individual governments struggle to address certain challenges?",
                options: [
                    "All challenges are restricted to local areas.",
                    "Some challenges extend beyond national borders.",
                    "Countries do not have governments.",
                    "International cooperation prevents communication."
                ],
                answer: 1
            },
            {
                question: "What does international cooperation facilitate?",
                options: [
                    "The elimination of all national policies",
                    "The exchange of information and coordination",
                    "The removal of international trade",
                    "The avoidance of shared responsibilities"
                ],
                answer: 1
            },
            {
                question: "According to the passage, successful cooperation requires:",
                options: [
                    "Competition without communication",
                    "Mutual trust and clear communication",
                    "Complete independence",
                    "The absence of commitments"
                ],
                answer: 1
            }
        ]
    },

    economy: {
        category: "SECTION A / ECONOMY",
        title: "Inflation and Purchasing Power",
        description: "Understand the relationship between prices and purchasing power.",
        passage: [
            "Inflation refers to a sustained increase in the general price level of goods and services over time. When prices rise, the purchasing power of money decreases. This means that the same amount of money may buy fewer goods and services than it could previously.",
            "Inflation can be influenced by several factors, including changes in production costs, demand and the availability of goods. Understanding inflation requires looking beyond the price of a single product and examining broader changes across the economy."
        ],
        questions: [
            {
                question: "What happens to purchasing power when the general price level rises?",
                options: [
                    "It necessarily increases.",
                    "It decreases.",
                    "It remains permanently unchanged.",
                    "It becomes unrelated to money."
                ],
                answer: 1
            },
            {
                question: "Which factor can influence inflation?",
                options: [
                    "Production costs",
                    "The colour of currency",
                    "The number of languages spoken",
                    "Geographical names alone"
                ],
                answer: 0
            },
            {
                question: "Why should inflation be examined broadly?",
                options: [
                    "Because only one product determines inflation.",
                    "Because it concerns general changes in prices across the economy.",
                    "Because prices never change.",
                    "Because production has no influence on prices."
                ],
                answer: 1
            }
        ]
    },

    science: {
        category: "SECTION A / SCIENCE & TECHNOLOGY",
        title: "Satellites and Earth Observation",
        description: "Discover how satellites help us understand our planet.",
        passage: [
            "Earth observation satellites collect information about the planet using sensors that record reflected or emitted energy. The resulting data can help researchers monitor vegetation, observe changes in land use and examine weather-related patterns over large geographical areas.",
            "Different sensors collect different types of information. Some record visible light, while others operate using different parts of the electromagnetic spectrum. Scientists interpret these observations to identify patterns and changes that may not be easily visible from ground-level observations alone."
        ],
        questions: [
            {
                question: "What is a primary purpose of Earth observation satellites?",
                options: [
                    "To collect information about the planet",
                    "To replace all ground-based research",
                    "To control weather systems",
                    "To eliminate geographical variation"
                ],
                answer: 0
            },
            {
                question: "Why do satellites use different sensors?",
                options: [
                    "All sensors record identical information.",
                    "Different sensors collect different types of information.",
                    "Sensors prevent observations.",
                    "Different sensors are used only for decoration."
                ],
                answer: 1
            },
            {
                question: "What can scientists identify using satellite observations?",
                options: [
                    "Only underground objects",
                    "Patterns and geographical changes",
                    "Individual human thoughts",
                    "The exact future of the planet"
                ],
                answer: 1
            }
        ]
    }
};


// DISPLAY CURRENT DATE

function updateDate() {
    const element = document.getElementById("current-date");

    if (!element) return;

    element.textContent = new Intl.DateTimeFormat("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(new Date());
}


// LOAD THE SELECTED PRACTICE SET

function loadPractice() {

    const form = document.getElementById("quiz-form");

    if (!form) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const set = practiceSets[id];

    if (!set) {
        document.getElementById("article-title").textContent =
            "Practice set not found.";

        document.getElementById("article-description").textContent =
            "Please return to Daily News and select a valid category.";

        return;
    }

    document.title = set.title + " — OurPin";

    document.getElementById("practice-category").textContent = set.category;
    document.getElementById("article-title").textContent = set.title;
    document.getElementById("article-description").textContent = set.description;
    document.getElementById("article-date").textContent = "DEMONSTRATION EDITION";
    document.getElementById("article-source").textContent =
        "OURPIN SAMPLE CONTENT · NOT LIVE NEWS";


    // LOAD PASSAGE

    const passage = document.getElementById("passage-content");

    passage.replaceChildren();

    set.passage.forEach(paragraph => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        passage.appendChild(p);
    });


    // LOAD QUESTIONS

    const questionList = document.getElementById("question-list");

    questionList.replaceChildren();

    document.getElementById("question-count").textContent =
        set.questions.length + " QUESTIONS · DEMONSTRATION";

    set.questions.forEach((question, index) => {

        const card = document.createElement("div");
        card.className = "question-card";

        const heading = document.createElement("h3");
        heading.textContent =
            "Q" + (index + 1) + ". " + question.question;

        card.appendChild(heading);

        question.options.forEach((option, optionIndex) => {

            const label = document.createElement("label");
            label.className = "option-label";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = "question-" + index;
            input.value = optionIndex;
            input.required = true;

            const text = document.createElement("span");
            text.textContent = option;

            label.appendChild(input);
            label.appendChild(text);

            card.appendChild(label);
        });

        questionList.appendChild(card);
    });


    // QUIZ SUBMISSION AND SCORING

    form.onsubmit = function(event) {

        event.preventDefault();

        let score = 0;
        let unanswered = 0;

        set.questions.forEach((question, index) => {

            const selected = form.querySelector(
                'input[name="question-' + index + '"]:checked'
            );

            if (!selected) {
                unanswered++;
                return;
            }

            if (Number(selected.value) === question.answer) {
                score++;
            }
        });

        const result = document.getElementById("quiz-result");

        if (unanswered > 0) {
            result.textContent =
                "Please answer all " + unanswered +
                " remaining question(s).";
            return;
        }

        result.textContent =
            "Your score: " + score + " / " + set.questions.length +
            " (" + Math.round(score / set.questions.length * 100) +
            "%). Check the separate answer key for explanations.";
    };
}


// INITIALISE WEBSITE

function initialiseOurPin() {
    updateDate();
    loadPractice();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseOurPin);
} else {
    initialiseOurPin();
}

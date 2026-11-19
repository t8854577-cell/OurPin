
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


/* ADDA247 DEMONSTRATION PRACTICE SET */

practiceSets.adda247 = {

    category: "SECTION B / ADDA247",

    title: "International Cooperation and Global Challenges",

    description: "A demonstration comprehension exercise for the Adda247 section.",

    passage: [
        "In an increasingly interconnected world, several challenges extend beyond national boundaries. Environmental concerns, international trade, technological developments and public health issues can affect multiple countries simultaneously. Addressing such challenges often requires countries to cooperate rather than act independently.",

        "International cooperation enables governments to exchange information, coordinate policies and establish common approaches. Its effectiveness, however, depends on mutual trust, communication and the willingness of participating countries to fulfil their commitments."
    ],

    questions: [
        {
            question: "Why do certain global challenges require international cooperation?",
            options: [
                "They affect only individual communities.",
                "They can extend beyond national boundaries.",
                "They eliminate the need for governments.",
                "They are unrelated to other countries."
            ],
            answer: 1
        },
        {
            question: "What does international cooperation enable?",
            options: [
                "Information exchange and policy coordination.",
                "The elimination of all national policies.",
                "The avoidance of shared responsibilities.",
                "The removal of communication."
            ],
            answer: 0
        },
        {
            question: "What is necessary for effective international cooperation?",
            options: [
                "Complete independence.",
                "The absence of commitments.",
                "Mutual trust and communication.",
                "Avoiding information exchange."
            ],
            answer: 2
        }
    ]
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


/* =====================================
   OURPIN — ANSWER KEY SYSTEM
===================================== */

const answerExplanations = {

    national: [
        "The passage describes public infrastructure as essential to civic life and access to opportunities.",
        "It explicitly explains that building new facilities is insufficient when existing infrastructure is neglected.",
        "Accessibility, reliability and community needs are identified as important considerations."
    ],

    international: [
        "The passage explains that many modern challenges extend beyond national borders.",
        "Information exchange and policy coordination are two benefits of international cooperation.",
        "Mutual trust, communication and fulfilled commitments are identified as requirements."
    ],

    economy: [
        "The passage states that rising general prices reduce the purchasing power of money.",
        "Changes in production costs are explicitly mentioned as a factor influencing inflation.",
        "Inflation concerns broader changes in the general price level, not just one product."
    ],

    science: [
        "Earth observation satellites collect information about our planet using sensors.",
        "Different sensors record different types of information, including different parts of the electromagnetic spectrum.",
        "Satellite observations help scientists identify geographical patterns and changes."
    ]

};


// LOAD ANSWER KEY

function loadAnswerKey() {

    const container = document.getElementById("answer-key-list");

    if (!container) return;

    const id = new URLSearchParams(window.location.search).get("id");
    const set = practiceSets[id];

    if (!set) {
        document.getElementById("key-title").textContent =
            "Answer key not found.";

        return;
    }

    document.getElementById("key-title").textContent =
        "Answer Key — " + set.title;

    document.getElementById("key-category").textContent =
        set.category;

    document.getElementById("key-date").textContent =
        new Intl.DateTimeFormat("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(new Date());

    container.replaceChildren();

    set.questions.forEach((question, index) => {

        const item = document.createElement("section");
        item.className = "answer-key-item";

        const heading = document.createElement("h3");
        heading.textContent =
            "Q" + (index + 1) + ". " + question.question;

        const answer = document.createElement("p");

        const letter = ["A", "B", "C", "D"][question.answer];

        answer.textContent =
            "Correct Answer: " + letter + ". " +
            question.options[question.answer];

        const explanation = document.createElement("p");
        explanation.textContent =
            "Explanation: " +
            (answerExplanations[id]?.[index] ||
             "Refer to the relevant passage.");

        item.appendChild(heading);
        item.appendChild(answer);
        item.appendChild(explanation);

        container.appendChild(item);

    });

}


// ENABLE THE ANSWER KEY BUTTON ON PRACTICE PAGES

function setupAnswerKeyButton() {

    const button = document.getElementById("answer-key-button");

    if (!button) return;

    const id = new URLSearchParams(window.location.search).get("id");

    if (!practiceSets[id]) return;

    button.disabled = false;
    button.textContent = "VIEW ANSWER KEY →";

    button.addEventListener("click", function() {

        window.location.href =
            "answer-key.html?id=" + encodeURIComponent(id);

    });

}


// PRINT ANSWER KEY

const printButton = document.getElementById("print-key");

if (printButton) {
    printButton.addEventListener("click", function() {
        window.print();
    });
}


// INITIALISE ANSWER KEY FEATURES

loadAnswerKey();
setupAnswerKeyButton();

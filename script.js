/* =====================================================
   KIRTI SINGH PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   HELPERS
===================================================== */

const qs = (selector, parent = document) =>
    parent.querySelector(selector);

const qsa = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];


/* =====================================================
   YEAR
===================================================== */

const yearElement = qs("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn = qs("#menuBtn");
const mainNav = qs("#mainNav");

if (menuBtn && mainNav) {

    menuBtn.addEventListener("click", () => {

        const isOpen =
            mainNav.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    qsa("#mainNav a").forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =====================================================
   INTRO INTERACTION
===================================================== */

const introWords = qsa(".intro-word");
const introTip = qs("#introTip");

introWords.forEach(word => {

    word.addEventListener("click", () => {

        introWords.forEach(item =>
            item.classList.remove("active")
        );

        word.classList.add("active");

        if (introTip) {
            introTip.textContent =
                word.dataset.tip || "";
        }

    });

});


/* =====================================================
   PROFILE FLOW
===================================================== */

const flowItems = qsa(".flow-item");

flowItems.forEach(item => {

    item.addEventListener("click", () => {

        flowItems.forEach(i =>
            i.classList.remove("active")
        );

        item.classList.add("active");

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealItems = qsa(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealItems.forEach(item =>
        revealObserver.observe(item)
    );

} else {

    revealItems.forEach(item =>
        item.classList.add("visible")
    );

}


/* =====================================================
   SKILLS INTERACTION
===================================================== */

const skillCards = qsa(".skill-card");
const skillDetail = qs("#skillDetail");


const skillDescriptions = {

    "Excel":
        "Advanced Excel learning includes Pivot Tables, XLOOKUP, VLOOKUP, financial formulas, charts, data cleaning and practical analysis.",

    "Power BI":
        "Power BI work focuses on dashboards, data visualization, data modelling, Power Query and DAX basics.",

    "Finance":
        "Finance skills include financial analysis, mutual fund understanding, portfolio performance, risk-return concepts and Time Value of Money.",

    "Python":
        "Python is part of my technology learning path, with focus on practical data-related tasks and problem solving.",

    "Business Analytics":
        "Business analytics includes feasibility analysis, market research, trend interpretation and structured recommendations.",

    "Research":
        "Research skills include documentation, financial research, business research and communicating findings clearly.",

    "Professional":
        "Professional strengths include analytical thinking, communication, leadership, problem solving and team collaboration.",

    "Technology":
        "Technology learning includes Python and MERN Stack fundamentals for broader problem-solving and project development."

};


skillCards.forEach(card => {

    card.addEventListener("click", () => {

        skillCards.forEach(item =>
            item.classList.remove("active")
        );

        card.classList.add("active");

        const skill =
            card.dataset.skill;

        if (skillDetail) {

            skillDetail.textContent =
                skillDescriptions[skill] ||
                "Practical learning and project-based development.";

        }

    });

});


/* =====================================================
   PROJECT MODAL
===================================================== */

const projectData = {

    luminaire: {

        title:
            "LUMINAIRE — Financial Feasibility & Business Analysis",

        body: `
            <p>
                A financial feasibility and business analysis
                project focused on evaluating business viability,
                financial performance, investment requirements,
                market opportunities and sustainability.
            </p>

            <h3>Project Focus</h3>

            <ul>
                <li>Financial feasibility</li>
                <li>Capital budgeting</li>
                <li>Cost-benefit analysis</li>
                <li>ROI evaluation</li>
                <li>Investment appraisal</li>
                <li>Financial modelling</li>
                <li>Market research</li>
                <li>Competitor analysis</li>
                <li>Break-even analysis</li>
                <li>Risk analysis</li>
                <li>Business recommendations</li>
            </ul>

            <p>
                The project was developed as an academic
                business-school project and focused on applying
                finance and analytical concepts to a practical
                business problem.
            </p>
        `
    },


    research: {

        title:
            "Financial Inclusion Through Digital Payments",

        body: `
            <p>
                <strong>
                    Financial Inclusion Through Digital Payments:
                    How Technology is Bridging the Gap
                </strong>
            </p>

            <p>
                Exploring how digital payment technologies can
                improve access to financial services and
                contribute to financial inclusion.
            </p>

            <h3>Research Focus</h3>

            <ul>
                <li>Digital payments</li>
                <li>Financial inclusion</li>
                <li>Digital literacy</li>
                <li>Technology and finance</li>
                <li>Financial participation</li>
            </ul>

            <p>
                Author: Kirti Singh<br>
                Co-author: Kunal Rajput<br>
                Under Guidance: Dr. Anjali Dubey<br>
                ABES Business School
            </p>
        `
    }

};


const projectModal =
    qs("#projectModal");

const projectModalTitle =
    qs("#projectModalTitle");

const projectModalBody =
    qs("#projectModalBody");


qsa("[data-project-open]")
    .forEach(button => {

        button.addEventListener("click", () => {

            const key =
                button.dataset.projectOpen;

            const project =
                projectData[key];

            if (!project) return;

            projectModalTitle.textContent =
                project.title;

            projectModalBody.innerHTML =
                project.body;

            openModal(projectModal);

        });

    });


/* =====================================================
   PRICING
===================================================== */


/*
    Tutoring prices are fixed exactly as requested.

    Other service prices are the affordable starting prices
    already used in the website pricing setup.
*/

const services = {

    "Physics Tutoring": {

        price: 299,

        unit: "/ session",

        audience:
            "Class 9 → Graduation",

        tutor: true,

        interest:
            "Physics Tutoring"

    },


    "Finance Tutoring": {

        price: 399,

        unit: "/ session",

        audience:
            "Graduation → MBA",

        tutor: true,

        interest:
            "Finance Tutoring"

    },


    "Excel & Data Analysis Tutoring": {

        price: 499,

        unit: "/ session",

        audience:
            "Beginner → Advanced",

        tutor: true,

        interest:
            "Data / Excel Tutoring"

    },


    "Data Analysis": {

        price: 499,

        unit: "starting from",

        audience:
            "Project scope and data size determine the final quote.",

        tutor: false,

        interest:
            "Freelance Data Analysis"

    },


    "Financial Analysis": {

        price: 999,

        unit: "starting from",

        audience:
            "Final pricing depends on scope and complexity.",

        tutor: false,

        interest:
            "Financial Analysis"

    },


    "Power BI Dashboards": {

        price: 999,

        unit: "starting from",

        audience:
            "Dashboard complexity and data requirements determine the final quote.",

        tutor: false,

        interest:
            "Power BI / Dashboard"

    },


    "Excel & Data Cleaning": {

        price: 399,

        unit: "starting from",

        audience:
            "Final pricing depends on data size and cleaning requirements.",

        tutor: false,

        interest:
            "Excel / Data Cleaning"

    },


    "Resume / CV Support": {

        price: 499,

        unit: "starting from",

        audience:
            "Final pricing depends on the level of support required.",

        tutor: false,

        interest:
            "Resume / CV Building"

    },


    "Presentation / PPT Design": {

        price: 499,

        unit: "starting from",

        audience:
            "Final pricing depends on slides, complexity and design requirements.",

        tutor: false,

        interest:
            "Presentation / PPT Design"

    },


    "Reports & Documentation": {

        price: 499,

        unit: "starting from",

        audience:
            "Final pricing depends on pages and formatting requirements.",

        tutor: false,

        interest:
            "Report / Document Formatting"

    },


    "Research Collaboration": {

        price: null,

        unit: "Custom Quote",

        audience:
            "Research scope and collaboration requirements are discussed before pricing.",

        tutor: false,

        interest:
            "Research / Collaboration"

    }

};


let currentService = null;

let currentCurrency = "INR";


/*
    Approximate fallback rate.

    The website attempts to obtain a current rate
    from Frankfurter. If the API is unavailable,
    this approximate value is used.
*/

let usdRate = 95.89;


const priceModal =
    qs("#priceModal");

const priceModalTitle =
    qs("#priceModalTitle");

const priceAudience =
    qs("#priceAudience");

const priceAmount =
    qs("#priceAmount");

const priceEquivalent =
    qs("#priceEquivalent");

const bookingBtn =
    qs("#bookingBtn");


function renderPrice() {

    if (!currentService) return;

    const service =
        services[currentService];

    if (!service) return;


    if (service.price === null) {

        priceAmount.textContent =
            "Custom Quote";

        priceEquivalent.textContent =
            "Discuss your requirements for a tailored quote.";

        return;

    }


    const usd =
        service.price / usdRate;


    if (currentCurrency === "INR") {

        priceAmount.textContent =
            `₹${service.price.toLocaleString("en-IN")} ${service.unit}`;

        priceEquivalent.textContent =
            `≈ $${usd.toFixed(2)} USD equivalent`;

    } else {

        priceAmount.textContent =
            `≈ $${usd.toFixed(2)} ${service.unit}`;

        priceEquivalent.textContent =
            `₹${service.price.toLocaleString("en-IN")} INR original price`;

    }

}


/* =====================================================
   OPEN PRICE MODAL
===================================================== */

function openPrice(serviceName) {

    const service =
        services[serviceName];

    if (!service) return;


    currentService =
        serviceName;

    currentCurrency =
        "INR";


    priceModalTitle.textContent =
        serviceName;


    priceAudience.textContent =
        service.audience;


    qsa(".currency-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.currency === "INR"
            );

        });


    if (service.tutor) {

        bookingBtn.textContent =
            "Book a Tutoring Session →";

    } else if (service.price === null) {

        bookingBtn.textContent =
            "Discuss Your Requirements →";

    } else {

        bookingBtn.textContent =
            "Discuss Your Requirements →";

    }


    bookingBtn.onclick = () => {

        setTimeout(() => {

            const select =
                qs("#interestSelect");

            if (select) {

                select.value =
                    service.interest;

            }

        }, 100);

    };


    openModal(priceModal);

    renderPrice();

}


/* =====================================================
   SERVICE BUTTONS
===================================================== */

qsa(".charge-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            openPrice(
                button.dataset.service
            );

        });

    });


/* =====================================================
   CURRENCY SWITCH
===================================================== */

qsa(".currency-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            currentCurrency =
                button.dataset.currency;


            qsa(".currency-btn")
                .forEach(item => {

                    item.classList.toggle(
                        "active",
                        item === button
                    );

                });


            renderPrice();

        });

    });


/* =====================================================
   LIVE USD RATE
===================================================== */

async function updateUsdRate() {

    try {

        const response =
            await fetch(
                "https://api.frankfurter.app/latest?from=INR&to=USD",
                {
                    headers: {
                        Accept: "application/json"
                    }
                }
            );


        if (!response.ok) {
            throw new Error("Exchange rate unavailable");
        }


        const data =
            await response.json();


        if (
            data &&
            data.rates &&
            Number(data.rates.USD) > 0
        ) {

            usdRate =
                Number(data.rates.USD);


            if (currentService) {
                renderPrice();
            }

        }

    } catch (error) {

        /*
            The fallback approximate rate remains active.
        */

        console.log(
            "Using approximate USD conversion."
        );

    }

}


updateUsdRate();


/* =====================================================
   MODAL FUNCTIONS
===================================================== */

function openModal(modal) {

    if (!modal) return;

    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );


    const closeButton =
        qs(".modal-close", modal);

    setTimeout(() => {

        closeButton?.focus();

    }, 50);

}


function closeModals() {

    qsa(".modal")
        .forEach(modal => {

            modal.classList.remove(
                "open"
            );

            modal.setAttribute(
                "aria-hidden",
                "true"
            );

        });


    document.body.classList.remove(
        "modal-open"
    );

}


qsa("[data-modal-close]")
    .forEach(element => {

        element.addEventListener(
            "click",
            closeModals
        );

    });


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModals();

        }

    }
);


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const navLinks =
    qsa("#mainNav a:not(.connect-btn)");

const pageSections =
    qsa("main section[id]");


if ("IntersectionObserver" in window) {

    const navObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;


                    navLinks.forEach(link => {

                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") ===
                            `#${entry.target.id}`
                        );

                    });

                });

            },
            {
                threshold: 0.3
            }
        );


    pageSections.forEach(section =>
        navObserver.observe(section)
    );

}


/* =====================================================
   CUSTOM PROJECT CONTACT
===================================================== */

qsa('a[href="#contact"]')
    .forEach(link => {

        link.addEventListener("click", () => {

            setTimeout(() => {

                const select =
                    qs("#interestSelect");

                if (
                    link.textContent
                        .toLowerCase()
                        .includes("custom")
                ) {

                    if (select) {
                        select.value =
                            "Custom Project";
                    }

                }

            }, 150);

        });

    });


/* =====================================================
   PREVENT EMPTY FORM SUBMISSION
===================================================== */

const contactForm =
    qs(".contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            const message =
                qs("textarea[name='message']");

            if (
                message &&
                message.value.trim().length < 5
            ) {

                event.preventDefault();

                message.focus();

                alert(
                    "Please add a little more information about your requirement."
                );

            }

        }
    );

}
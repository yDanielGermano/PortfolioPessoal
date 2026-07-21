// lang.js - Portfólio Daniel Germano Multi-language Script
const translations = {
    // Navigation
    "nav-about": { pt: "Sobre", en: "About" },
    "nav-skills": { pt: "Habilidades", en: "Skills" },
    "nav-projects": { pt: "Projetos", en: "Projects" },
    "nav-certs": { pt: "Certificados", en: "Certificates" },
    "nav-edu": { pt: "Formação", en: "Education" },
    "nav-upload": { pt: "Upload", en: "Upload" },

    // Hero Section
    "hero-tag": { pt: "Desenvolvedor de Software & Eletrônica", en: "Software Developer & Electronics Specialist" },
    "hero-title": { pt: "Daniel <span>Germano</span>", en: "Daniel <span>Germano</span>" },
    "hero-desc": { 
        pt: "Especialista em automação de hardware e software embarcado, resolvendo problemas complexos com lógica e tecnologia de ponta.", 
        en: "Specialist in hardware automation and embedded software, solving complex problems with logic and cutting-edge technology." 
    },
    "hero-btn-projects": { pt: "Ver Projetos", en: "View Projects" },
    "hero-btn-contact": { pt: "Contato", en: "Contact" },

    // Sobre Section
    "about-title": { pt: "Sobre Mim", en: "About Me" },
    "about-p1": { 
        pt: "Moro em Santo André, SP. Sou um desenvolvedor apaixonado por desvendar o funcionamento íntimo das tecnologias — desde o silício dos microcontroladores na eletrônica até as camadas lógicas de alto nível em arquiteturas Web e Mobile.", 
        en: "I live in Santo André, SP. I am a developer passionate about uncovering the inner workings of technology — from the silicon of microcontrollers in electronics to the high-level logical layers of Web and Mobile architectures." 
    },
    "about-p2": { 
        pt: "Meu perfil cognitivo de Altas Habilidades em lógica e comunicação me impulsiona a buscar desafios constantes, solucionando dores reais de forma eficiente e estruturada. Sou fundador da <strong>D-Oryzon</strong>, marca independente que idealizei para construir soluções digitais de alto impacto.", 
        en: "My cognitive profile of High Abilities in logic and communication drives me to seek constant challenges, solving real pain points in an efficient and structured way. I am the founder of <strong>D-Oryzon</strong>, an independent brand I conceived to build high-impact digital solutions." 
    },
    "about-contact-title": { pt: "Contato", en: "Contact" },

    // Habilidades Section
    "skills-title": { pt: "Habilidades", en: "Skills" },
    "skills-cat1": { pt: "Linguagens", en: "Languages" },
    "skills-cat2": { pt: "Hardware & IoT", en: "Hardware & IoT" },
    "skills-cat3": { pt: "Design & Outros", en: "Design & Others" },

    // Projetos Section
    "projects-title": { pt: "Projetos & Portfólio", en: "Projects & Portfolio" },
    "proj-card1-tag": { pt: "Empresarial", en: "Business" },
    "proj-card1-desc": { 
        pt: "Marca independente de soluções digitais voltada a Sistemas Embarcados, Automação CLI, Web & Mobile, focando em otimizar pequenos negócios regionais.", 
        en: "Independent digital solutions brand focused on Embedded Systems, CLI Automation, Web & Mobile, aimed at optimizing small regional businesses." 
    },
    "proj-card1-link": { pt: "Ver Código &rarr;", en: "View Code &rarr;" },
    "proj-card2-tag": { pt: "GameDev", en: "GameDev" },
    "proj-card2-desc": { 
        pt: "Jogo 2D autoral em equipe desenvolvido para a Latin American Game Showcase (LAGS), destacando-se na competição entre mais de 120 participantes.", 
        en: "Original 2D team game developed for the Latin American Game Showcase (LAGS), standing out in the competition among more than 120 participants." 
    },
    "proj-card2-link": { pt: "Jogar no Itch.io &rarr;", en: "Play on Itch.io &rarr;" },
    "proj-card3-tag": { pt: "Automação / Python", en: "Automation / Python" },
    "proj-card3-desc": { 
        pt: "Ferramenta CLI estruturada em Python para monitorar e buscar vagas de tecnologia em tempo real diretamente de APIs de emprego.", 
        en: "CLI tool structured in Python to monitor and search for technology job openings in real time directly from employment APIs." 
    },
    "proj-card4-tag": { pt: "Soberania Digital", en: "Digital Sovereignty" },
    "proj-card4-desc": { 
        pt: "Infraestrutura pessoal de containerização com Docker, orquestrando modelos de IA locais (Ollama) e Nextcloud no meu servidor pessoal.", 
        en: "Personal containerization infrastructure with Docker, orchestrating local AI models (Ollama) and Nextcloud on my personal server." 
    },
    "proj-card5-tag": { pt: "Web ARG", en: "Web ARG" },
    "proj-card5-desc": { 
        pt: "Website imersivo inspirado em experiências de ARG (Alternate Reality Game) baseados no universo do Poppy Playtime.", 
        en: "Immersive website inspired by ARG (Alternate Reality Game) experiences based on the Poppy Playtime universe." 
    },
    "proj-status-dev": { pt: "Em Desenvolvimento", en: "In Development" },
    "proj-card6-tag": { pt: "Eletrônica & IoT", en: "Electronics & IoT" },
    "proj-card6-title": { pt: "Painel do Kart Elétrico (TCC)", en: "Electric Go-Kart Dashboard (TCC)" },
    "proj-card6-desc": { 
        pt: "Desenvolvimento de hardware embarcado e circuito impresso para monitoramento térmico, controle de tração e exibição em tempo real de telemetria no TCC de Eletrônica.", 
        en: "Development of embedded hardware and printed circuit board for thermal monitoring, traction control, and real-time telemetry display in the Electronics Graduation Project." 
    },
    "proj-card6-link": { pt: "Ver Simulação &rarr;", en: "Watch Simulation &rarr;" },
    "proj-card7-tag": { pt: "Backend / C#", en: "Backend / C#" },
    "proj-card7-desc": { 
        pt: "Aplicação CLI matemática robusta em C# com operações complexas, teoremas matemáticos (triângulo retângulo) e um sistema de tabuada interativo infinito.", 
        en: "Robust mathematical CLI application in C# featuring complex operations, mathematical theorems (right-angled triangle), and an interactive infinite multiplication table system." 
    },
    "proj-card8-tag": { pt: "Finanças / Python", en: "Finance / Python" },
    "proj-card8-desc": { 
        pt: "Calculadora de taxas de importação baseada em legislação nacional e estadual (IOF/ICMS) com integração em tempo real a APIs de câmbio de moedas.", 
        en: "Import fee calculator based on national and state legislation (IOF/ICMS) with real-time integration to live currency exchange APIs." 
    },
    "proj-card9-tag": { pt: "Produtividade / Python", en: "Productivity / Python" },
    "proj-card9-desc": { 
        pt: "Assistente pessoal automatizado em Python que gera agendas e rotinas diárias personalizadas em Markdown a partir de especificações estruturadas em JSON.", 
        en: "Automated personal assistant in Python that generates custom schedules and daily routines in Markdown from structured JSON configurations." 
    },

    // Certificados Section
    "certs-title": { pt: "Certificados", en: "Certificates" },
    "certs-loading": { pt: "Carregando certificações...", en: "Loading certificates..." },

    // Formação Section
    "edu-title": { pt: "Formação Acadêmica", en: "Academic Background" },
    "edu-card1-title": { pt: "Ensino Médio & Técnico em Eletrônica", en: "High School & Electronics Technical Degree" },
    "edu-card1-date": { pt: "Concluído em 2024", en: "Completed in 2024" },
    "edu-card1-place": { pt: "ETEC Júlio de Mesquita", en: "ETEC Júlio de Mesquita" },
    "edu-card1-desc": { 
        pt: "Aprovado em 23° lugar. Formação teórica e prática em circuitos digitais, microcontroladores, lógica de controle e bancada analógica.", 
        en: "Passed in 23rd place. Theoretical and practical training in digital circuits, microcontrollers, control logic, and analog workbench." 
    },
    "edu-card2-title": { pt: "Engenharia de Software (Bacharelado)", en: "Software Engineering (Bachelor's Degree)" },
    "edu-card2-date": { pt: "Início em Agosto/2026", en: "Beginning August/2026" },
    "edu-card2-place": { pt: "Faculdade Anhanguera (EAD)", en: "Anhanguera University (EAD)" },
    "edu-card2-desc": { 
        pt: "Graduação focada no ciclo de vida completo de desenvolvimento de software, arquitetura de sistemas, metodologias ágeis e gerenciamento de projetos. Flexibilidade total para projetos comerciais e gamedev.", 
        en: "Undergraduate degree focused on the complete software development lifecycle, systems architecture, agile methodologies, and project management. Full flexibility for commercial projects and gamedev." 
    },

    // Footer
    "footer-text": { 
        pt: "&copy; 2026 Daniel Germano. Soberania Digital e Software de Alto Impacto.", 
        en: "&copy; 2026 Daniel Germano. Digital Sovereignty and High-Impact Software." 
    }
};

// Current active language: default is 'pt'
let currentLang = localStorage.getItem("dg_portfolio_lang") || "pt";

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("dg_portfolio_lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    updateContent();
}

function updateContent() {
    // 1. Update elements with data-i18n
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[key] && translations[key][currentLang]) {
            if (element.tagName === "P" || element.tagName === "LI" || element.tagName === "DIV" || element.tagName === "SPAN" || element.tagName === "H1") {
                element.innerHTML = translations[key][currentLang];
            } else {
                element.textContent = translations[key][currentLang];
            }
        }
    });

    // 2. Update navigation active state and text
    const navLinks = document.querySelectorAll("nav a");
    const navKeys = {
        "#sobre": "nav-about",
        "#habilidades": "nav-skills",
        "#projetos": "nav-projects",
        "#certificacoes": "nav-certs",
        "#formacao": "nav-edu",
        "admin.html": "nav-upload"
    };

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        const key = navKeys[href];
        if (key && translations[key] && translations[key][currentLang]) {
            link.textContent = translations[key][currentLang];
        }
    });

    // 3. Update footer text
    const footerParagraph = document.querySelector("footer p");
    if (footerParagraph) {
        footerParagraph.innerHTML = translations["footer-text"][currentLang];
    }

    // 4. Update language toggle button text
    const toggleBtn = document.getElementById("lang-toggle");
    if (toggleBtn) {
        toggleBtn.textContent = currentLang === "pt" ? "PT 🇧🇷" : "EN 🇺🇸";
    }

    // 5. Update categories inside certificates if loaded
    const certTags = document.querySelectorAll(".cert-tag");
    certTags.forEach(tag => {
        const text = tag.textContent.trim();
        if (currentLang === "en") {
            if (text === "Sistemas Embarcados & Eletrônica") tag.textContent = "Embedded Systems & Electronics";
            else if (text === "Inteligência Artificial") tag.textContent = "Artificial Intelligence";
            else if (text === "Algoritmos & Lógica" || text === "Algoritmos") tag.textContent = "Algorithms & Logic";
            else if (text === "Outros") tag.textContent = "Others";
            else if (text === "Idiomas") tag.textContent = "Languages";
        } else {
            if (text === "Embedded Systems & Electronics") tag.textContent = "Sistemas Embarcados & Eletrônica";
            else if (text === "Artificial Intelligence") tag.textContent = "Inteligência Artificial";
            else if (text === "Algorithms & Logic") tag.textContent = "Algoritmos & Lógica";
            else if (text === "Languages") tag.textContent = "Idiomas";
            else if (text === "Others") tag.textContent = "Outros";
        }
    });
}

// Injeta o botão de alternância de idioma no nav ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    if (nav) {
        const toggleBtn = document.createElement("a");
        toggleBtn.id = "lang-toggle";
        toggleBtn.href = "#";
        toggleBtn.style.cursor = "pointer";
        toggleBtn.addEventListener("click", (e) => {
            e.preventDefault();
            setLanguage(currentLang === "pt" ? "en" : "pt");
        });
        nav.appendChild(toggleBtn);
    }
    setLanguage(currentLang);
});

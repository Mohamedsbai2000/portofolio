'use strict';

//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function() {elementToggleFunc(sidebar); })

//Activating Modal-testimonial

const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const testimonialsModalFunc = function () {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
}

for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener('click', function () {
        modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
        modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
        modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
        modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

        testimonialsModalFunc();
    })
}

//Activating close button in modal-testimonial

modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

//Activating Filter Select and filtering options

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () {elementToggleFunc(this); });

for(let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
    for(let i = 0; i < filterItems.length; i++) {
        if(selectedValue == "all") {
            filterItems[i].classList.add('active');
        } else if (selectedValue == filterItems[i].dataset.category) {
            filterItems[i].classList.add('active');
        } else {
            filterItems[i].classList.remove('active');
        }
    }
}

//Enabling filter button for larger screens 

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    
    filterBtn[i].addEventListener('click', function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;

    })
}

// Enabling Contact Form

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for(let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if(form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else { 
            formBtn.setAttribute('disabled', '');
        }
    })
}

// Enabling Page Navigation 

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for(let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function() {
        
        for(let i = 0; i < pages.length; i++) {
            if(this.innerHTML.toLowerCase() == pages[i].dataset.page) {
                pages[i].classList.add('active');
                navigationLinks[i].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove('active');
                navigationLinks[i]. classList.remove('active');
            }
        }
    });
}

  const projectItems = document.querySelectorAll(".project-item a");
  const modal = document.getElementById("projectModal");
  const modalCategory = document.getElementById("modalCategory");
  const modalDescription = document.getElementById("modalDescription");
  const modalImage = document.getElementById("modalImage");
  const modalLink = document.getElementById("modalLink"); // 🚨 AJOUT : Lien Code Source
  const closeModal = document.querySelector(".close-modal");

  const projectDescriptions = {
    "Suivi du CA et des Objectifs (Power BI)": "Dashboard de pilotage du chiffre d'affaires face aux objectifs : comparaison avec l'année précédente (A-1), ratio réalisé/objectif (R/O) et écart par mois et par secteur. Il permet de repérer rapidement les écarts et de piloter l'activité commerciale. Réalisé en contexte professionnel, données anonymisées.",

    "Suivi des Flux-Fonds (Power BI)": "Suivi des commandes de fonds par rapport à l'année précédente : delta, ratio R/O, vision par secteur et par éditeur, et évolution mensuelle (courbes et cascade). Réalisé en contexte professionnel, données anonymisées.",

    "Suivi de la Prospection (Power BI)": "Suivi de la couverture des points de vente par campagne et par canal (périmètre commercial, Fnac, Cultura, GSA), avec indicateurs de prospection et de distribution en valeur. Réalisé en contexte professionnel, données anonymisées.",

    "Suivi des Prios (Power BI)": "Suivi des priorités marketing : objectifs, commandes et quantités par titre, taux de prospection et alertes automatiques (campagne en cours, décrochage, dépassement possible). Réalisé en contexte professionnel, données anonymisées.",

    "Suivi des Catalogues (Power BI)": "Suivi de la participation et des commandes par titre et par client, calcul du reste à faire et visualisation géographique des clients. Réalisé en contexte professionnel, données anonymisées.",

    "Amazon Web Scraper Project (Python)": "Développement d'un Web Scraping en Python (BeautifulSoup, Requests) pour extraire en temps réel le titre et le prix d'un produit spécifique sur Amazon. Le projet inclut l'automatisation des requêtes, le stockage historique des données dans un fichier CSV, et peut être étendu pour l'envoi d'alertes par email en cas de baisse de prix.",
    
    "Analyse Comportementale des Souscriptions Bancaires": "Analyse du comportement des clients d'une institution bancaire pour identifier les facteurs influençant la souscription à un produit. Le projet utilise Pandas et Seaborn pour le nettoyage, la transformation des données, et la création de visualisations (heatmap des souscriptions par jour et mois) pour optimiser les futures campagnes marketing.",
    
    "Analyse Détaillée COVID-19 (SQL)": "Exploration et analyse approfondie des données mondiales COVID-19. Utilisation de requêtes SQL complexes (jointures, fonctions d'agrégation, CTEs, vues) pour calculer des indicateurs clés comme le taux de mortalité, le taux d'infection par pays, et le suivi du pourcentage cumulé de la population vaccinée.",
    
    "Corrélation des Facteurs de Succès de Films": "Étude data science utilisant Python (Pandas, Seaborn) pour déterminer les corrélations entre les variables clés (budget, recettes, votes, studio, star) et le succès financier des films. Implique le nettoyage des données et la visualisation des matrices de corrélation (Heatmaps) pour extraire des insights sur l'industrie cinématographique.",
    
    "Nettoyage de Données Immobilières (SQL)": "Projet de Data Cleaning intensif sur un jeu de données de propriétés immobilières (Nashville Housing). Utilisation de SQL Server pour standardiser les formats, gérer les valeurs nulles (populating), décomposer les adresses en colonnes distinctes, uniformiser les champs textuels et identifier/supprimer les lignes dupliquées."
};





  projectItems.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      const project = item.closest(".project-item");
      const title = project.querySelector(".project-title").textContent;
      const category = project.querySelector(".project-category").textContent;
      const imgSrc = project.querySelector("img").src;
      const codeLink = item.href; // Récupère l'URL Github stockée dans le href du <a>
      

      document.getElementById("modalTitle").textContent = title;
      modalCategory.textContent = category;
      modalDescription.textContent = projectDescriptions[title] || "Description non disponible.";
      modalImage.src = imgSrc;
      modalImage.alt = title;
      modalLink.href = codeLink;
      modalLink.style.display = codeLink.endsWith("#") ? "none" : "inline-flex";

      modal.style.display = "block";
    });
  });

  closeModal.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };


// Mode jour / nuit
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const icon = btn.querySelector("ion-icon");
  const apply = (t) => {
    root.setAttribute("data-theme", t);
    icon.setAttribute("name", t === "light" ? "moon-outline" : "sunny-outline");
    try { localStorage.setItem("theme", t); } catch (e) {}
  };
  apply(root.getAttribute("data-theme") || "light");
  btn.addEventListener("click", () => apply(root.getAttribute("data-theme") === "light" ? "dark" : "light"));
})();


// Envoi du formulaire de contact (Web3Forms)
(function () {
  const f = document.querySelector("[data-form]");
  const status = document.getElementById("formStatus");
  const btn = document.querySelector("[data-form-btn]");
  if (!f) return;
  f.addEventListener("submit", async (e) => {
    e.preventDefault();
    btn.setAttribute("disabled", "");
    status.textContent = "Envoi en cours...";
    try {
      const res = await fetch(f.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(f)
      });
      const data = await res.json();
      if (data.success) {
        status.textContent = "";
        f.reset();
        showSuccessPopup();
      } else {
        status.textContent = "Erreur : " + (data.message || "réessayez plus tard.");
        btn.removeAttribute("disabled");
      }
    } catch (err) {
      status.textContent = "Erreur réseau. Écrivez-moi directement par e-mail.";
      btn.removeAttribute("disabled");
    }
  });
})();

// Activation fiable du bouton Envoyer (saisie, remplissage automatique, collage)
(function () {
  const f = document.querySelector("[data-form]");
  const b = document.querySelector("[data-form-btn]");
  if (!f || !b) return;
  const check = () => {
    if (f.checkValidity()) b.removeAttribute("disabled");
    else b.setAttribute("disabled", "");
  };
  ["input", "change", "keyup", "blur"].forEach((ev) => f.addEventListener(ev, check, true));
  setTimeout(check, 500);
})();

// Popup "Message envoyé"
const successPopup = document.getElementById("successPopup");
const successClose = document.getElementById("successClose");
let successTimer;
function showSuccessPopup() {
  successPopup.classList.add("active");
  clearTimeout(successTimer);
  successTimer = setTimeout(hideSuccessPopup, 5000);
}
function hideSuccessPopup() {
  successPopup.classList.remove("active");
  clearTimeout(successTimer);
}
successClose.addEventListener("click", hideSuccessPopup);
successPopup.addEventListener("click", (e) => { if (e.target === successPopup) hideSuccessPopup(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") hideSuccessPopup(); });

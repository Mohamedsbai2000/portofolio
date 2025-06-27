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
  const closeModal = document.querySelector(".close-modal");

  const projectDescriptions = {
  "Gestion de budget": "Application web collaborative de suivi des dépenses personnelles, développée en équipe. Le projet permet aux utilisateurs de créer un budget, d’ajouter des revenus et des dépenses, de catégoriser leurs transactions, et de visualiser des bilans financiers via des tableaux et des graphiques dynamiques. Côté front-end, nous avons utilisé HTML5, CSS3, JavaScript et Chart.js pour l’affichage interactif des données. Côté back-end, nous avons utilisé Firebase pour la gestion des utilisateurs, le stockage en temps réel et l’authentification. En tant que membre actif de l’équipe, j’ai participé à la modélisation des données, à la conception des interfaces (UX/UI), à l’intégration des composants dynamiques, à la gestion des routes, et à l'interfaçage avec la base de données. En gestion de projet, nous avons adopté une méthode agile SCRUM : planification par sprints, gestion du backlog, réunions quotidiennes, répartition claire des rôles, et outils de suivi (Trello, Git). Ce projet m’a permis de développer des compétences solides en : analyse fonctionnelle, conception de base de données, architecture front/back, collaboration en équipe technique, communication, gestion des versions (Git/GitHub), et gestion des délais de production dans un environnement réel.",

  "Site vitrine pour une creche": "Site vitrine responsive conçu en groupe pour une crèche fictive, avec l’objectif de proposer une expérience utilisateur rassurante et professionnelle pour des parents. Le site présente les valeurs pédagogiques de la structure, son équipe, des photos, des témoignages et un formulaire de contact. Côté front-end, nous avons travaillé avec HTML, CSS (avec Flexbox et Grid pour la mise en page), JavaScript pour les interactions (menu, formulaire dynamique), et un travail approfondi sur l’accessibilité et le responsive design. Nous avons aussi intégré les bonnes pratiques SEO (structure sémantique, balises meta, performance de chargement). J’ai contribué au développement de plusieurs sections du site, à la validation W3C, et à l’intégration de composants graphiques. Côté gestion de projet, nous avons organisé le travail par livrables, rédigé un cahier des charges, réalisé des maquettes (Figma), et assuré un suivi régulier de l’avancement. J’ai également joué un rôle de coordinateur technique : organisation des tâches, contrôle qualité, communication avec les autres pôles (contenu, design). Ce projet m’a permis d'approfondir mes compétences en : design UX, intégration responsive, travail d’équipe pluridisciplinaire, planification, et conduite de projet collaboratif avec des outils professionnels (Git, Figma, Google Drive, Trello).",

  "Site Web professionnel": "Site web réalisé pour un client réel dans le domaine du développement informatique. Il s’agissait de concevoir une landing page professionnelle mettant en avant son profil technique, ses projets, ses services, son portfolio, et ses coordonnées. Ce projet a exigé un haut niveau de rigueur tant sur le plan du code que de l’image de marque. J’ai géré l’ensemble du projet de manière autonome : recueil des besoins client, définition des objectifs du site, rédaction des spécifications, création des maquettes (Figma), choix de la typographie, des couleurs et du style graphique. Le front-end a été développé en HTML5, CSS3 (avec Tailwind CSS), JavaScript natif (et animations), avec une attention particulière portée au responsive, à l’accessibilité, à la compatibilité cross-navigateur, et à l’optimisation SEO. Le site a été déployé en ligne avec nom de domaine et configuration du serveur. J’ai également assuré le suivi post-livraison, avec des tests utilisateurs et des ajustements techniques. Ce projet m’a permis de démontrer des compétences complètes en : relation client, conception d’interfaces modernes, intégration web professionnelle, optimisation technique (performance, SEO), gestion du temps et des priorités, déploiement et maintenance, tout en répondant aux attentes d’un professionnel du secteur."
};





  projectItems.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      const project = item.closest(".project-item");
      const title = project.querySelector(".project-title").textContent;
      const category = project.querySelector(".project-category").textContent;
      const imgSrc = project.querySelector("img").src;

      modalTitle.textContent = title;
      modalCategory.textContent = category;
      modalDescription.textContent = projectDescriptions[title] || "Description non disponible.";
      modalImage.src = imgSrc;
      modalImage.alt = title;

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

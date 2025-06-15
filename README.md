# 🧪 Cypress E2E Tests – Practice Test Automation

Projet d’automatisation de tests end-to-end avec [Cypress](https://www.cypress.io/).  
Il s’appuie sur le site [https://practicetestautomation.com](https://practicetestautomation.com).

![Cypress Tests](https://github.com/tatou23/cypress-tests-e2e/actions/workflows/cypress.yml/badge.svg)

---

## ✨ Objectifs pédagogiques

- Automatiser des scénarios utilisateur simples (login réussi et échoué)
- Utiliser les fixtures pour injecter des données
- Créer des commandes personnalisées (`cy.login`)
- Générer un rapport HTML avec `cypress-mochawesome-reporter`
- Mettre en place un pipeline CI avec GitHub Actions

---

## 🧰 Technologies utilisées

- Cypress
- Node.js
- JavaScript
- Git / GitHub
- GitHub Actions
- mochawesome

---

## 🧪 Scénarios testés

| Nom du test               | Objectif                                       |
|--------------------------|------------------------------------------------|
| ✅ Login réussi           | Valider l'accès avec des identifiants valides |
| ❌ Login échoué           | Vérifier le message d’erreur                   |
| 🧩 Commande `cy.login()`  | Réutilisation du parcours de connexion        |

---

## 📊 Rapport de test Cypress

> Un rapport HTML est généré à chaque exécution locale des tests :
Rapport généré : cypress/reports/html/index.html

## 👩‍💻 À propos

Je suis une testeuse QA fonctionnelle en reconversion vers l’automatisation.  
Ce projet fait partie de ma montée en compétences sur Cypress.  
Il montre que je suis capable de :

- Écrire des tests lisibles et robustes
- Organiser un projet de test moderne
- Mettre en place une CI/CD avec GitHub Actions
- Générer des rapports professionnels

📫 Pour me contacter : https://www.linkedin.com/in/coulibaly-assetou


```bash
npx cypress run

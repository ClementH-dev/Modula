# Modula — Socle applicatif backend

## 🎯 Objectif

Modula est un **socle backend réutilisable**, conçu pour servir de base à plusieurs projets
(clients, produits internes, SaaS), sans repartir de zéro à chaque fois.

Chaque nouveau projet est créé à partir d’un **fork du repository**, avec :
- sa propre base de données
- ses propres variables d’environnement
- son propre périmètre métier

Le cœur applicatif reste commun et maîtrisé.

---

## 🧠 Philosophie

Modula repose sur quelques principes simples :

- **Un cœur stable**  
  Le socle ne change que rarement.  
  Les besoins spécifiques sont ajoutés sous forme de modules.

- **Fork plutôt que copier/coller**  
  Chaque projet est un espace isolé, mais basé sur la même architecture.

- **Lisibilité avant complexité**  
  Pas de magie, pas de sur‑abstraction inutile.  
  Chaque choix doit être compréhensible.

- **Écoconception et performance**
  Projet à but écoresponsable.

- **Performance et accessibilité**
  Optimisé pour connexions lentes et machines peu puissantes 
  Faible usage des ressources, transferts réseau limités et comportements dégradés gracieux.
  
---

## 🧱 Ce que Modula fournit

Dans sa version minimale, Modula inclut :

- une API Node.js / TypeScript
- un front-end en SvelteKit
- un point d’entrée unique
- une architecture prête pour :
  - authentification JWT + refresh
  - gestion des utilisateurs professionnels
  - rôles et permissions
  - logs applicatifs
- une base de données isolée par projet
- une documentation versionnée

---

## 📦 Architecture
```
modula/
├── apps/
│   ├── api/          # Backend Node.js
│   └── web/          # Front-end SvelteKit
├── docs/             # Documentation versionnée
├── .gitignore
```

---

## 🔁 Cycle de vie d’un projet

1. Fork du repository Modula
2. Configuration des variables d’environnement
3. Création d’une base de données dédiée
4. Initialisation du premier utilisateur admin
5. Développement des modules métier
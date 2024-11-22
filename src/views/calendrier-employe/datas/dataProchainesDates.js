import React, { useState } from 'react'

export default function DataProchainesDates() {

    // Crée un tableau pour stocker les 7 prochaines dates avec les informations demandées
    const prochainesDates = [];

    // Crée un objet Date pour la date actuelle
    const aujourdHui = new Date();

    // Tableau des jours de la semaine (en français)
    const joursDeLaSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    // Tableau des mois (en français)
    const moisDeLAnnee = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    // Remplir le tableau avec les 7 prochaines dates
    for (let i = 0; i < 7; i++) {
        const prochaineDate = new Date(aujourdHui); // Crée une copie de la date actuelle
        prochaineDate.setDate(aujourdHui.getDate() + i); // Ajoute i jours à la date actuelle

        // Récupère les informations demandées
        const jourDeLaSemaine = joursDeLaSemaine[prochaineDate.getDay()];
        const jourDansLeMois = prochaineDate.getDate();
        const mois = moisDeLAnnee[prochaineDate.getMonth()];
        const annee = prochaineDate.getFullYear();

        // Formater la date au format YYYY-MM-DD
        const dateComplete = prochaineDate.toISOString().split('T')[0]; // Format YYYY-MM-DD

        // Ajoute l'objet avec les informations au tableau
        prochainesDates.push({
            jourDeLaSemaine,
            jourDansLeMois,
            mois,
            annee,
            dateComplete, // Ajoute la date complète au format YYYY-MM-DD
        });
    }

    function chargerJoursSuivants(prochainesDates) {

        // Tableau des jours de la semaine (en français)
        const joursDeLaSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

        // Tableau des mois (en français)
        const moisDeLAnnee = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

        // Trouve la dernière date actuelle dans le tableau
        const derniereDate = new Date(prochainesDates[prochainesDates.length - 1].dateComplete);

        // Charger les 7 prochains jours après la dernière date
        const nouvellesDates = [];
        for (let i = 1; i <= 7; i++) {
            const prochaineDate = new Date(derniereDate);
            prochaineDate.setDate(derniereDate.getDate() + i);

            // Récupère les informations demandées
            const jourDeLaSemaine = joursDeLaSemaine[prochaineDate.getDay()];
            const jourDansLeMois = prochaineDate.getDate();
            const mois = moisDeLAnnee[prochaineDate.getMonth()];
            const annee = prochaineDate.getFullYear();
            const dateComplete = prochaineDate.toISOString().split('T')[0]; // Format YYYY-MM-DD

            nouvellesDates.push({
                jourDeLaSemaine,
                jourDansLeMois,
                mois,
                annee,
                dateComplete,
            });
        }

        return nouvellesDates

    }

    function chargerJoursPrecedents(prochainesDates) {
        // Vérifie si le tableau est vide
        if (prochainesDates.length === 0) {
            throw new Error("Le tableau 'prochainesDates' est vide. Impossible de récupérer les jours précédents.");
        }

        // Tableau des jours de la semaine (en français)
        const joursDeLaSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

        // Tableau des mois (en français)
        const moisDeLAnnee = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

        // Trouve la première date actuelle dans le tableau
        const premiereDate = new Date(prochainesDates[0].dateComplete);

        // Charger les 7 jours précédents avant la première date
        const nouvellesDates = [];
        for (let i = 1; i <= 7; i++) {
            const datePrecedente = new Date(premiereDate);
            datePrecedente.setDate(premiereDate.getDate() - i);

            // Récupère les informations demandées
            const jourDeLaSemaine = joursDeLaSemaine[datePrecedente.getDay()];
            const jourDansLeMois = datePrecedente.getDate();
            const mois = moisDeLAnnee[datePrecedente.getMonth()];
            const annee = datePrecedente.getFullYear();
            const dateComplete = datePrecedente.toISOString().split('T')[0]; // Format YYYY-MM-DD

            nouvellesDates.unshift({ // Ajoute les dates en début de tableau pour conserver l'ordre chronologique
                jourDeLaSemaine,
                jourDansLeMois,
                mois,
                annee,
                dateComplete,
            });
        }

        return nouvellesDates;
    }


    function chargerJoursDuMois(indexMois) {
        // Vérifie si l'index est valide
        if (indexMois < 0 || indexMois > 11) {
            throw new Error('Index du mois invalide. Il doit être compris entre 0 et 11.');
        }

        const nouvellesDates = [];
        const anneeActuelle = aujourdHui.getFullYear();

        // Date pour le premier jour du mois donné
        const premiereDateDuMois = new Date(anneeActuelle, indexMois, 1);

        // Ajoute les 7 premiers jours de ce mois
        for (let i = 0; i < 7; i++) {
            const prochaineDate = new Date(premiereDateDuMois);
            prochaineDate.setDate(premiereDateDuMois.getDate() + i);

            const jourDeLaSemaine = joursDeLaSemaine[prochaineDate.getDay()];
            const jourDansLeMois = prochaineDate.getDate();
            const mois = moisDeLAnnee[prochaineDate.getMonth()];
            const annee = prochaineDate.getFullYear();
            const dateComplete = prochaineDate.toISOString().split('T')[0]; // Format YYYY-MM-DD

            nouvellesDates.push({
                jourDeLaSemaine,
                jourDansLeMois,
                mois,
                annee,
                dateComplete,
            });
        }

        return nouvellesDates;

    }

    return { prochainesDates, chargerJoursSuivants,chargerJoursPrecedents, chargerJoursDuMois };
}


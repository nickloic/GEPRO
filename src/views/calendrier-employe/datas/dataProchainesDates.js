import React from 'react'

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


  return prochainesDates
}

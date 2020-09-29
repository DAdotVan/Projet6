// @ts-nocheck

/**
 * @class
 * gère le gameplay du jeu
 */
class Jeu {
    constructor(nbColonnes, nbRangees, nbObstacles, nbArmes, nbJoueurs) {
        console.clear();
        this.carte          = {};
        window.jeu          = this;
        this.nbColonnes     = nbColonnes;
        this.nbRangees      = nbRangees;
        this.nbObstacles    = nbObstacles;
        this.nbArmes        = nbArmes;
        this.nbJoueurs      = nbJoueurs;
        this.cases          = {};
        this.joueurs        = [];
        this.genereJeu();
        this.genereObstacles(nbObstacles);
        this.genereJoueurs(nbJoueurs);
        this.genereArmes(nbArmes);
    } 

    /**
     * [caseName description]
     *
     * @param   {string}  idColonne  [idColonne description]
     * @param   {number}  idRangee   [idRangee description]
     *
     * @return  {string}             cases formées par les rangées et les colonnes
     */
    caseName(idColonne, idRangee) {
        const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        for (let idRangee = 0; idRangee < 10; idRangee++); {
        }
        return alpha [idColonne] + idRangee;
    }

    /**
     * [genereJeu description]
     *
     * @return  {string}  plateau de jeu
     */
    genereJeu() {
        let idCase;
        for (let col = 0; col < this.nbColonnes; col++) {
            for (let row = 0; row < this.nbRangees; row++) {
                idCase = this.caseName(col, row);
                new Case(idCase, col, row, document.querySelector("plateau"));
            }
        }
    }

    /**
     * [genereObstacles description]
     *
     * @param   {number}  qteObstacles  [qteObstacles description]
     *
     * @return  {string}                obstacle sur une case au hasard
     */
    genereObstacles(qteObstacles){
        for (qteObstacles; qteObstacles >  0; qteObstacles--){
          if (! this.cases[this.randomCase].majObstacles()) qteObstacles++;
        }
    }
    /**
     * permet de positionner les joueurs selon les cases dispos
     *
     * @param   {number}  qteJoueurs  quantité de joueurs à positionner
     *
     * @return  {void}
     */
    genereJoueurs(qteJoueurs){
        let idCase = null;
        let listeCasesAccessibles = [];
        let error = false;
        for (let i=0; i< qteJoueurs; i++){
            error = false;
            idCase = this.randomCase;
            listeCasesAccessibles = this.casePossible(idCase, 1, true);
            console.log("liste joueurs", listeCasesAccessibles);
            for( let i=0, size=listeCasesAccessibles.length; i<size; i++){
                if (!this.cases[listeCasesAccessibles[i]].obstacles || this.cases[listeCasesAccessibles[i]].joueurs !== null) error = false; 
            }
            if (!this.cases[idCase].majJoueurs(i) || error) i--;
            else new Joueur(i, idCase, donneesArmes[0]);
        }
    }    

    /**
     * permet de selectionner une case au hasard
     *
     * @return  {string}  case au hasard
     */
    get randomCase(){
        return this.caseName(this.randomNumber(this.nbColonnes), this.randomNumber(this.nbRangees));
    }  
    
    /**
     * permet de calculer aléatoirement
     *
     * @param   {number}  max  [max description]
     *
     * @return  {number}   chiffre au hasard
     */
    randomNumber(max){
        return Math.floor(Math.random()*max);
    }

    /**
     * permet de savoir quelles sont les cases adjancentes 
     * 
     * @param {number} decalage  profondeur par exemple 1 pour le placement des joueurs pour savoir si il y a un autre joueur sur une case adjacente ou 3 pour un déplacement conventionnel
     * @param {string} depart    id de la case du joueur
     * @param {boolean} tableau  permet de retourner un tableau au lieu d'un objet
     * 
     * @returns {object|array}   liste des cases accessibles
     */
    casePossible(depart, decalage, tableau=false){
        const departColonne = this.cases[depart].colonne;
        const departRangee  = this.cases[depart].rangee;
        let retour = {
            bas   : [],
            droite: [],
            gauche: [],
            haut  : []
        };
        if (tableau) retour = [];
        let caseCible;
        for (let i = 1; i <= decalage; i++) {
            caseCible = this.caseName(departColonne, departRangee-i);
            if (this.cases[caseCible] !== undefined) tableau ? retour.push(caseCible) : retour.gauche.push(caseCible);
            caseCible = this.caseName(departColonne, departRangee+i);
            if (this.cases[caseCible] !== undefined) tableau ? retour.push(caseCible) : retour.droite.push(caseCible);
            caseCible = this.caseName(departColonne-i, departRangee);
            if (this.cases[caseCible] !== undefined) tableau ? retour.push(caseCible) : retour.haut.push(caseCible);
            caseCible = this.caseName(departColonne+i, departRangee);
            if (this.cases[caseCible] !== undefined) tableau ? retour.push(caseCible) : retour.bas.push(caseCible);
        }
        return retour;
    }

    /**
     * [listeJoueurs description]
     *
     * @return  {string}  retourne un joueur
     */
    listeJoueurs() {
        let autre;
        let index;
        let listeJoueurs = this.list.length;
        // un element dans le tableau
        while (listeJoueurs > 0) {
          // au hasard
          index = Math.floor(Math.random() * listeJoueurs);
          // diminue listJoueur de 1
          listeJoueurs--;
          // change avec le dernier element
          autre = this.list[listeJoueurs];
          this.list[listeJoueurs] = this.list[index];
          this.list[index] = autre;
          }
        return this.list;
      }


     /**
     * 
     * place les armes sur le plateau
     *
     * @return  {void}
     */
    genereArmes(qteArmes) {
        let arme;
        // on commence à 1 car l'arme 0 c'est l'arme par défaut des joueurs
        for (let i = 1; i < qteArmes; i++){
            console.log("genereArmes",qteArmes, i)
            arme = donneesArmes[i];
            if (! this.cases[this.randomCase].majArmes(arme)) i--;
            else  document.documentElement.style.setProperty(`--${arme.nomArme}Image`, ` center / contain no-repeat url("../img/${nomArme}.png") yellow`);
        }
    }
}
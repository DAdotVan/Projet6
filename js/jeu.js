// @ts-nocheck

/**
 * [Jeu description]
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
        this.casePossible();
        this.genereJeu();
        this.genereObstacles(nbObstacles);
        this.genereJoueurs(nbJoueurs);
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
        const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
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
          if (! jeu[this.randomCase].majObstacles()) qteObstacles++;
        }
    }
    /**
     * [genereJoueurs description]
     *
     * @param   {number}  qteJoueurs  [qteJoueurs description]
     *
     * @return  {string}              joueur sur une case au hasard
     */
    genereJoueurs(qteJoueurs){
        let idCase = null;
        let listeJoueurs = [];
        let error = false;
        for (qteJoueurs; qteJoueurs > 0; qteJoueurs--){
            error = false;
            idCase = this.randomCase;
            listeJoueurs = this.casePossible(idCase,1);
            for( let i=0, size=listeJoueurs.length; i<size; i++){
                if (! jeu[listeJoueurs[i]].obstacle || jeu[listeJoueurs[i]].joueurs !== null) error = true;
            }
          if (! jeu[idCase].majJoueurs(qteJoueurs) || error) qteJoueurs++;
          console.log(qteJoueurs, idCase);
        }
    }    

    /**
     * [randomCase description]
     *
     * @return  {string}  case au hasard
     */
    get randomCase(){
        return this.caseName(this.randomNumber(this.nbColonnes), this.randomNumber(this.nbRangees));
    }  
    
    /**
     * [randomNumber description]
     *
     * @param   {number}  max  [max description]
     *
     * @return  {number}   chiffre au hasard
     */
    randomNumber(max){
        return Math.floor(Math.random()*max);
    }

    /**
     * 
     * @param {number} decalage 
     * @param {string} depart
     * 
     * @returns {array}   liste des cases accessibles
     */
    casePossible(depart, decalage){
        depart = idCase.joueurs;
        for (i = 0; i < decalage; i++) {
            }
        }
    }

    /**
     * [listeJoueurs description]
     *
     * @return  {string}  retourne un joueur
     */
    listeJoueurs() {
        let listeJoueurs = this.list.length;
        let autre;
        let index;
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



}
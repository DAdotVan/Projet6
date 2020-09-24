class Case extends Composant {
    constructor(id, colonne, rangee, domTarget) {
        super(id,domTarget, "case");        
        this.DOM.innerText = id;
        this.colonne = colonne;
        this.rangee = rangee;
        this.obstacles = false;
        this.joueurs = null;
        this.arme = null;
        this.casePossible = null;
        window.jeu.cases[id] = this;
    }

    majObstacles() {
        if (this.obstacles) return false;
        this.obstacles = true;
        this.render();
        return true;
    }

    majJoueurs(id) {
        if (this.joueurs !== null || this.obstacles) return false;
        this.joueurs = id;
        this.render();
        return true;
    }

    majArmes(arme) {
      if (this.arme !== null || this.obstacles || this.joueurs) return false;
      this.arme = arme;
      this.render();
      return true;
    }

    majCasePossible() {
        if (this.joueurs !== null || this.obstacles) return false;
        this.casePossible = true;
        this.render();
        return true;
    }

    render() {
        if (this.obstacles) return this.DOM.className = "obstacle";
        if (this.arme) this.DOM.className = this.arme.nomArme;
        if (this.joueurs !== null) return this.DOM.className = "joueur" + this.joueurs;
        if (this.casePossible !== null) return this.DOM.className += " casePossible";
    }
}













/*
class Composant{
    constructor(name, domTarget, tagName){
      this.name = name;
      this.DOM = document.createElement(tagName);
      domTarget.appendChild(this.DOM);
      window.jeu[this.name] = this;
    }
  }
*/

/*
  class joueur{
    constructor(domTarget, id, nom, point){
      this.DOM = document.createElement(class);
      domTarget.appendChild("joueur");
      window.jeu[this.name] = this;  
      this.id = id;    
      this.nom = nom;
      this.point = point;
    }
  }
*/
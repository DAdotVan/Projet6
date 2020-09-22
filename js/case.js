class Case {
    constructor(id, colonne, rangee, domTarget) {
        this.DOM             = document.createElement("case");
        this.DOM.innerText   = id;
        this.colonne         = colonne;
        this.rangee          = rangee;
        this.obstacles       = false;
        this.joueurs         = null;
        this.casePossible    = null;
        window.jeu.cases[id] = this;
        domTarget.appendChild(this.DOM);
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

    majCasePossible() {
        if (this.casePossible !== null) return false;
        this.casePossible = true;
        this.render();
        return true;
    }

    render() {
        if (this.obstacles) return this.DOM.className = "obstacle";
        if (this.joueurs !== null) return this.DOM.className = "joueur";
        if (this.casePossible !== null) return this.DOM.className = "casePossible";
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
class Case {
    constructor(id, colonnes, rangees, domTarget) {
        this.DOM            = document.createElement("case");
        this.DOM.innerText  = id;
        this.colonnes       = colonnes;
        this.rangees        = rangees;
        this.obstacles      = false;
        this.joueurs        = null;
        this.casePossible   = null;
        window.jeu[id]      = this;
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

    majCasePossible(col, row) {
        if (this.casePossible !== null) return false;
        this.casePossibleCol = col;
        this.casePossibleRow = row;
        this.casePossible(idCase, 2);
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
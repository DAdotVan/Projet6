class Case extends Composant {
  constructor(id, colonne, rangee, domTarget) {
    super(id, domTarget, "case");
    this.DOM.innerText = id;
    this.colonne = colonne;
    this.rangee = rangee;
    this.obstacles = false;
    this.joueur = null;
    this.arme = null;
    this.casePossible = false;
    window.jeu.cases[id] = this;
  }

  majObstacles() {
    if (this.obstacles) return false;
    this.obstacles = true;
    this.render();
    return true;
  }

  majJoueur(id) {
    if (this.joueur !== null || this.obstacles || this.arme) return false;
    this.joueur = id;
    this.render();
    return true;
  }

  majArmes(arme) {
    if (this.arme !== null || this.obstacles || this.joueur) return false;
    this.arme = arme;
    this.render();
    return true;
  }

  majCasePossible() {
    if (this.joueur !== null || this.obstacles) return false;
    this.casePossible = true;
    this.render();
    return true;
  }

  render() {
    this.DOM.style.backgroundImage = "";
    this.DOM.onclick = null;
    this.DOM.classList = [];
    if (this.obstacles) return this.DOM.className = "obstacle";
    if (this.arme) {
      this.DOM.className = "arme";
      this.DOM.style.backgroundImage = `url(img/${this.arme.image})`;
    }
    if (this.joueur !== null) return this.DOM.className = "joueur" + this.joueur;
    if (this.casePossible) {
      this.DOM.className += " casePossible";
      this.DOM.onclick = this.click.bind(this);
    }
  }
  click(){
    const joueurActuel = jeu.joueurActuel;
    jeu.joueurs[joueurActuel].seDeplace(this.nom);
    this.joueur = joueurActuel;
    this.render();
  }

  echangeArme(armeJoueur){
    if (this.arme === null) return null;
    const armeSurLaCase = this.arme;
    this.arme = armeJoueur;
    return armeSurLaCase;
  }

  maj(property, value){
    this[property] = value;
    console.log(this);
    this.render();
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
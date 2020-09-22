class Composant{
  constructor(name, domTarget, tagName){
    this.nom = name;
    this.DOM = document.createElement(tagName);
    domTarget.appendChild(this.DOM);
  }
}
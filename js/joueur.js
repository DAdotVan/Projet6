// @ts-nocheck

class Joueur extends Composant{
  constructor(id, position){
    console.log("id",id)
    super(donneesJoueurs[id].nomJoueur,document.body,"joueur")
    this.id = id;
    this.points = 100;
    this.position = position;
    document.documentElement.style.setProperty(`--joueur${this.id}Image`, ` center / contain no-repeat url("../img/${this.nom}.png") yellow`);
    jeu.joueurs.push(this);
    this.render();
  }


  render(){
    this.DOM.innerHTML = `
    <h2>${this.nom}</h2>
    Points de vie : ${this.points}
    `
  }
}
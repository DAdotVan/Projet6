// @ts-nocheck

class Joueur extends Composant{
  constructor(id, position, arme){
    console.log("id",id)
    super(donneesJoueurs[id].nomJoueur,document.body,"joueur");
    this.arme = arme;
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
    <ligne>Points de vie : ${this.points}</ligne>
    <ligne>${this.arme.nomArme}</ligne>
    <ligne>Dégats : ${this.arme.dommages}</ligne>
    `
  }
}
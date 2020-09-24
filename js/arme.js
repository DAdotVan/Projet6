var donneesArmes = [
  {
    arme: "arme1",
    dommages: 10
  },
  {
    arme: "arme2",
    dommages: 20
  },
  {
    arme: "arme3",
    dommages: 30
  },	
  {
    arme: "arme4",
    dommages: 40
  },	
  {
    arme: "arme5",
    dommages: 50
  }
];


// @ts-nocheck

class Arme extends Composant{
  constructor(arme, dommages){
    console.log("armes", dommages)
    super(donneesArmes[arme].nomArme,document.body,"armes")
    this.arme = arme;
    this.dommmages = dommages;
    document.documentElement.style.setProperty(`--arme${this.arme}Image`, ` center / contain no-repeat url("../img/${this.arme}.png") red`);
    jeu.armes.push(this);
    this.render();
  }


  render(){
    this.DOM.innerHTML = `
    <h2>${this.arme}</h2>
    Dommages : - ${this.dommages}
    `
  }
}
// @ts-nocheck

class Joueur extends Composant{
  constructor(id, position, arme){
    console.log("id",id)
    super(donneesJoueurs[id].nomJoueur,document.body,"joueur");
    this.arme = arme;
    this.id = id;
    this.points = 100;
    this.position = position;
    this.deplacements;
    document.documentElement.style.setProperty(`--joueur${this.id}Image`, ` center / contain no-repeat url("../img/${this.nom}.png")`);
    jeu.joueurs.push(this);
    this.render();
  }


  render(){
    this.DOM.innerHTML = `
    <h2>${this.nom}</h2>
    <ligne>Points de vie : ${this.points}</ligne>
    <ligne>${this.arme.nomArme}</ligne>
    <ligne>Dégats : ${this.arme.dommages}</ligne>
    `;
  }

  joue(){
    this.deplacements = jeu.casePossible(this.position,3,false);
    this.afficheMouvements("bas");
    this.afficheMouvements("droite");
    this.afficheMouvements("gauche");
    this.afficheMouvements("haut");
  }

  /**
   * [afficheMouvements description]
   *
   * @param   {string}  direction  bas ou droite ou gauche ou haut
   *
   * @return  {void}
   */
  afficheMouvements(direction){
    for (let i=0, casesPossibles= this.deplacements[direction].length; i<casesPossibles; i++){
      if(! jeu.cases[this.deplacements[direction][i]].majCasePossible()) return;
    }
  }

  masqueMouvements(direction){
    for (let i=0, casesPossibles= this.deplacements[direction].length; i<casesPossibles; i++){
      jeu.cases[this.deplacements[direction][i]].majCasePossible(false);
    }
  }

  seDeplace(idCase){
    console.log(idCase);
    this.position = idCase;
    this.masqueMouvements("bas");
    this.masqueMouvements("droite");
    this.masqueMouvements("gauche");
    this.masqueMouvements("haut");
    
    const nouvelleArme = jeu.cases[idCase].echangeArme(this.arme);
    if (nouvelleArme !== null) this.arme = nouvelleArme;
  }
}
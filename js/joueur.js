// @ts-nocheck

const joueurs = {
  list : [
    {
      id: 0,
      image: url("../img/macron.png"),
      nom: macron,
      dommage: 10
    },
    {
      id: 1,
      image: url("../img/trump.png"),
      nom: trump,
      dommage: 20
    },
    {
      id: 2,
      image: url("../img/merkel.png"),
      nom: merkel,
      dommage: 30
    },	
    {
      id: 3,
      image: url("../img/poutine.png"),
      nom: poutine,
      dommage: 40
    },	
    {
      id: 4,
      image: url("../img/jinping.png"),
      nom: jinping,
      dommage: 50
    }
  ]
};

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

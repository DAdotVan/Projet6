var donneesJoueurs = [
    {
      nomJoueur: "Macron",
      pointJoueur: null
    },
    {
      nomJoueur: "Merkel",
      pointJoueur: null
    },
    {
      nomJoueur: "Trump",
      pointJoueur: null
    },	
    {
      nomJoueur: "Jinping",
      pointJoueur: null
    },	
    {
      nomJoueur: "Poutine",
      pointJoueur: null
    }
  ];

  var donneesArmes = [
    {
      nomArme: "Poisson mort", //arme par défaut
      dommages: 10,
      image : "poissonmort.png"
    },
    {
      nomArme: "Lance-pierre",
      dommages: 20,
      image : "lancepierre.png"
    },	
    {
      nomArme: "Arc",
      dommages: 30,
      image : "arc.png"
    },	
    {
      nomArme: "Laser",
      dommages: 40,
      image : "laser.png"
    }
  ];



new Jeu (10, 10, 5, 4, 2);
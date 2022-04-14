window.onload = function() {
	var canvas = document.getElementById('canvas');
	var zone = new Array();
	var messageJoueurActuel = document.getElementById('joueur-actuel');
	var messageErreur = document.getElementById('erreur-message');
	var joueurTour = 1;
	var win = 0;

	for (var i = 0; i < 3; i++) {
		zone[i] = new Array();	
	}

	// Créer de la map
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			zone[i][j] = document.createElement('div');
			zone[i][j].className = 'case';
		}
	}

	// Afficher la map dans son conteneur

	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			canvas.appendChild(zone[i][j]);
		}
	}

	// zone[0][2].innerHTML = '*';
	// zone[1][1].innerHTML = '*';
	// zone[2][0].innerHTML = '*';

	// Event au click
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			zone[i][j].addEventListener('click', function(){
				// A qui est le tour
				if (joueurTour == 1 && this.innerHTML === '') {
					this.innerHTML = 'X';
					changementAuTour();
					conditionWin(zone);
				}
				else if (joueurTour == 2 && this.innerHTML === '') {
					this.innerHTML = 'O';
					changementAuTour();
					conditionWin(zone);
				}
				else {
					messageErreur.innerHTML = 'Cette case est utilisée par un autre joueur';
				}

				console.log(this);
			});
		}
	}

	function changementAuTour() {
		// Attribution du tour
		if (joueurTour == 1) {
			joueurTour = 2;
			messageJoueurActuel.innerHTML = 'Tour : Joueur 2'
		}
		else {
			joueurTour = 1
			messageJoueurActuel.innerHTML = 'Tour : Joueur 1'
		}

		messageErreur.innerHTML = 	'';
	}

	// Test des conditions de victoire
	function conditionWin() {

		for (i = 0; i < 3; i ++) {
			for (j = 0; j < 3; j ++) {
				// console.log(zone[i][j]);
			}
		}

		// Test en ligne
		if	(	zone[0][0].innerHTML != '' &&
				zone[0][0].innerHTML == zone[0][1].innerHTML &&
				zone[0][1].innerHTML == zone[0][2].innerHTML
			)
		{
			afficherVictoire();
		}
		else if ( zone[1][0].innerHTML != '' &&
				zone[1][0].innerHTML == zone[1][1].innerHTML &&
				zone[1][1].innerHTML == zone[1][2].innerHTML

			)
		{
			afficherVictoire();
		}
		else if ( zone[2][0].innerHTML != '' &&
				zone[2][0].innerHTML == zone[2][1].innerHTML &&
				zone[2][1].innerHTML == zone[2][2].innerHTML

			)
		{
			afficherVictoire();
		}
		// Test en colone
		else if ( zone[0][0].innerHTML != '' &&
				zone[0][0].innerHTML == zone[1][0].innerHTML &&
				zone[1][0].innerHTML == zone[2][0].innerHTML
			)
		{
			afficherVictoire();
		}
		else if ( zone[0][1].innerHTML != '' &&
				zone[0][1].innerHTML == zone[1][1].innerHTML &&
				zone[1][1].innerHTML == zone[2][1].innerHTML
			)
		{
			afficherVictoire();
		}
		else if ( zone[0][2].innerHTML != '' &&
				zone[0][2].innerHTML == zone[1][2].innerHTML &&
				zone[1][2].innerHTML == zone[2][2].innerHTML
			)
		{
			afficherVictoire();
		}
		// Test en diagonale
		else if ( zone[0][0].innerHTML != '' &&
				zone[0][0].innerHTML == zone[1][1].innerHTML &&
				zone[1][1].innerHTML == zone[2][2].innerHTML
			)
		{
			afficherVictoire();
		}
		else if ( zone[0][2].innerHTML != '' &&
				zone[0][2].innerHTML == zone[1][1].innerHTML &&
				zone[1][1].innerHTML == zone[2][0].innerHTML
			)
		{
			afficherVictoire();
		}
		// Test égalité
		else {
			for (var i = 0; i < 3; i++) {
				for (var j = 0; j < 3; j++) {
					zone[i][j].innerHTML == 'X' ;
				}
			}
		}
	}

	function afficherVictoire() {
		changementAuTour();
		messageErreur.innerHTML = 'Victoire du joueur ' + joueurTour;
	}
}








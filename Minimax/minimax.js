let vector_utilitate = {
	X: 1, O : -1, remiza: 0
};
function mutare() {

	let bestScor = -Infinity;
	var move;
	for (let i = 0; i < 3; i++)
	{
		for (let j = 0; j < 3; j++) {
			// putem face o miscare doar daca locul este gol
			if (tabla[i][j] == '') {
				tabla[i][j] = mutare_max;
				// primul argument reprezinta tabla de joc
				// al doilea argument reprezinta adancimea
				// al treilea este un bool care arata randul fiecarui jucator
				let scor = minimax(tabla, 0, false);
				// trebuie sa "golim" locul in matrice ca sa gasim alta mutare care ar putea fi mai buna
				
				tabla[i][j] = '';
				if (scor > bestScor) {
					bestScor = scor;
					move = {i, j};
				}
			}
		}
	}
	
	// abia dupa ce ama gasit cea mai buna mutare putem sa o adaugam in matrice
	
	tabla[move.i][move.j] = mutare_max;
	rand_mutare = gigi;
}



function minimax(tabla, depth, isMaximizing) {
	// verific daca a castigar cineva
	let result = verif_castigator();
		if (result !== null) 
			{
			return vector_utilitate[result];}
		
	

	// daca este randul lui MAX
	if (isMaximizing){
		let bestScor = -Infinity;
		for (let i = 0; i < 3; i++) {
			for(let j = 0; j < 3; j++) {
				// daca locul este liber
				if(tabla[i][j] == '') {
					tabla[i][j] = mutare_max;
					let scor = minimax(tabla, depth + 1, false);
					tabla[i][j] = '';
					bestScor = max(scor, bestScor);
				}
			}
		}
		
		return bestScor;
	}
	else
	{
		let bestScor = Infinity;
		for (let i = 0; i < 3; i++) {
			for(let j = 0; j < 3; j++) {
				// daca locul este liber
				if(tabla[i][j] == '') {
					tabla[i][j] = gigi;
					let scor = minimax(tabla, depth + 1, true);
					tabla[i][j] = '';
					bestScor = min(scor, bestScor);
				}
			}
		}
		
		

		return bestScor;
	}

}




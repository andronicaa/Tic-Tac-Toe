// tabla de joc
let tabla = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];


let mutare_max = 'X';
let gigi = 'O';
let inaltime, latime;
// prima mutare se face default din X(jucatorul MAX) => urmatorul jucator va fi MIN adica omul
let rand_mutare = gigi;

function setup() {
    
    createCanvas(400, 400);
    inaltime = height / 3;
    latime = width / 3;
    mutare();
    
    
}

function verif_castigator() {
    let castigator = null,  gol = 0;

    // daca s-a facut linie pe orizontala
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 3; j++) {
            if(tabla[i][0] == tabla[i][1] && tabla[i][1] == tabla[i][2] && tabla[i][0] != '')
                castigator = tabla[i][0]
        }
    
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 3; j++) {
            if(tabla[0][i] == tabla[1][i] && tabla[2][i] == tabla[1][i] && tabla[0][i] != '')
                castigator = tabla[0][i]
        }
    // diagonala principala
    if (tabla[0][0] == tabla[1][1] && tabla[1][1] == tabla[2][2] && tabla[0][0] != '')
        castigator = tabla[0][0];
    
    // diagonala secundara

    if (tabla[0][2] == tabla[1][1] && tabla[1][1] == tabla[2][0] && tabla[0][2] != "")
        castigator = tabla[0][2];

    // daca "castigator" a ramas in continuare null trb sa verificam daca mai sunt locuri goale ca sa mai putem juca
    for (i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++){
            if (tabla[i][j] == '')
                gol ++;
        }
    }

    if (castigator == null && gol == 0) 
        return 'remiza';
    else
        return castigator; 
}

function mousePressed() {
    if (rand_mutare == gigi) {
        let i = floor(mouseX / latime);
        let j = floor(mouseY / inaltime);
        if (tabla[i][j] == '') {
            tabla[i][j] = gigi;
            rand_mutare = mutare_max;
            mutare();
        }
        
    }
}


function draw() {
    
    background(255);
    strokeWeight(4);
    line(latime, 0, latime, height);
    line(latime * 2, 0, latime * 2, height);
    line(0, inaltime, width, inaltime);
    line(0, inaltime * 2, width, inaltime * 2);
    
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
          let x = latime * i + latime / 2;
          let y = inaltime * j + inaltime / 2;
          let spot = tabla[i][j];
          textSize(32);
          let r = latime / 4;
          if (spot == gigi) {
            noFill();
            ellipse(x, y, r * 2);
          } else if (spot == mutare_max) {
            line(x - r, y - r, x + r, y + r);
            line(x + r, y - r, x - r, y + r);
          }
        }
      }
       

    }



var balX = 50;
var balY = 50;
var speedX = 5;
var speenY = 5;
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);


}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

  // stel vulkleur in
  fill(100, 100, 255);

  // teken een cirkel
  ellipse(balX, balY, 80, 80);

  balX = balX + 1;
  balY = balY + 1; 
  
  if (balX >1240){
    speedX = speedX * -1
  }

  if (balY > 720){
    speedY = speedY * -1;
  }
 
  if (balX< 0){
   speedX = speedX * 1;
  }

  if (balY <0) {
    speedY = speedY * 1;
  }
}


let guaxinim = "./src/images/guaxinim.jpg";
let gato = "./src/images/gato.png";
let cachorro = "./src/images/cachorro.png";
let vaca = "./src/images/vaca.jpg";
let lobo = "./src/images/lobo.jpeg";
let leao = "./src/images/leao.jpeg";
let coelho = "./src/images/coelho.jpg";
let estatua = "./src/images/estatua.jpeg";

const emojis = [
  guaxinim, guaxinim,
  gato, gato,
  coelho, coelho,
  estatua, estatua,
  cachorro, cachorro,
  lobo, lobo,
  vaca, vaca,
  leao, leao
  ];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = `<img src="${shuffleEmojis[i]}" alt="Imagem">`;
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box)
}

function handleClick() {
  if(openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }
  
  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  let img1 = openCards[0].querySelector("img").src;
  let img2 = openCards[1].querySelector("img").src;
  if(img1 === img2) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }
  
  openCards = [];
  
  if(document.querySelectorAll(".boxMatch").length === emojis.length) {
    document.querySelector(".container").style.display = 'none';
    document.querySelector(".win").style.display = 'block';
  }
}

//falta criar component com a constante help e exportar pra ca
const help = [
  {
    title: "problema 1",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 2",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 3",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 4",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 5",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 6",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 7",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 8",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 9",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 10",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 11",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 12",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 13",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 14",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 15",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 16",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 17",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 18",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 19",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 20",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 21",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 22",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 23",
    content: "lorem ipsum e blabla e etc...",
  },
  {
    title: "problema 24",
    content: "lorem ipsum e blabla e etc...",
  },
];

const mapHelpTitulo = help.map((item) => item.title);

const mapHelpConteudo = help.map((item) => item.content);

console.log(mapHelpTitulo);
console.log(mapHelpConteudo);

document.getElementById("ajuda1").innerText = `${mapHelpTitulo[0]}`;

document.getElementById("ajuda2").innerText = `${mapHelpTitulo[1]}`;

document.getElementById("conteudo-ajuda1").innerText = `${mapHelpConteudo[0]}`;

document.getElementById("conteudo-ajuda2").innerText = `${mapHelpConteudo[1]}`;

//aqui começa o filtro de cards
const filterElements = document.querySelector("header input");
console.log(filterElements);

const cards = document.querySelectorAll(".cards div");

filterElements.addEventListener("input", filterCards);

function filterCards() {
  if (filterElements.value != "") {
    for (let card of cards) {
      let title = card.querySelector("h2");
      title = title.textContent.toLowerCase();

      let filterText = filterElements.value.toLowerCase();

      if (!title.includes(filterText)) {
        card.style.display = "none";
      } else {
        card.style.display = "flex";
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = "flex";
    }
  }
}

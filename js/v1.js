// čia yra paprasta elemento creatinimo F-sukuria tuščią:
// const createDiv = () => document.createElement("DIV"); // REACTO sintakse

// čia gudresnė F. Argumentu paduodam tekstą, jis sukuria elementą 'DIV',tada paima tą tekstą ir įdeda į DIV vidų
// const createDivText = (text) => {
//   const element = document.createElement("DIV");
//   const textNode = document.createTextNode(text);
//   element.appendChild(textNode);
//   return element;
// };

// const addClass = (element, className) => element.classList.add(className);

// const withClassName = (element, className) => element.classList.add(className);// čia F su klasės vardu. Ji paduota komp
// pakeičia. Ši F elementui prideda klasės varda.

// HOC
const grazusCreateDivText = (text, className) => {
  const div = document.createElement("DIV");
  const textNode = document.createTextNode(text);
  div.appendChild(textNode);
  div.classList.add(className);
  return div;
};

const grazusSpan = (className) => {
  const span = document.createElement("SPAN");
  const textNode = document.createTextNode("Labas");
  span.appendChild(textNode);
  span.classList.add(className);
  return span;
};

const root = document.querySelector("#root");

const animals = ["Kiškis", "Lapė", "Anakonda", "Sausumų vėplys", "Bebras"];

animals.forEach((animal) => {
  const div = grazusCreateDivText(animal, "grozis");
  const span = grazusSpan("raudona");
  div.appendChild(span);
  root.appendChild(div);
});

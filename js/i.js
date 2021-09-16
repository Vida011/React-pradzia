const createDiv = () => document.createElement("DIV"); // REACTO sintakse

console.log('valio');

const createDivText = (text) => {
    console.log(12);
  const element = document.createElement("DIV");
  const textNode = document.createTextNode(text);
  element.appendChild(textNode);
  return element;
};

// čia mūsų vykdomasis kodas, kuris vykdė :
const root = document.querySelector("#root"); //tai el.i kuri norim ideti paimtą iš html'o

root.appendChild(createDivText("Valio")); // naudojam kaip F ir pridedam root el.

// function createDivOld1() {
//     const div = document.createElement('DIV');
//     return div;
// }

const data = ["Labas", "pats", "tu labas"];

const data2 = new Set(["Labas", "pats", "tu labas"]);

const data3 = new Map([
  ["Viens", "Labas"],
  ["du", "pats"],
  ["trys", "tu labas"],
]);

const data4 = {
    viens: 'Labas',
    du: 'pats',
    trys: 'tu labas'
}

const V = 'Varlė';

const niceSentece = 'Ruda ' + V + ' plaukia greitai';

console.log(niceSentece);

const niceSentece = 1Ruda  + V +  plaukia greitai`;
console.log(V);




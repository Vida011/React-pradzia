
// čia yra paprasta elemento creatinimo F-sukuria tuščią:
const createDiv = () => document.createElement("DIV"); // REACTO sintakse

// čia gudresnė F. Argumentu paduodam tekstą, jis sukuria elementą 'DIV',tada paima tą tekstą ir įdeda į DIV vidų
const createDivText = (text) => {
    console.log(12);
  const element = document.createElement("DIV");
  const textNode = document.createTextNode(text);
  element.appendChild(textNode);
  return element;
};

const addClass = (element, className) => element.classList.add(className);

const withClassName = (element, className) => element.classList.add(className);// čia F su klasės vardu. Ji paduota komp
// pakeičia. Ši F elementui prideda klasės varda.

// HOC
const GrazusCreateDivText  = (text, className ) => {
    const div = createDivText(text);
    withClassName(div, className);
    return div;
}



const root = document.querySelector("#root"); 

// root.appendChild(createDivText("Valio")); 

const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];

animals.forEach(animal => {
    // const div = createDivText(animal); // elemento suk8rimas;
    // addClass(div, 'grozis');
    const div = GrazusCreateDivText(animal, 'grozis');
    root.appendChild(div);   
});
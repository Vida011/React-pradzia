const createDiv = () => document.createElement('DIV'); // REACTO sintakse

const createDivText = (text) => {
    const element = document.createElement('DIV');
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
}

const data = ['Labas', 'pats', 'tu labas'];

const data2 = new Set(['Labas', 'pats', 'tu labas']);


const root = document.querySelector('#root'); //tai el.i kuri norim ideti


root.appendChild(crcreateDivText('Valio'));

// function createDivOld1() {
//     const div = document.createElement('DIV'); 
//     return div;
// }

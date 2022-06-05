// 1.
const brother = document.getElementById('pai');

let brotherSection = document.createElement('section');
brotherSection.setAttribute('id', 'sectionIrmão');

brother.appendChild(brotherSection);

// 2.
const child = document.getElementById('elementoOndeVoceEsta');

let childSection = document.createElement('section');
childSection.setAttribute('id', 'sectionFilho');

child.appendChild(childSection);

// 3.
const child2 = document.getElementById('primeiroFilhoDoFilho');

let child2Section = document.createElement('section');
child2Section.setAttribute('id', 'sectionSecondFilho');

child2.appendChild(child2Section);

// 4.
const access = document.getElementById('sectionSecondFilho').parentNode.parentElement.nextElementSibling;
console.log(access);
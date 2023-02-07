console.log("dom file");

const body = document.querySelector('body');

const styleBody = ()=>{
    body.style.background = 'wheat';
};

const addTitle = (text)=>{
    const title = document.querySelector('h1');
    title.textContent = text;
    body.appendChild(title);
}

styleBody();
addTitle("Hello World, dom.js");
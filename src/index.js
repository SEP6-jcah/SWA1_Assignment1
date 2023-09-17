import _ from 'lodash';
import model, { cloud, precipitation, temperature, wind } from '../model/model';

function displayData(id){
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"; 
    }
}

async function fetchData(city){
    try {
        const response = await fetch('http://localhost:8080/data/Horsens')
        if (!response.ok) throw response.statusText
        const data = await response.json()
        return data;
    } catch (e) {
        theView.displayError(e)
    }
}

function title(){
    const element = document.createElement('h1');
    
    element.innerHTML = _.join(['Hello','title'], ' ');

    return element;
}

function componentHorsens(){
    const div = document.createElement('div');
    div.id = "divHorsens";

    const button = document.createElement('button');
    button.id = "buttonHorsens";
    button.onclick = () => {
        displayData("tableHorsens");
        fetchData();
    }
    button.innerHTML = _.join(['Horsens']);
    div.appendChild(button);    

    const table = document.createElement('div');
    table.id = "tableHorsens";
    table.style.display = "none";
    table.innerHTML = _.join(['Here is some data about Horsens']);
    div.appendChild(table);

    return div;
}

function componentAarhus(){
    const div = document.createElement('div');
    div.id = "divAarhus";

    const button = document.createElement('button');
    button.id = "buttonAarhus";
    button.onclick = () => {
        displayData("tableAarhus");
    }
    button.innerHTML = _.join(['Aarhus']);
    div.appendChild(button);    

    const table = document.createElement('div');
    table.id = "tableAarhus";
    table.style.display = "none";
    table.innerHTML = _.join(['Here is some data about Aarhus']);
    div.appendChild(table);

    return div;
}

function componentCopenhagen(){
    const div = document.createElement('div');
    div.id = "divCopenhagen";

    const button = document.createElement('button');
    button.id = "buttonCopenhagen";
    button.onclick = () => {
        displayData("tableCopenhagen");
    }
    button.innerHTML = _.join(['Copenhagen']);
    div.appendChild(button);    

    const table = document.createElement('div');
    table.id = "tableCopenhagen";
    table.style.display = "none";
    table.innerHTML = _.join(['Here is some data about Copenhagen']);
    div.appendChild(table);

    return div;
}

document.body.appendChild(title());
document.body.appendChild(componentHorsens());
document.body.appendChild(componentAarhus());
document.body.appendChild(componentCopenhagen());
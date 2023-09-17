import _ from 'lodash';

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
        var x = document.getElementById("tableHorsens");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none"; 
        }
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
        var x = document.getElementById("tableAarhus");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none"; 
        }
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
        var x = document.getElementById("tableCopenhagen");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none"; 
        }
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
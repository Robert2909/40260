export function loadXMLDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const xmlDoc = xhttp.responseXML;
        const lista = xmlDoc.getElementsByTagName("ALUMNO");
        myFunction(lista)
    }
    xhttp.open("GET", "alumnos.xml");
    xhttp.send();
}

export function myFunction(cd) {
    let table="<tr><th>Nombre</th><th>Apellido</th><th>Nacimiento</th><th>Curso</th></tr>";
    for (let i = 0; i < cd.length; i++) {
        table += "<tr><td>" +
        cd[i].getElementsByTagName("NOMBRE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        cd[i].getElementsByTagName("APELLIDO")[0].childNodes[0].nodeValue +
        "</td><td>" +
        cd[i].getElementsByTagName("NACIMIENTO")[0].childNodes[0].nodeValue +
        "</td><td>" +
        cd[i].getElementsByTagName("CURSO")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}

export function triggerExplosion(event) {
    const rect = event.target.getBoundingClientRect();
    const xCenter = rect.left + rect.width / 2;
    const yCenter = rect.top + rect.height / 2;

    const container = document.createElement('div');
    container.className = 'explosion';
    document.body.appendChild(container);

    for (let i = 0; i < 60; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';

        const randX = (Math.random() - 0.5) * 500 + 'px';
        const randY = (Math.random() - 0.5) * 500 + 'px';
        const size = Math.random() * 10 + 4;
        const scale = Math.random() * 2 + 2;

        circle.style.setProperty('--x', randX);
        circle.style.setProperty('--y', randY);
        circle.style.setProperty('--scale', scale);
        circle.style.left = xCenter + 'px';
        circle.style.top = yCenter + 'px';
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';

        container.appendChild(circle);
    }

    for (let i = 0; i < 30; i++) {
        const line = document.createElement('div');
        line.className = 'line';

        const randX = (Math.random() - 0.5) * 800 + 'px';
        const randY = (Math.random() - 0.5) * 800 + 'px';
        const scale = Math.random() * 2 + 2;

        line.style.setProperty('--x', randX);
        line.style.setProperty('--y', randY);
        line.style.setProperty('--scale', scale);
        line.style.left = xCenter + 'px';
        line.style.top = yCenter + 'px';
        line.style.transform = `rotate(${Math.random() * 360}deg)`;

        container.appendChild(line);
    }

    setTimeout(() => {
        container.remove();
    }, 3000);

    window.loadXMLDoc = loadXMLDoc;
}

window.loadXMLDoc = loadXMLDoc;

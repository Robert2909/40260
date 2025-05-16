let ejemplo = document.getElementById("demo")
console.log(ejemplo)

function Imagen(id) {
    const componente = 
        '<figure>' + 
            '<img src="https://picsum.photos/id/' + id + '/200/200" alt="x">' +
            '<figcaption>John</figcaption>' +
        '</figure>'
    return componente
}

const Picture = (id) => {
    return `
    <figure>
        <img src="https://picsum.photos/id/${id}/200/200" alt="x">
        <figcaption>John</figcaption>
    </figure>
    `
}

ejemplo.innerHTML = "Hola" + Picture(1) + Imagen(2);

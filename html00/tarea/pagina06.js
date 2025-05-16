const Picture = (id, name) => {
    const url = `https://picsum.photos/id/${id}/200/200`
    return `
        <figure>
            <img src="${url}" alt="" class="redonda" onClick="saludar()">
            <figcaption>${name}</figcaption>
        </figure>
    `
}

let x = document.getElementById('app').innerHTML = Picture(1, "John") + Picture(2, "Jane")
const lista = app.querySelectorAll("img")
console.log(lista)

for (let i = 0; 1 < lista.length; i++) {
    lista[i].addEventListener("click", () => {
        lista[i].classList.toggle("redonda")
    })
}

function saludar() {
    alert("Hola!")
}

export {saludar}
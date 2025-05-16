const loadXMLDoc = async () => {
try {
    const response = await fetch('cd_catalog.xml');
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "application/xml");
    const cds = xmlDoc.getElementsByTagName("CD");
    myFunction(cds);
    document.getElementById("error").textContent = "";
} catch (error) {
    console.error('Error loading XML:', error);
    document.getElementById("error").textContent = "No se pudo cargar el archivo XML.";
}
};

const myFunction = (cds) => {
let table = "<tr><th>Artista</th><th>Título</th></tr>";
Array.from(cds).forEach(cd => {
    const artist = cd.getElementsByTagName("ARTIST")[0]?.textContent || "Desconocido";
    const title = cd.getElementsByTagName("TITLE")[0]?.textContent || "Sin título";
    table += `<tr><td>${artist}</td><td>${title}</td></tr>`;
});
document.getElementById("demo").innerHTML = table;
};
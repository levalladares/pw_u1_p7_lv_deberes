function cambiarColor(id, color) {
    document.getElementById(id).style.color = color;
}

function cambiarTamaño(id, tamaño) {
    document.getElementById(id).style.fontSize = tamaño;
}

function cambiarTexto(id) {
    document.getElementById(id).innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ex, quod earum molestias veritatis voluptatem obcaecati asperiores fugit voluptate doloremque consequatur aspernatur adipisci totam delectus sequi nobis quo, rem veniam nesciunt ad minus nemo. Dolorem vel earum eius voluptas tempora, minus soluta ipsum, quae sint cupiditate, enim sapiente ex iste.';
}

function cambiarFondo(id, color) {
    document.getElementById(id).style.backgroundColor = color;
}

function agregarElemento(id, elemento) {
    document.getElementById(id).innerHTML += elemento;
}
function cambiarTamañoBorder(id, tamaño) {
    document.getElementById(id).style.border = tamaño;
}
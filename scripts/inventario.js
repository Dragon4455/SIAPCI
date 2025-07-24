// objetos que simulan productos

let producto1 = {

    Nombre: "pega",
    Cantidad: 20,
}

let producto2 = {

    Nombre: "hoja de examen",
    Cantidad: 10,
}

let producto3 = {

    Nombre: "Lapices Mongol",
    Cantidad: 2,
}


//seleccion de etiquetas del html

let $buttonAdd = document.querySelector("#add"),
    $buttonEdit = document.querySelector("#edit"),
    $buttonDel = document.querySelector("#del"),
    $buttonSave = document.querySelector("#save"),
    $buttonAddClose = ("#Add__Close");


//Funciones de los botones.

function addClose(){


    document.getElementById("#modal__Add").style.display="none"
}
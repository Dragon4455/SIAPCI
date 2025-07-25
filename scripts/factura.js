const facturas = localStorage.getItem("BDFactura");
const facturaActual = JSON.stringify(facturas);

const $editBtn = document.getElementById('edit');
const $closeEditBtn = document.getElementById('closeEdit');
const $saveEditBtn = document.getElementById('saveEdit');
 let nombCli = document.querySelector("#nombCli"),
    rifCli = document.querySelector("#rifCli"),
    dirCli = document.querySelector("#dirCli"),
    telCli = document.querySelector("#telCli"),
    numFac = document.querySelector("#numFact"),
    tipPago = document.querySelector("#tipPago"),
    conPago = document.querySelector("#conPago");
 let $inptNombCli = document.querySelector("#Nombre"),
    $inptRifCli = document.querySelector("#Rif"),
    $inptDirCli = document.querySelector("#Dir"),
    $inptTelCli = document.querySelector("#Tlf"),
    $inptNumFac = document.querySelector("#Num__Fact"),
    $inptTipPago = document.querySelector("#tip__P"),
    $inptConPago = document.querySelector("#con__P");




$editBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(".modalEdit").style.display = "block";
});

$closeEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(".modalEdit").style.display = "none";
    $inptNombCli.value = '';
    $inptRifCli.value = '';
    $inptDirCli.value = '';
    $inptTelCli.value = '';
    $inptNumFac.value = '';
    $inptTipPago.value = '';
    $inptConPago.value = '';
});

$saveEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    editarDatos();
    document.querySelector(".modalEdit").style.display = "none";})

function editarDatos() {

    //
    
    nombCli.textContent = $inptNombCli.value || nombCli.textContent;
    rifCli.textContent = $inptRifCli.value || rifCli.textContent;
    dirCli.textContent = $inptDirCli.value || dirCli.textContent;
    telCli.textContent = $inptTelCli.value || telCli.textContent;
    numFac.textContent = $inptNumFac.value || numFac.textContent;
    tipPago.textContent = $inptTipPago.value || tipPago.textContent;
    conPago.textContent = $inptConPago.value ||conPago.textContent;
    
    // $inptNombCli.value = nombCli.textContent;
   
    $inptNombCli.value = '';
    $inptRifCli.value = '';
    $inptDirCli.value = '';
    $inptTelCli.value = '';
    $inptNumFac.value = '';
    $inptTipPago.value = '';
    $inptConPago.value = '';

 
}


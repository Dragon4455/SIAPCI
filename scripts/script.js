let user = {
    username: "admin",
    password: "123",
}

let $inputUser = document.querySelector("#user"),
    $inputPassword = document.querySelector("#password"),
    $button = document.querySelector("#send");

$button.addEventListener("click", (e)=>{
    e.preventDefault();
    if($inputUser.value === user.username &&
       $inputPassword.value === user.password){
         
        window.location.replace("menu.html");
        

    } else{
        alert("Datos Invalidos");
    }
})
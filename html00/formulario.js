console.log("Inicio")

const boton = document.getElementById("enviar")

boton.addEventListener("click", 
    () => {
        let username = document.getElementById("username")
        let password = document.getElementById("password")

        console.log("Los parámetros:")
        console.log("Usuario: " + username.value)
        console.log("Contraseña: " + password.value)
    }
)
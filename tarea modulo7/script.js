const generate_btn = document.querySelector("#generate_btn");
const password_range= document.querySelector("#password_range");
const uppercase_checkbox = document.querySelector("#uppercase_checkbox");
const numbers_checkbox = document.querySelector("#numbers_checkbox");
const symbols_checkbox = document.querySelector("#symbols_checkbox");
const generated_password = document.querySelector("#generated_password");

// Variables para la fuerza (STRENGTH)
const strengthText = document.querySelector("#strengthText");
const bars = document.querySelectorAll(".bar");
// El span que muestra el número al lado de "Character Length"
const lengthVal = document.querySelector(".form p span"); 



generate_btn.addEventListener("click", () => {
    console.log("Presionaste el botón")
    const result = generate_password(
        password_range.value,
        uppercase_checkbox.checked,
        numbers_checkbox.checked,
        symbols_checkbox.checked
    )
    generated_password.innerHTML = result
        updateStrength(); // Ejecutamos la fuerza al generar
})


const generate_password =  function(length, uppercase, numbers, symbols) { 
    console.log("Generando contraseña con las siguientes opciones:")
    console.log("Largo:", length)
    console.log("Incluir Mayusculas:", uppercase)
    console.log("Incluir Numeros:", numbers)
    console.log("Incluir Simbolos:", symbols)

   // Generado por copilot, no es necesario entenderlo, pero si quieres puedes intentarlo
    const lowercase_chars = "abcdefghijklmnopqrstuvwxyz"
    const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const number_chars = "0123456789"
    const symbol_chars = "!@#$%^&*()_+[]{}|;:,.<>?"

    // 2) Empezamos con minúsculas como base
    let available_chars = lowercase_chars

    // 3) Según los checkboxes, agregamos más caracteres a la base
    if (uppercase) {
        available_chars += uppercase_chars
    }
    if (numbers) {
        available_chars += number_chars
    }
    if (symbols) {
        available_chars += symbol_chars
    }

    // 4) Si el largo no es válido, devolvemos un texto de ayuda
    if (!length || length <= 0) {
        return "Elige un largo mayor a 0"
    }

    // 5) Creamos una variable vacía donde iremos guardando la contraseña
    let password = ""

    // 6) Repetimos "length" veces para ir agregando un carácter por vuelta
    for (let i = 0; i < length; i++) {
        // Número aleatorio entre 0 y el último índice de available_chars
        const random_index = Math.floor(Math.random() * available_chars.length)

        // Tomamos el carácter en ese índice
        const random_char = available_chars[random_index]

        // Lo añadimos al texto final
        password += random_char
    }


    // 7) Regresamos la contraseña completa
   return password //el return es importante para que pueda ser usada fuera de la función, como en el evento del botón

}



// ACTUALIZAR SLIDER Y FUERZA EN TIEMPO REAL
password_range.oninput = () => {
    lengthVal.innerText = password_range.value;
    updateStrength(); 
}

function updateStrength() {
    const length = password_range.value;

    // Contamos cuántos checkbox están marcados
    let count = 1; // 1 porque siempre incluimos minúsculas
    if (uppercase_checkbox.checked) count++;
    if (numbers_checkbox.checked) count++;
    if (symbols_checkbox.checked) count++;
    
    let score = count;
    if (length > 12) score++;
  
    
    // Resetear estilos de las barras
    bars.forEach(b => { 
        b.style.backgroundColor = "transparent"; 
        b.style.borderColor = "white"; 
    });

    let config = { text: "TOO WEAK!", color: "#F64A4A", num: 1 };
    if (score === 2) config = { text: "WEAK", color: "#FB7C58", num: 2 };
    else if (score === 3) config = { text: "MEDIUM", color: "#F8CD65", num: 3 };
    else if (score >= 4) config = { text: "STRONG", color: "#A4FFAF", num: 4 };

    // Aplicar cambios al HTML
    if(strengthText) strengthText.innerText = config.text;
    
    for (let i = 0; i < config.num; i++) {
        if(bars[i]) {
            bars[i].style.backgroundColor = config.color;
            bars[i].style.borderColor = config.color;
    }
 }
}
// Ejecutar una vez al cargar para que no aparezca vacío
updateStrength();

const nombre = document.querySelector("#nombre");
const enviar_btn = document.querySelector("#enviar_btn");

         enviar_btn.addEventListener("click", function() {
             console.log(nombre.value);
             let saludo = document.createElement("h3");
             saludo.textContent = "Hola " + nombre.value + "!";
             document.body.appendChild(saludo);

         });
const boton = document.getElementById("btnPublicar");
const textarea = document.getElementById("textoComentario");
const contenedor = document.getElementById("listaComentarios");
        
          

   boton.addEventListener("click", function() {
            const texto = textarea.value;

            if (texto.trim() === "") {
                alert("Por favor, escribe algo.");
                return;
            }

            // 1. Crear el contenedor del comentario
            const nuevoComentario = document.createElement("div");
            nuevoComentario.className = "comentario";

            // 2. Obtener fecha y hora actual
            const ahora = new Date().toLocaleString();

            // 3. Insertar el contenido (Texto + Fecha + Botón Eliminar)
            nuevoComentario.innerHTML = `
                <p>${texto}</p>
                <span class="fecha">Publicado el: ${ahora}</span>
                <button class="btn-eliminar">Eliminar</button>
            `;

            // 4. Agregar funcionalidad al botón eliminar
            nuevoComentario.querySelector(".btn-eliminar").onclick = function() {
                nuevoComentario.remove();
            };

            // 5. Agregar el comentario a la lista y limpiar el textarea
            contenedor.prepend(nuevoComentario); // .prepend lo pone al principio
            textarea.value = "";
        });  

        
const nombre = document.querySelector("#nombre");
const enviar_btn = document.querySelector("#enviar_btn");

    
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

            // 3. Insertar el contenido (Texto + Fecha + publicado por + Botón Eliminar)
            nuevoComentario.innerHTML = `
                <p>${texto}</p>
                <p>${nombre.value ? "Publicado por: " + nombre.value : "Publicado por: Anónimo"}</p>
                <span class="fecha">Publicado el: ${ahora}</span>
                <button class="btn-eliminar" style="background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20220812/pngtree-rounded-raster-icon-of-a-flat-pink-trash-can-photo-image_19486040.jpg'); background-size: contain; background-repeat: no-repeat; width: 20px; height: 20px;"></button>
                
                 
            `;

            // 4. Agregar funcionalidad al botón eliminar
            nuevoComentario.querySelector(".btn-eliminar").onclick = function() {
                nuevoComentario.remove();
            };

            // 5. Agregar el comentario a la lista y limpiar el textarea
            contenedor.prepend(nuevoComentario); // .prepend lo pone al principio
            textarea.value = "";
        });  

        
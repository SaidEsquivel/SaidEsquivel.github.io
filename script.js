// Función para agregar una receta
function agregarReceta(tipo) {
  const recetaNombre = prompt("Escribe el nombre de la receta:");
  if (recetaNombre) {
    const lista = document.getElementById(`lista-${tipo}`);
    const nuevaReceta = document.createElement("div");
    nuevaReceta.textContent = recetaNombre;
    lista.appendChild(nuevaReceta);
  }
}

// Función para agregar comentarios en la sección de contacto
function agregarComentario() {
  const comentario = document.getElementById("comentario").value;
  if (comentario) {
    const listaComentarios = document.getElementById("lista-comentarios");
    const nuevoComentario = document.createElement("p");
    nuevoComentario.textContent = comentario;
    listaComentarios.appendChild(nuevoComentario);
    document.getElementById("comentario").value = ""; // Limpia el campo
  }
}
// Función para cargar las recetas desde localStorage y mostrarlas en la página
function cargarRecetas(tipo) {
    const lista = document.getElementById(`lista-${tipo}`);
    lista.innerHTML = ""; // Limpia la lista para actualizarla
  
    const recetas = JSON.parse(localStorage.getItem(tipo)) || [];
    recetas.forEach((receta, index) => {
      const recetaDiv = document.createElement("div");
      recetaDiv.classList.add("receta");
  
      const recetaTitulo = document.createElement("h3");
      recetaTitulo.textContent = receta.nombre;
      recetaDiv.appendChild(recetaTitulo);
  
      const recetaIngredientes = document.createElement("p");
      recetaIngredientes.textContent = "Ingredientes: " + receta.ingredientes;
      recetaDiv.appendChild(recetaIngredientes);
  
      const recetaPasos = document.createElement("p");
      recetaPasos.textContent = "Pasos: " + receta.pasos;
      recetaDiv.appendChild(recetaPasos);
  
      lista.appendChild(recetaDiv);
    });
  }
  
  // Función para agregar una nueva receta
  function agregarReceta(tipo) {
    const nombre = prompt("Escribe el nombre de la receta:");
    const ingredientes = prompt("Escribe los ingredientes (separados por comas):");
    const pasos = prompt("Escribe los pasos:");
  
    if (nombre && ingredientes && pasos) {
      const nuevaReceta = { nombre, ingredientes, pasos };
  
      // Obtiene las recetas almacenadas y agrega la nueva receta
      const recetas = JSON.parse(localStorage.getItem(tipo)) || [];
      recetas.push(nuevaReceta);
  
      // Guarda las recetas en localStorage
      localStorage.setItem(tipo, JSON.stringify(recetas));
  
      // Recarga la lista para mostrar la nueva receta
      cargarRecetas(tipo);
    } else {
      alert("Por favor completa todos los campos.");
    }
  }
  
  // Llama a cargarRecetas cuando se carga la página para mostrar recetas guardadas
  document.addEventListener("DOMContentLoaded", () => {
    cargarRecetas("platillos");
    cargarRecetas("postres");
    cargarRecetas("bebidas");
  });
  
  // Función para agregar una nueva receta
function agregarReceta() {
  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById("nombre").value;
  const ingredientes = document.getElementById("ingredientes").value;
  const pasos = document.getElementById("pasos").value;

  // Validar que los campos no estén vacíos
  if (!nombre || !ingredientes || !pasos) {
      alert("Por favor, completa todos los campos.");
      return;
  }

  // Crear un nuevo elemento div para la receta
  const recetaDiv = document.createElement("div");
  recetaDiv.classList.add("receta");

  // Crear el encabezado de la receta
  const recetaNombre = document.createElement("h3");
  recetaNombre.textContent = nombre;
  recetaDiv.appendChild(recetaNombre);

  // Crear el párrafo para los ingredientes
  const recetaIngredientes = document.createElement("p");
  recetaIngredientes.classList.add("ingredientes");
  recetaIngredientes.textContent = "Ingredientes: " + ingredientes;
  recetaDiv.appendChild(recetaIngredientes);

  // Crear el párrafo para los pasos
  const recetaPasos = document.createElement("p");
  recetaPasos.classList.add("pasos");
  recetaPasos.textContent = "Pasos: " + pasos;
  recetaDiv.appendChild(recetaPasos);

  // Agregar la receta al contenedor de recetas
  const listaRecetas = document.getElementById("lista-recetas");
  listaRecetas.appendChild(recetaDiv);

  // Limpiar los campos del formulario
  document.getElementById("form-receta").reset();
}

// Función para agregar un nuevo platillo
function agregarPlatillo() {
  const nombre = document.getElementById("nombre-platillo").value;
  const ingredientes = document.getElementById("ingredientes-platillo").value;
  const pasos = document.getElementById("pasos-platillo").value;

  if (!nombre || !ingredientes || !pasos) {
      alert("Por favor, completa todos los campos para el platillo.");
      return;
  }

  const recetaDiv = document.createElement("div");
  recetaDiv.classList.add("receta");

  const recetaNombre = document.createElement("h3");
  recetaNombre.textContent = nombre;
  recetaDiv.appendChild(recetaNombre);

  const recetaIngredientes = document.createElement("p");
  recetaIngredientes.classList.add("ingredientes");
  recetaIngredientes.textContent = "Ingredientes: " + ingredientes;
  recetaDiv.appendChild(recetaIngredientes);

  const recetaPasos = document.createElement("p");
  recetaPasos.classList.add("pasos");
  recetaPasos.textContent = "Pasos: " + pasos;
  recetaDiv.appendChild(recetaPasos);

  document.getElementById("lista-platillos").appendChild(recetaDiv);
  document.getElementById("form-platillo").reset();
}

// Función para agregar un nuevo postre
function agregarPostre() {
  const nombre = document.getElementById("nombre-postre").value;
  const ingredientes = document.getElementById("ingredientes-postre").value;
  const pasos = document.getElementById("pasos-postre").value;

  if (!nombre || !ingredientes || !pasos) {
      alert("Por favor, completa todos los campos para el postre.");
      return;
  }

  const recetaDiv = document.createElement("div");
  recetaDiv.classList.add("receta");

  const recetaNombre = document.createElement("h3");
  recetaNombre.textContent = nombre;
  recetaDiv.appendChild(recetaNombre);

  const recetaIngredientes = document.createElement("p");
  recetaIngredientes.classList.add("ingredientes");
  recetaIngredientes.textContent = "Ingredientes: " + ingredientes;
  recetaDiv.appendChild(recetaIngredientes);

  const recetaPasos = document.createElement("p");
  recetaPasos.classList.add("pasos");
  recetaPasos.textContent = "Pasos: " + pasos;
  recetaDiv.appendChild(recetaPasos);

  document.getElementById("lista-postres").appendChild(recetaDiv);
  document.getElementById("form-postre").reset();
}

// Función para agregar una nueva bebida
function agregarBebida() {
  const nombre = document.getElementById("nombre-bebida").value;
  const ingredientes = document.getElementById("ingredientes-bebida").value;
  const pasos = document.getElementById("pasos-bebida").value;

  if (!nombre || !ingredientes || !pasos) {
      alert("Por favor, completa todos los campos para la bebida.");
      return;
  }

  const recetaDiv = document.createElement("div");
  recetaDiv.classList.add("receta");

  const recetaNombre = document.createElement("h3");
  recetaNombre.textContent = nombre;
  recetaDiv.appendChild(recetaNombre);

  const recetaIngredientes = document.createElement("p");
  recetaIngredientes.classList.add("ingredientes");
  recetaIngredientes.textContent = "Ingredientes: " + ingredientes;
  recetaDiv.appendChild(recetaIngredientes);

  const recetaPasos = document.createElement("p");
  recetaPasos.classList.add("pasos");
  recetaPasos.textContent = "Pasos: " + pasos;
  recetaDiv.appendChild(recetaPasos);

  document.getElementById("lista-bebidas").appendChild(recetaDiv);
  document.getElementById("form-bebida").reset();
}

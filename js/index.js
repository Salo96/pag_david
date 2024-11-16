// JavaScript para cambiar el estado activo de los botones en project 
document.querySelectorAll('.project-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Eliminar la clase 'active' de todos los botones
        document.querySelectorAll('.project-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Añadir la clase 'active' al botón que se hizo clic
        button.classList.add('active');
    });
});

// Contenido para cada sección, en project
const contentData = {
    "road-construction": `
        <div class="col-lg-6 col-md-6 col-sm-12">
            <h1 class="pb-2">We unite entire cities building roads</h1>
            <p>With our extensive experience we know exactly what is required, we have the totally available professionals and constant reports.</p>
            <a href="#" class="btn btn-warning custom-btn mt-5">Know us more</a>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="text-center">
                <img src="img/img-04.jpg" alt="Road construction" class="img-fluid">
            </div>
        </div>
    `,
    "solutions-tools": `
        <div class="col-lg-6 col-md-6 col-sm-12">
            <h1 class="pb-2">We provide innovative solutions and tools</h1>
            <p>Our tools and solutions are designed to tackle modern challenges efficiently and reliably.</p>
            <a href="#" class="btn btn-warning custom-btn mt-5">Learn more about our solutions</a>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="text-center">
                <img src="img/img-04.jpg" alt="Solutions and tools" class="img-fluid">
            </div>
        </div>
    `,
    "installation-machines": `
        <div class="col-lg-6 col-md-6 col-sm-12">
            <h1 class="pb-2">Expert installation of industrial machines</h1>
            <p>Our team ensures precision and safety in machine installations, meeting all industry standards.</p>
            <a href="#" class="btn btn-warning custom-btn mt-5">Discover our services</a>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="text-center">
                <img src="img/img-04.jpg" alt="Installation of machines" class="img-fluid">
            </div>
        </div>
    `
};

// Función para actualizar el contenido
function updateContent(contentId) {
    const contentContainer = document.getElementById("dynamic-content");
    contentContainer.innerHTML = contentData[contentId]; // Actualiza el contenido dinámico
}

// Agregar eventos de clic a los botones
document.querySelectorAll(".project-btn").forEach(button => {
    button.addEventListener("click", () => {
        // Remover clase activa de todos los botones y agregarla al seleccionado
        document.querySelectorAll(".project-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Actualizar el contenido según el botón seleccionado
        const contentId = button.getAttribute("data-content");
        updateContent(contentId);
    });
});

// Mostrar el contenido inicial
updateContent("road-construction");

//slider




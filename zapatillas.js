document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const products = document.querySelectorAll('.product');
    var botonProductos = document.querySelector('a[href="#Productos"]');

    // Función para realizar la búsqueda
    function searchProducts() {
        const searchText = searchInput.value.trim().toLowerCase();

        products.forEach(product => {
            const title = product.querySelector('.product-title').innerText.toLowerCase();
            const description = product.querySelector('.product-description').innerText.toLowerCase();

            if (title.includes(searchText) || description.includes(searchText)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // El código para ir directamente a productos
    botonProductos.addEventListener('click', function(event) {
        event.preventDefault();
        var tituloProductos = document.querySelector('#Productos');
        tituloProductos.scrollIntoView({
          behavior: 'smooth'
        });
    });

    // Event listener para el botón de búsqueda
    searchButton.addEventListener('click', searchProducts);

    // Event listener para la tecla "Enter" en el input de búsqueda
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchProducts();
        }
    });

    // Función para el menú en pantallas pequeñas
    // Eliminar si no hay un menú con id="menu"
    function toggleMenu() {
        const menu = document.getElementById("menu");
        if (menu) {
            menu.style.display === "block" ? menu.style.display = "none" : menu.style.display = "block";
        }
    }

    // Agregar evento solo si existe el menú
    const menuButton = document.getElementById("menuButton");
    if (menuButton) {
        menuButton.addEventListener("click", toggleMenu);
    }
});

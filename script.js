document.addEventListener("DOMContentLoaded", () => {
    const productos = document.querySelectorAll(".producto");
    productos.forEach(producto => {
        producto.addEventListener("click", () => {
            alert(`Has seleccionado: ${producto.querySelector("h3").textContent}`);
        });
    });
});
/* Clase de sistema de Facturación */

class Facturacion {
  precio = 0;
  cantidad = 0;
  subTotal = 0;
  IVA = 0.13;
  ivaAPagar = 0;
  totalAPagar = 0;

  constructor(precio, cantidad) {
    this.precio = precio;
    this.cantidad = cantidad;
  }

  Calcular() {
    this.subTotal = this.precio * this.cantidad;
    this.ivaAPagar =
      parseFloat(this.subTotal) * parseFloat(this.IVA).toFixed(2);
    this.totalAPagar = this.subTotal + this.ivaAPagar;

    console.log(this.subTotal);
    console.log(this.ivaAPagar);
    console.log(this.totalAPagar);
  }

  Imprimir() {
    window.print();
  }
  Limpiar() {
    resultado.textContent = "";
  }
}

// Escucha al botón imprimir PDF

const element2 = document.getElementById("imprimir");
element2.addEventListener("click", imprimir);

function imprimir() {
  const imprimirFactura = new Facturacion();
  imprimirFactura.Imprimir();
}

// Escucha al botón calcular y ejecuta la fórmula

const element = document.getElementById("calcular");
element.addEventListener("click", calcular);

function calcular() {
  const total = new Facturacion(8, 10);
  console.log(total.Calcular());
}

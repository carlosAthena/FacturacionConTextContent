//function to export pdf DOC

function pdfexport() {
  //variables
  //labels
  let ldept = document.getElementById("ldpt").innerText,
    lpty = document.getElementById("lpty").innerText,
    ltitle = document.getElementById("tlt").innerText,
    lsdesc = document.getElementById("lsdesc").innerText,
    lwtlt = document.getElementById("lwtlt").innerText,
    lhbd = document.getElementById("lhbd").innerText,
    ldexc = document.getElementById("ldex").innerText,
    lwex = document.getElementById("lwex").innerText,
    lhbdex = document.getElementById("lhbdex").innerText,
    smallinfo = "** This is a small info in red, you can modified this line";
  //input
  let dname = document.getElementById("dname").value,
    indpt = document.getElementById("indpt").value,
    inproty = document.getElementById("inpty").value,
    inprod = document.getElementById("inprod").value,
    insdesc = document.getElementById("insdesc").value,
    inwtlt = document.getElementById("inwtlt").value;
  (inhbds = [
    document.getElementById("inhbd0").value,
    document.getElementById("inhbd1").value,
    document.getElementById("inhbd2").value,
    document.getElementById("inhbd3").value,
    document.getElementById("inhbd4").value,
  ]),
    (indexcs = [
      document.getElementById("index0").value,
      document.getElementById("index1").value,
      document.getElementById("index2").value,
    ]),
    (inwexs = [
      document.getElementById("inwex0").value,
      document.getElementById("inwex1").value,
      document.getElementById("inwex2").value,
    ]),
    (inhbdexs = [
      document.getElementById("inhbdex0").value,
      document.getElementById("inhbdex1").value,
      document.getElementById("inhbdex2").value,
      document.getElementById("inhbdex3").value,
      document.getElementById("inhbdex4").value,
    ]);
  let x = 0,
    y = 0,
    z = 0,
    w = 0;

  //jspdf part
  let doc = new jsPDF();
  //standard variables
  let boldFont = doc.setFontStyle("bold"),
    normalFont = doc.setFontStyle("normal");

  //department
  doc.setFontStyle("bold");
  doc.setFontSize(10);
  doc.text(ldept + " " + indpt, 5, 5);
  doc.text(lpty + " " + inproty, 5, 10);
  //title
  doc.setFontSize(22);
  doc.text(ltitle + " " + inprod, 60, 30);
  //content
  doc.setFontSize(10);
  doc.setFontStyle("bold");
  doc.text(lsdesc, 10, 50);
  doc.setFontStyle("normal");
  doc.text(insdesc, 10, 60, { maxWidth: 80 });
  doc.setFontStyle("bold");
  doc.text(lwtlt, 10, 70);
  doc.setFontStyle("normal");
  doc.text(inwtlt, 10, 80, { maxWidth: 80 });
  //bullet description left side
  doc.setFontStyle("bold");
  doc.setFontSize(10);
  doc.text(lhbd, 10, 100);
  doc.setFontSize(9);
  doc.setFontStyle("normal");
  for (let i = 0; i < inhbds.length; i++) {
    if (inhbds[i] != "") {
      doc.text(i + ": " + inhbds[i], 10, 110 + w, { maxWidth: 80 });
    }
    w += 10;
  }
  //bullet example right side
  //description
  doc.setFontStyle("bold");
  doc.setFontSize(10);
  doc.text(ldexc, 100, 50);
  doc.setFontSize(9);
  doc.setFontStyle("normal");
  for (let i = 0; i < indexcs.length; i++) {
    if (indexcs[i] != "") {
      doc.text(i + ": " + indexcs[i], 100, 60 + x, { maxWidth: 80 });
    }
    x += 10;
  }
  //web Title
  doc.setFontStyle("bold");
  doc.setFontSize(10);
  doc.text(lwex, 100, 90);
  doc.setFontSize(9);
  doc.setFontStyle("normal");
  for (let i = 0; i < inwexs.length; i++) {
    if (inwexs[i] != "") {
      doc.text(i + ": " + inwexs[i], 100, 100 + y, { maxWidth: 100 });
    }
    y += 10;
  }
  //Highlight
  doc.setFontStyle("bold");
  doc.setFontSize(10);
  doc.text(lhbdex, 100, 130);
  doc.setFontSize(9);
  doc.setFontStyle("normal");
  for (let i = 0; i < inhbdexs.length; i++) {
    if (inhbdexs[i] != "") {
      doc.text(i + ": " + inhbdexs[i], 100, 140 + z, { maxWidth: 100 });
    }
    z += 10;
  }
  //info in redinfo
  doc.setTextColor(255, 0, 0);
  doc.setFontSize(8);
  doc.text(smallinfo, 40, 210, { maxWidth: 150 });
  doc.output("dataurlnewwindow", { filename: dname.value });
}

//input clear function
function inputClear() {
  let indpt = (document.getElementById("indpt").value = ""),
    inproty = (document.getElementById("inpty").value = ""),
    inprod = (document.getElementById("inprod").value = ""),
    insdesc = (document.getElementById("insdesc").value = ""),
    inwtlt = (document.getElementById("inwtlt").value = "");
  (inhbds = [
    (document.getElementById("inhbd0").value = ""),
    (document.getElementById("inhbd1").value = ""),
    (document.getElementById("inhbd2").value = ""),
    (document.getElementById("inhbd3").value = ""),
    (document.getElementById("inhbd4").value = ""),
  ]),
    (indexcs = [
      (document.getElementById("index0").value = ""),
      (document.getElementById("index1").value = ""),
      (document.getElementById("index2").value = ""),
    ]),
    (inwexs = [
      (document.getElementById("inwex0").value = ""),
      (document.getElementById("inwex1").value = ""),
      (document.getElementById("inwex2").value = ""),
    ]),
    (inhbdexs = [
      (document.getElementById("inhbdex0").value = ""),
      (document.getElementById("inhbdex1").value = ""),
      (document.getElementById("inhbdex2").value = ""),
      (document.getElementById("inhbdex3").value = ""),
      (document.getElementById("inhbdex4").value = ""),
    ]);
}

/* Clase de la factura */

class Facturacion {
  fecha = "";
  nombreEmpresa = "";
  direccionEmpresa = "";
  nit = "";
  departamento = "";
  municipio = "";
  formaDePago = "";
  cantidad = "";
  descripcion = "";
  precio = "";

  // Constructor
  constructor(
    //  fecha,
    //  nombreEmpresa,
    //  direccionEmpresa,
    //  nit,
    //  departamento,
    //  municipio,
    //  formaDePago,
    cantidad,
    //  descripcion,
    precio
  ) {
    // Atributos

    //  this.fecha = fecha;
    //  this.nombreEmpresa = nombreEmpresa;
    //  this.direccionEmpresa = direccionEmpresa;
    //  this.nit = nit;
    //  this.departamento = departamento;
    //  this.municipio = municipio;
    //  this.formaDePago = formaDePago;
    this.cantidad = cantidad;
    //  this.descripcion = descripcion;
    this.precio = precio;
  }

  // Métodos
  //  guardarFactura() {}

  imprimirFactura() {
    console.log((subtotal = this.cantidad * this.precio));

    //    return this.alto * this.ancho;
  }
}

const factura = new Facturacion.imprimirFactura(3, 20);

// console.log(factura.guardarFactura);

// console.log(factura.imprimirFactura);

/*

Requerimientos para el Sistema de Facturación

Un formulario que registre los datos ejecute las fórmulas, guarde e imprima facturas con los datos ingresados.

Posteriormente se le sumaran nuevos requerimientos.

Entradas:

Datos Generales

Fecha
Nombre de la empresa
Dirección de la empresa
NIT
Departamento
Municipio
Forma de Pago

Datos del producto

Cantidad
Descripción
Precio

Procesamiento de datos

Agregar nuevo producto para facturar
múltiplo de unidades por precio del producto
Suma los precios de los precios de los productos
IVA = Precio Sub Total * 0.13
TOTAL = Sub Total + IVA
Cantidad en letras

Botón de Guardar e Imprimir

*/
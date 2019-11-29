window.onload = function () {
  // document.getElementById("habitaciones2").addEventListener("mouseenter", personas, false);

   var n = new Date();//Ponemos fecha actual en el input del calendario
   var y = n.getFullYear();
   var m = n.getMonth() + 1;
   var d = n.getDate();
   var fecha = y + "-" + m + "-" + d;
   document.getElementById("entrada").setAttribute("value", fecha);
   personas();
}

function resumir() {
   //var formulario = document.getElementById("formulario").onsubmit;
   //var resumen = document.getElementById("resumen");//Por si queremos escribir el resumen en la página de búsqueda
   var hotel = document.form.hotel.value;
   var entrada = document.form.entrada.value;
   var dropdownMenuButton = document.form.dropdown.value;
   console.log("Hotel para su estancia: " + hotel);
   console.log("Fecha de entrada: " + entrada);
   console.log("Noches de estancia: " + dropdownMenuButton);
   // resumen.innerHTML = "Hotel para su estancia: " + hotel + "<br>Fecha de entrada: " + entrada + "<br>Noches de estancia: " + dropdownMenuButton;



   alert("Abra la consola para ver el resúmen de su viaje!");


}
function personas() {
   var personas = document.getElementById("habitaciones");
   var numHab = document.getElementById("numHab").value;
   //if (!personas.hasChildNodes()) {
      var adultos = document.createTextNode("Adultos");
      var ninos = document.createTextNode("Niños (0-17 años)");

      var formAdultos = document.createElement("form");
      formAdultos.setAttribute("id", "formularioAdultos");
      var select = document.createElement("select");
      var option1 = document.createElement("option");
      var opt1 = document.createTextNode("1");
      var option2 = document.createElement("option");
      var opt2 = document.createTextNode("2");
      var option3 = document.createElement("option");
      var opt3 = document.createTextNode("3");
      var option4 = document.createElement("option");
      var opt4 = document.createTextNode("4");

      var formNinos = document.createElement("form");
      formNinos.setAttribute("id", "formularioNinos");
      var selectN = document.createElement("select");
      var option1N = document.createElement("option");
      var optN1 = document.createTextNode("1");
      var optionN2 = document.createElement("option");
      var optN2 = document.createTextNode("2");
      var optionN3 = document.createElement("option");
      var optN3 = document.createTextNode("3");


      option1.appendChild(opt1);
      option2.appendChild(opt2);
      option3.appendChild(opt3);
      option4.appendChild(opt4);
      select.appendChild(option1);
      select.appendChild(option2);
      select.appendChild(option3);
      select.appendChild(option4);
      formAdultos.appendChild(select);


      option1N.appendChild(optN1);
      optionN2.appendChild(optN2);
      optionN3.appendChild(optN3);
      selectN.appendChild(option1N);
      selectN.appendChild(optionN2);
      selectN.appendChild(optionN3);
      formAdultos.appendChild(selectN);


      personas.appendChild(adultos);
      personas.appendChild(select);
      personas.appendChild(ninos);
      personas.appendChild(selectN);

  // }
}
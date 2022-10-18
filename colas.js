let cola = new Array();
function crear(){
	var datos=document.getElementById("dato").value;

				cola.push(datos);
        document.getElementById('dato').value="";
}
function salir() {
	alert("Gracias por participar");
}

function mostrar(){
            document.getElementById("ver").innerHTML ="";
          for(let i = 0; i < cola.length; i ++){
          document.getElementById("ver").innerHTML +=(cola[i]+"<br>");
    }
}
function buscar(){
  var buscar = document.getElementById("buscar").value;
          extraerElemento(cola,buscar,0);

}
function extra(){
          //extraerElemento(cola,eli,1);
          document.getElementById("extraer").innerHTML = "";
          document.getElementById("extraer").innerHTML += ("Elemento a extraer:" + cola.shift());
       // document.getElementById("borr").value ="";

}

  function elementos(){
    document.getElementById("elem").innerHTML=" Cantidad de elementos en la cola = "+  cola.length;
  }

  function limpiar(){
        cola = [];
        alert("Datos eliminados");
  }

  function extraerElemento(cola,elemento,del){
    let indice = cola.indexOf(elemento);
    if(indice > -1){
        document.getElementById("datobuscado").innerHTML=(elemento + " se encuentra en la posición: " + indice);
    }else{
      document.getElementById("datobuscado").innerHTML=("El elemento " + elemento + ", NO se encuentra en el arreglo");
    }
  }

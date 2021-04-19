console.log("Equações de Segundo Grau");

var a = prompt('Digite o valor de A:  ');
var b = prompt('Digite o valor de B:  ');
var c = prompt('Digite o valor de C:  ');
var x1;
var x2;


var delta = ((Math.pow(b, 2)) -((4 * a) * c)); //Calculando o delta.

document.writeln('O valor de DELTA é =  ', delta);

//validar a, b e c
if (delta <= 0) {
  document.writeln('Não existem raízes reais.')
  
} else if (delta == 0) {
  var x1 = (b*(delta*2)) / 2 * a;
    document.getElementById('x1').innerHTML = x1;
    }
    else
    {
		  x1 = (-b + Math.sqrt(delta)) / (2 * a);
		  x2 = (-b - Math.sqrt(delta)) / (2 * a);
     
      //imprimir as raízes
      document.writeln('<br> X1 = ', x1.toFixed(2));
      document.writeln('<br> X2 = ', x2.toFixed(2));
    }
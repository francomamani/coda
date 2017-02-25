var express = require('express');
var router = express.Router();
var Fraternidad = require('./fraternidad.js');
var ref = require('./conexion.js');


var lista = [];
lista.push(new Fraternidad("Diablada"));
lista.push(new Fraternidad("Doctoricitos"));
lista.push(new Fraternidad("Ositos"));
lista.push(new Fraternidad("Tobas"));
lista.push(new Fraternidad("Morenada"));
lista.push(new Fraternidad("Chanchitos zona SUD"));
lista.push(new Fraternidad("Los mattesitos xD"));
lista.push(new Fraternidad("Los Dotteros"));
console.log(lista);

/*var object = ref.child("asiento");
object.on('value', function(data){
    console.log(data.val());
    lista.push(data.val());

});
*/


var control = 0;

function diferencia(horaInicio, horaActual){
    a = horaInicio.getTime();
    b = horaActual.getTime();   
    a = (b-a)/(1000);
    return a;
}
function lugar(d){
    d = parseFloat(d);        
    if(d<=300)
        return "AROMA Y 6 DE AGOSTO";
    else
        if(d<=1400)
           return "AV. 6 DE AGOSTO";
        else
            if(d<=2800)
                return "CALLE BOLIVAR";
            else
                return "CALLE A. MIER";
}

function actualizar(){
    var i;
    var t;        
    var d;
    // 0.267 es la velocidad OFICIAL que esta en m/seg
    //float v = (float) 0.267;
    
    // 200.267 es para hacer la prueba del avance rapido, lo pueden modificar esta parte
    // para hacer las pruebas
    var v = 200.267;
    //esto se habilitara  para calcular el promedio de las velocidades.
   // v = ultimavel(lista);
    for(i=0;i<lista.length;i++){                              
        if(lista[i].getEstado()==2){
            lista[i].setHoraActual(new Date());
            t= diferencia(lista[i].getHoraInicio(),lista[i].getHoraActual());
            d = v*t; 
            lista[i].setDistancia(d);                
            lista[i].setNombreUbicacion(lugar(d));
        }
    }    
}
    
router.get('/', function (req, res, next) {
    res.send(lista);
});

router.get('/ingresar', function (req, res, next) {
    if(control<lista.length){
        lista[control].setEstado(1);
        lista[control].setHoraInicio(new Date()); 
        lista[control].setNombreUbicacion("INGRESANDO"); 
        if(control>0)
            lista[control-1].setEstado(2);           
        control=control+1;
        if (control>=lista.length) {
            lista[control-1].setEstado(2);
        }
    }
    actualizar();
    res.send(lista);
   // else
    //  res.send(null);
});
router.get('/terminar', function (req, res, next) {
    var i;
    for(i=0;i<lista.length;i++)
        if(lista[i].getEstado()==2)
            break;
    if(i<lista.length){
        lista[i].setEstado(3);
        lista[i].setNombreUbicacion("AVENIDA CIVICA");
        if(i>0){
            lista[i-1].setEstado(4);
            lista[i-1].setNombreUbicacion("SANTUARIO SOCAVON");
            if(i>1){                    
                lista[i-2].setHoraFinal(new Date());
                lista[i-2].setEstado(5);
                lista[i-2].setNombreUbicacion("FINALIZO");
            }
        } 
    }
    actualizar();
    res.send(lista);       
/*    else
        res.send(null);       */
});



router.get('/reset', function (req, res, next) {
	lista.forEach( function(fraternidad) {
		fraternidad.setHoraInicio(null);
		fraternidad.setHoraActual(null);
		fraternidad.setHoraFinal(null);
		fraternidad.setNombreUbicacion(null);
		fraternidad.setEstado(0);
		fraternidad.setDistancia(0);
	});
	control = 0;
	res.send(lista);
});

router.get('/guardar', function (req, res, next) {
    var fraternidadRef = ref.child("fraternidad");
    lista.forEach( function(fraternidad) {
        fraternidadRef.push(fraternidad.toJson());
    });
    res.send({'exito': 'Fraternidades almanacenadas en la BDD'});
});



module.exports = router;
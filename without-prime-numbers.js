/* 
	@DivNet_
	
	Filtrar números primos de una lista/arreglo y retornar los numeros NO primos ordenados de manera ascendente.
	Filter prime numbers of array/list and return NO prime numbers sorted in ascending order.
*/

function qpn(i) { var r=[],w=0;
	for(;w<=i.length;w++) {
		if(typeof(i[w])=='number') {
			var _i=parseInt(i[w]),d=2,m=true;
			for(;d<_i;d++) {
				if(_i%d==0) { m=false; break; }
			}
			if( !m )r.push(_i);
		}
	}
	f = r.sort(function(a,b){return a - b});
	console.log("List " + f.toString());
	return f;
}
window.onload = qpn([16,18,30,20,35,48,30,100,3,13,40]);
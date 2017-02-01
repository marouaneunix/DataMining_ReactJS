

//Convert String of number to array of number

function convToNumberArr(x){
	var x = x.split(' ');
	var newArray = [];
	for(var i=0;i<x.length;i++){
		newArray.push(parseInt(x[i]));
	}
	console.log(newArray);
	return newArray
}

//Calcule Xbar
function calcBar(x){
	var xBar = 0;
	for(var i=0;i<x.length;i++){
		xBar += x[i];
	}
	xBar = xBar/x.length;
	return xBar;
}

//Calcule de Variante V(x) 1/n 3 Xi^2 - Xbar^20
function calcVariante(x){
	var Xi = 0;
	for(var i=0;i<x.length;i++){
		Xi += Math.pow(x[i], 2);
	}
	Xi = Xi/x.length;
	return Xi - Math.pow(calcBar(x), 2);
}

//Calcule de equartupe 6(x)
function calcEquartipe(x){
	return Math.sqrt(x);
}

//Calcule Covergent
function calcCovergent(x,y){
	var xBar = calcBar(x);
	var yBar = calcBar(y);
	var XiYi = 0;
	for(var i=0;i<x.length;i++){
		XiYi += x[i]*y[i];
	}
	return XiYi/x.length - xBar*yBar;
}


exports.Correlation = function(x, y){
	x = convToNumberArr(x);
	y = convToNumberArr(y);

	var equarX = calcEquartipe(calcVariante(x));
	var equarY = calcEquartipe(calcVariante(y));
	var r =calcCovergent(x,y)/(equarX*equarY);
	console.log("r :"+ r);
	if(r>0.5)
			  return {r: r, msg: "corrélation positive parfait"};
	else if(r<0.5 || r>-0.5)
			  return {r: r, msg: "pas de relation linéaire entre X et Y"};
	else if(r<-0.5)
			  return {r: r, msg: "corrélation négative parfait"};
	else
				return {r: "??", msg: "Imposible !!!"};
}







//Conver String to table of number
function convToNumberArr(x){
	var x = x.split(' ');
	var newArray = [];
	for(var i=0;i<x.length;i++){
		newArray.push(parseInt(x[i]));
	}
	console.log(newArray);
	return newArray;
}

//detect Min
function MinValue(array){
	return Math.min(...array);
}

//detect Max
function MaxValue(array){
	return Math.max(...array);
}

//Distance euclidient
//Math.sqrt(Math.pow((Ax-Bx),2));

//calct distance clusterMin
function disClucterMin(array1, array2){
	array1 = convToNumberArr(array1);
	array2 = convToNumberArr(array2);
	return Math.sqrt(Math.pow((MinValue(array1)-MinValue(array2)),2));
}

//calc distance clusterMax
function disClucterMax(array1, array2){
	array1 = convToNumberArr(array1);
	array2 = convToNumberArr(array2);
	return Math.sqrt(Math.pow((MaxValue(array1)-MaxValue(array2)),2));
}

console.log(disClucterMin("1 6 5 8 4","2 3 5 4 8 6 8 5"));

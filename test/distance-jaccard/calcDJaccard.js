



//Function to transfor String to Array
function convToNumberArr(array){
	var array = array.split(' ');
	var newArray = [];
	for(var i=0;i<array.length;i++){
		newArray.push(parseInt(array[i]));
	}
	return newArray;
}

//Funcrion to transfer String to array
function convToNumberArrV1(array){
	var newArray = [];
	for(var i=0;i<array.length;i++){
		newArray.push(parseInt(array[i]));
	}
	return newArray;
}

//Function to calcul M11
function M11(array1, array2){
	var compteurM11=0;
	var compteurM00=0;
	var compteurM10=0;
	var compteurM01=0;
	for(var i=0;i<array1.length;i++){
		if(array1[i] == 1 && array2[i] == 1){
			compteurM11 += 1;
		}else if(array1[i] == 0 && array2[i] == 0){
			compteurM00 += 1;
		}else if(array1[i] == 1 && array2[i] == 0){
			compteurM10 +=1;
		}else{
			compteurM01 +=1;
		}
	}
	return {
		M11 : compteurM11,
		M00 : compteurM00,
		M10 : compteurM10,
		M01 : compteurM01
	}
};


//Function to calcul j
function calclDJaccard(array1, array2){
	var array1 = convToNumberArrV1(array1);
	var array2 = convToNumberArrV1(array2);
	console.log(array1);
	console.log(array2);
	var M = M11(array1, array2);
	var J = M.M11 / (array1.length - M.M00);
	return 1-J;
};


console.log(calclDJaccard("1010000","1001011"));


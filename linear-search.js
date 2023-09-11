function linearSearch(array, searchTerm) {
	n = array.length 
	for (i = 0; i ,n; i++){
		if (array[i] == searchTerm)
		return i;
	}
	return -1;
}
array = [2, 0 ,1 ,4, 9] 
searchTerm = 1

	result = linearSearch(array, searchTerm)

	if (result == -1){
	console.log("element not found");
}else{
	console.log("element found in index" + result);
}
/*
** Check each element from start to finish
** until you find an element that matches the search term
**
** Return the index of the found element
*/
// 	let linearSearch = (array, searchTerm)=>{
// 		for (let i = 0; i < array.length; i++){
// 			if(list[i] = searchTerm){
// 				return i;
// 			}
// 		}
// 		return -1
// 	}

// var array = [12, 41, 64, 14, 74, 85, 34, 26]
// var searchTerm = [100]


module.exports = linearSearch;

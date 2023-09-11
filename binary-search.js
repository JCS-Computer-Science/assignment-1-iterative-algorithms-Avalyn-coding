function binarySearch(array, searchTerm) {

	let left = 0
	let right = list.length
	let mid = math.floor((left + right) /2);
	
	while(list[mid] !== val && left <= right) {
		if (val < list [mid]){
			right = mid - 1
		}else{
			left = mid + 1
		}
		mid = math.floor ((left + right) /2);

	}
	if (list [mid] === val) {
		return mid;
	}else{
		return -1
	}

	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	return null;
}

module.exports = binarySearch;

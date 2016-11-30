// Model //

// View //

// Controller //
	
function modifyQty(val) {
	var qty = document.getElementById("qty").value 
	var newQty = parseInt(qty, 10) + val

	document.getElementById("qty").value = newQty
	return newQty
}




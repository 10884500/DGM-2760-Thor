const pizza = {
	size: "",
	crustType: "",
	topping: "",
	order: "",

	build: () => {
		var buildPizza = "You have built a "+pizza.size+", "+pizza.crustType+" pizza with "+pizza.topping+".";
		document.getElementById('feedback').innerHTML = buildPizza;
    },
    
	list: () => {
		let flour = 1
		if (pizza.crustType === 'thick crust') flour *= 2
		if (pizza.size === 'large') flour *= 2
		if (pizza.crustType === 'thin crust') flour *= 1
		if (pizza.size === 'medium') flour *= 1
		message = `You need to pickup ${flour} flour for this pizza`
		document.getElementById('shop').innerHTML = message;
	}
};

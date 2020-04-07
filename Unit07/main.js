const pizza = {
	size: "",
	crustType: "",
	topping: "",
	order: "",

	build: function() {
		var buildPizza = "You have built a "+pizza.size+", "+pizza.crustType+" pizza with "+pizza.topping+".";
		document.getElementById('feedback').innerHTML = buildPizza;
    },
    
	placeOrder: function() {
		if (pizza.order == 'Delivery') {
			document.getElementById('pizzaOrder').innerHTML = "Thank you, your order will be there in 20 minutes.";
		}
		if (pizza.order == 'Carryout') {
			document.getElementById('pizzaOrder').innerHTML = "Thank you! Your order will be ready to pick up in about 15 minutes.";
		} 
	}
};

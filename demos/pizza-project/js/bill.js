var total = 0;


	function bill(){
		cancelValues();
		size();
		veggies();
		meats();
		cheese();
		crust();
		total = parseInt(sizeTotal,10) + parseInt(veggieTotal,10) + parseInt(meatsTotal,10) + parseInt(cheeseTotal,10) + parseInt(crustTotal,10);
		document.getElementById('total-price').innerHTML = "$ " + parseFloat(total).toFixed(2);

	}

	function size(){

		var size = document.querySelector('input[name = "size"]:checked').value; 
		
		if (size == "personal") {
			sizeTotal = 6;
		} else if (size == "medium") {
			sizeTotal = 10;
		} else if (size == "large") {
			sizeTotal = 14;
		}else if (size == "extra large") {
			sizeTotal = 16;
		};

		document.getElementById('size-price').innerHTML = "$ " + parseFloat(sizeTotal).toFixed(2);
		document.getElementById('size-checked').innerHTML = size + " Pizza";
		 
		
	};


	// Function collecting checked veggies in an array and outputting list of them and price in a div

		function veggies(){
				var extraOverOne = [0, 1, 1, 1, 1, 1, 1, 1, 1]
				var veggiesChecked = [];
				var veggiesElements = document.getElementsByName('veggies');

				for (var i = 0; i <= veggiesElements.length-1; i++){
					if (veggiesElements[i].checked) {
					veggiesChecked.push(veggiesElements[i]);

					};
				};

				for (var i = 0; i <= veggiesChecked.length-1; i++){
					document.getElementById('veggies-checked').innerHTML += veggiesChecked[i].value + "<br>";
				};

				for (var i = 0; i <= veggiesChecked.length-1; i++){
					document.getElementById('veggies-price').innerHTML += "$ " + parseFloat(extraOverOne[i]).toFixed(2) + "<br>";
				};

				if (veggiesChecked.length >= 1){
					veggieTotal = veggiesChecked.length-1;
				}else{
					veggieTotal = 0;
				}
			
			}
			////////////////////////////////////////////////////


			// Function collecting checked veggies in an array and outputting list of them and price in a div

			

		function meats(){
				var extraOverOne = [0, 1, 1, 1, 1, 1, 1, 1, 1]
				var meatsChecked = [];
				var meatsElements = document.getElementsByName('meats');

				for (var i = 0; i <= meatsElements.length-1; i++){
					if (meatsElements[i].checked) {
					meatsChecked.push(meatsElements[i]);

					};
				};

				for (var i = 0; i <= meatsChecked.length-1; i++){
					document.getElementById('meats-checked').innerHTML += meatsChecked[i].value + "<br>";
				};

				for (var i = 0; i <= meatsChecked.length-1; i++){
					document.getElementById('meats-price').innerHTML +=  "$ " + parseFloat(extraOverOne[i]).toFixed(2) + "<br>";
				};
				
				if (meatsChecked.length >= 1){
					meatsTotal = meatsChecked.length-1;
				}else{
					meatsTotal = 0;
				}
			
			}
			////////////////////////////////////////////////////



				// Function collecting checked veggies in an array and outputting list of them and price in a div

			

		function cheese(){

			var cheese = document.querySelector('input[name = "cheese"]:checked').value; 
			
			if (cheese == "extra") {
				cheeseTotal = 3;
			} else  {
				cheeseTotal = 0;
			};

			document.getElementById('cheese-checked').innerHTML = cheese + " Cheese";
			document.getElementById('cheese-price').innerHTML =   "$ " + parseFloat(cheeseTotal).toFixed(2);;

			
		};
			////////////////////////////////////////////////////


			// Function collecting checked veggies in an array and outputting list of them and price in a div

			

		function crust(){

			var crust = document.querySelector('input[name = "crust"]:checked').value; 
			
			if (crust == "cheese-stuffed") {
				crustTotal = 3;
			} else {
				crustTotal = 0;
			};

			document.getElementById('crust-checked').innerHTML = crust + " Crust";
			document.getElementById('crust-price').innerHTML =  "$ " + parseFloat(crustTotal).toFixed(2);
		};
			////////////////////////////////////////////////////



			//Resets all vars to empty, all checkmarks to default///////

			function resetValues(){
				document.getElementById('card0').reset();
				document.getElementById('card1').reset();
				document.getElementById('card2').reset();
				document.getElementById('card3').reset();
				document.getElementById('card4').reset();
				document.getElementById('meats-price').innerHTML = " ";
				document.getElementById('meats-checked').innerHTML =" ";
				document.getElementById('veggies-price').innerHTML = " ";
				document.getElementById('veggies-checked').innerHTML =" ";
				
			};

				function cancelValues(){
				document.getElementById('meats-price').innerHTML = " ";
				document.getElementById('meats-checked').innerHTML =" ";
				document.getElementById('veggies-price').innerHTML = " ";
				document.getElementById('veggies-checked').innerHTML =" ";
			

				}
			
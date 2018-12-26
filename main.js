let x = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=rainbow';	
		let request = new XMLHttpRequest();

		request.open('GET', x, {
			dataType: 'josnp',
			cors: true
		});
		
		request.onload = function(data) {
			console.log(data);
		};

		request.send(); 



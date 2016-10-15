(function(){
	var imageService = new ImageService;
	//Your ImageService is a global constructor function what can you do here if you new it up?
	imageService.getImage(updateBackground);
	function updateBackground(randImg) {
		console.log(randImg);
		var parsedImg = JSON.parse(randImg);
		console.log(parsedImg);
		$('body').css('background-image', 'url(' + parsedImg.large_url + ')');
	}
}())

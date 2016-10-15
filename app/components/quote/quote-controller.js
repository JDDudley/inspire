(function(){
	var quoteService = new QuoteService();
	//Get your QuoteService
	quoteService.getQuote(printQuote);
	function printQuote(quote) {
		var objQuote = JSON.parse(quote);
		var template = '';
		template += `<h4 id="quote-text" title="${objQuote.author}">${objQuote.quote}</h4>`
		$('#quote').html(template);
	}
}())

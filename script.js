(function() { // Author Jaci Felicio url: jfelicio.me
	var jFelicio = function( arg ) {
		if ( ! ( this instanceof jFelicio ) ) {
			return new jFelicio( arg );
		}

		this.myArg = arg;
	}

	jFelicio.fn = jFelicio.prototype = { 
		esconde: function() { 
			//document.querySelector(this.myArg).setAttribute('style','display:none');
			document.querySelector(this.myArg).style.display = 'none';
		}
	}
	
	window.jFelicio = jFelicio, window.$ = jFelicio;


})();

(function() {
	$('div').esconde();
})();

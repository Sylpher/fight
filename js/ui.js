function _UI(s) {
	
	this.genBar = function(value, max, color) {
		color = typeof color !== 'undefined' ? color : 'r';
		var result = '[<span class="' + color + '">';
		
		for(var bars=0; bars < value; bars++) {
			result += '|';
		}
		
		result += '</span>';
		
		for(var dots=0; dots < max-value; dots++) {
			result += '.';
		}
		
		result += '] ' + value + '/' + max;
		return result;
	};

	this.genNum = function(value, max, color) {
		color = typeof color !== 'undefined' ? color : 'r';
		var result = '<span class="' + color + '">';
		
		if(max == -1)
			result += value;
		else
			result += value + '/' + max;

		result += '</span>';
		return result;
	};
	
	this.genDot = function(value, dot) {
		dot = typeof dot !== 'undefined' ? dot : '[]';
		var result = '';
		
		for(var dots=0; dots < value; dots++) {
			result += dot;
		}
		
		return result;
	};

	this.genButtonGrid = function(g) {
		var result = '';
		var empty = 9 - g.length;
		
		for(var i=0; i < g.length; i++) {
			result += '<div id="ui-grid-button-' + i + '" class="ui-button  ui-button-grid">' + g[i].text + '</div>';
		}
		
		for(var i=0; i < empty; i++) {
			result += '<div class="ui-button-empty"></div>';
		}

		$('#action-grid').html(result);

		// Hook in events
		for(var i=0; i < g.length; i++) {
			$('#ui-grid-button-' + i).click(g[i].context, g[i].click);
			//result += '<div id="ui-grid-button-' + i + '" class="ui-button  ui-button-grid">' + g[i].text + '</div>';
		}

		//return result;
	};

	this.modalWin = function(text, ok) {
		$('div#ui-modal').html(text).append('<div class="ui-modal-button">' + ok + '</div>');
		$('div#ui-modal-wrap').show();
		$('div.ui-modal-button').click(function(){
			$('div#ui-modal-wrap').hide();
		});
	};
};

var UI = new _UI();

function Anima(s, id) {
	this._seed = s;
	this._id = id;
	this._name = 'NOF';
	this._health = 0;
	this._power = 0;
};

Anima.prototype.genName = function() {
	var mt1 = new MersenneTwister19937();
	mt1.init_by_string(this._seed);
	
	this._health = mt1.genrand_int32() % 20;
	this._power = mt1.genrand_int32() % 20;
	
	this.toString();
};

Anima.prototype.toString = function() {
	var stats = '';
	stats += '<li><em>N</em>' + this._name + '</li>';
	stats += '<li><em>H</em>' + UI.genBar(this._health, 20) + '</li>';
	stats += '<li><em>P</em>' + UI.genBar(this._power, 20, 'y') + '</li>';
	$('#' + this._id + ' .stats').append(stats);
};

function Ghov(s, id) {
	this._seed = s;
	this._id = id;
	this._name = 'Ghov';
};

Ghov.prototype = new Anima();
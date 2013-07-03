function Anima(s, id) {
	this._seed = s;
	this._id = id;
	this._name = 'NOF';
	this._health = 0;
	this._power = 0;

	this._max = {
		health: 100,
		power: 100
	};
};

Anima.prototype.genName = function() {
	var mt1 = new MersenneTwister19937();
	mt1.init_by_string(this._seed);
	
	this._health = Math.ceil(mt1.dice(this._max.health, 2).average);
	this._power = Math.ceil(mt1.dice(this._max.power, 2).average);
	
	this.toString();
};

Anima.prototype.toString = function() {
	var stats = '';
	stats += '<li><em>S</em>' + this._seed + '</li>';
	stats += '<li><em>N</em>' + this._name + '</li>';
	stats += '<li><em>H</em>' + UI.genBar(this._health, this._max.health) + '</li>';
	stats += '<li><em>P</em>' + UI.genBar(this._power, this._max.power, 'y') + '</li>';
	$('#' + this._id + ' .stats').append(stats);
};

function Ghov(s, id) {
	this._seed = s;
	this._id = id;
	this._name = 'Ghov';
};

Ghov.prototype = new Anima();

function Guy(s) {
	_seed = s;
	_name = '';
	_health = 0;
	_power = 0;
	_punch = 10;
	_block = 10;
	_mt = 0;

	_max = {
		health: 100,
		power: 100
	};
	
	this.genName = function() {
		_mt = new MersenneTwister19937();
		_mt.init_by_string(_seed);
		
		_name = _tname[_mt.genrand_int32() % _tname.length];
		_name += _fname[_mt.genrand_int32() % _fname.length] + ' ';
		_name += _mname[_mt.genrand_int32() % _mname.length] + '. ';
		_name += _lname[_mt.genrand_int32() % _lname.length];
		
		_health = Math.ceil(_mt.dice(_max.health, 2).average);
		_power = Math.ceil(_mt.dice(_max.power, 2).average);
		
		_punch = _mt.dice(6, 2).total;
		_block = _mt.dice(6, 2).total;

		this.toString();
	};

	this.gridTop = function(e) {
		var context = typeof e !== 'undefined' ? e.data : this;

		g = [
				{text:'<ul><li>Punch</li><li><em>P</em>' + UI.genNum(_punch, -1, 'y') + '</li></ul>', click:context.actionPunch, context:context},
				{text:'<ul><li>Block</li><li><em>P</em>' + UI.genNum(_block, -1, 'y') + '</li></ul>', click:context.actionBlock, context:context},
				{text:'Sub-Menu Test', click:context.gridSubMenuTest, context:context}
		];
	
		UI.genButtonGrid(g);
	}

	this.actionPunch = function(e) {
		Arena.Act();
		//UI.modalWin('<p>POP!</p>', 'Ok, thanks.');
	}

	this.actionBlock = function(e) {
		
		var text = '';
		var a = 0;

		for(var i=0; i < 50000; i++) {
			d = _mt.dice(100, 2).average;

			if(d>50)
				a += 1;
		}

		text += (a/50000);

		UI.modalWin('<p>' + text + '</p>', 'Ok, thanks.');
	}
	
	this.gridSubMenuTest = function(e) {
		var context = typeof e !== 'undefined' ? e.data : this;

		g = [
				{text:'..', click:context.gridTop, context:context},
				{text:'poo'},
				{text:'doo'},
				{text:'noo'}
		];
	
		UI.genButtonGrid(g);
	}

	this.resolveAttack = function(d) {
		_health = _health-1;

		if(_health == 0) 
			return true;

		return false;
	};
	
	this.toString = function() {
		var stats = '';

		stats += '<li><em>S</em>' + _seed + '</li>';
		stats += '<li><em>N</em>' + _name + '</li>';
		stats += '<li><em>H</em>' + UI.genBar(_health, _max.health) + '</li>';
		stats += '<li><em>P</em>' + UI.genBar(_power, _max.power, 'y') + '</li>';
		$('#player-strip .stats').html(stats);

		this.gridTop();
	}
	
	var _tname = ['Dr. ', '', 'Ms. ', '', 'Mr. ', '', 'Mrs. ', ''];
	var _fname = ['Steven', 'Grogar', 'Eric', 'Chris', 'Amberle', 'Todd', 'Gilbert', 'Victor', 'Yoda', 'Dick', 'Richard', 'Las', 'Pete', 'Luke', 'Anakin'];
	var _mname = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	var _lname = ['Todisco', 'Unwilling', 'Fueresteanke...?', 'Feurstein', 'Johnson', 'Weidman', 'Dracula', 'Wideman', 'Johanson', 'Skywalker'];
	var _rank = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];
	var _class = [0, 1, 2, 3, 4, 5, 6];
};

//function gridTop(e) {
//	g = [
//			{text:'<ul><li>Lorem</li></ul>', click:gridLorem},
//			{text:'<ul><li>Mid</li><li>P: ' + UI.genNum(100, -1, 'y') + '</li></ul>', click:gridLorem},
//			//{text:'<ul><li>High</li><li>P: ' + UI.genNum(7, 7, 'y') + '</li></ul>'},
//			//{text:'<ul><li>Block</li></ul>'},
//			{text:'Sub-Menu Test', click:gridSubMenuTest}
//	];
//
//	UI.genButtonGrid(g);
//}
//
//function gridLorem(e) {
//	var text = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>';
//	text += '<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';
//	UI.modalWin(text, 'Ok, thanks.');
//}
//
//function gridSubMid(e) {
//	UI.modalWin('Pew!', 'Ok, thanks.');
//}
//
//function gridSubMenuTest(e) {
//	g = [
//			{text:'..', click:gridTop},
//			{text:'poo'},
//			{text:'doo'},
//			{text:'noo'}
//	];
//
//	UI.genButtonGrid(g);
//}

function Guy(s) {
	_seed = s;
	_name = '';
	_health = 0;
	_power = 0;
	
	this.genName = function() {
		var mt1 = new MersenneTwister19937();
		mt1.init_by_string(_seed);
		
		_name = _tname[mt1.genrand_int32() % _tname.length];
		_name += _fname[mt1.genrand_int32() % _fname.length] + ' ';
		_name += _mname[mt1.genrand_int32() % _mname.length] + '. ';
		_name += _lname[mt1.genrand_int32() % _lname.length];
		
		_health = mt1.genrand_int32() % 20;
		_power = mt1.genrand_int32() % 20;
		
		this.toString();
	};

	this.gridTop = function(e) {
		var context = typeof e !== 'undefined' ? e.data : this;

		g = [
				{text:'<ul><li>Lorem</li></ul>', click:context.gridLorem, context:context},
				{text:'<ul><li>Mid</li><li>P: ' + UI.genNum(100, -1, 'y') + '</li></ul>', click:context.gridLorem, context:context},
				{text:'Sub-Menu Test', click:context.gridSubMenuTest, context:context}
		];
	
		UI.genButtonGrid(g);
	}

	this.gridLorem = function(e) {
		var text = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>';
		text += '<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';
		UI.modalWin(text, 'Ok, thanks.');
	}

	this.gridSubMid = function(e) {
		UI.modalWin('Pew!', 'Ok, thanks.');
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
	
	this.toString = function() {
		var html = '';
		var stats = '';

		stats += '<li><em>N</em>' + _name + '</li>';
		stats += '<li><em>H</em>' + UI.genBar(_health, 20) + '</li>';
		stats += '<li><em>P</em>' + UI.genBar(_power, 20, 'y') + '</li>';
		$('#player-strip .stats').append(stats);

		html += '<div id="action-grid"></div>';
		$('#player').append(html);
		this.gridTop();
	}
	
	var _tname = ['Dr. ', '', 'Ms. ', '', 'Mr. ', '', 'Mrs. ', ''];
	var _fname = ['Steven', 'Grogar', 'Eric', 'Chris', 'Amberle', 'Todd', 'Gilbert', 'Victor', 'Yoda', 'Dick', 'Richard', 'Las', 'Pete', 'Luke', 'Anakin'];
	var _mname = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	var _lname = ['Todisco', 'Unwilling', 'Fueresteanke...?', 'Feurstein', 'Johnson', 'Weidman', 'Dracula', 'Wideman', 'Johanson', 'Skywalker'];
	var _rank = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];
	var _class = [0, 1, 2, 3, 4, 5, 6];
};

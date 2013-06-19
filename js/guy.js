function gridTop(e) {
	g = [
			{text:'<ul><li>Lorem</li></ul>'},
			//{text:'<ul><li>Mid</li><li>P: ' + UI.genNum(100, -1, 'y') + '</li></ul>'},
			//{text:'<ul><li>High</li><li>P: ' + UI.genNum(7, 7, 'y') + '</li></ul>'},
			//{text:'<ul><li>Block</li></ul>'},
			{text:'Sub-Menu Test'}
	];

	var grid = UI.genButtonGrid(g);
	$('#action-grid').html(grid);
	$('#ui-grid-button-0').click(gridSubLow);
	//$('#ui-grid-button-1').click(gridSubMid);
	$('#ui-grid-button-1').click(gridSubMenuTest);
}

function gridSubLow(e) {
	UI.modalWin('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 
		'Ok, thanks.')
}

function gridSubMid(e) {
	UI.modalWin('Pew!', 'Ok, thanks.')
}

function gridSubMenuTest(e) {
	g = [
			{text:'..'},
			{text:'poo'},
			{text:'doo'},
			{text:'noo'}
	];

	var grid = UI.genButtonGrid(g);
	$('#action-grid').html(grid);
	$('#ui-grid-button-0').click(gridTop);	
}

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
	
	this.toString = function() {
		var html = '';
		var stats = '';

		stats += '<li><em>N</em>' + _name + '</li>';
		stats += '<li><em>H</em>' + UI.genBar(_health, 20) + '</li>';
		stats += '<li><em>P</em>' + UI.genBar(_power, 20, 'y') + '</li>';
		$('#player-strip .stats').append(stats);

		html += '<div id="action-grid"></div>';
		$('#player').append(html);
		gridTop();
	}
	
	var _tname = ['Dr. ', '', 'Ms. ', '', 'Mr. ', '', 'Mrs. ', ''];
	var _fname = ['Steven', 'Grogar', 'Eric', 'Chris', 'Amberle', 'Todd', 'Gilbert', 'Victor', 'Yoda', 'Dick', 'Richard', 'Las', 'Pete', 'Luke', 'Anakin'];
	var _mname = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	var _lname = ['Todisco', 'Unwilling', 'Fueresteanke...?', 'Feurstein', 'Johnson', 'Weidman', 'Dracula', 'Wideman', 'Johanson', 'Skywalker'];
	var _rank = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];
	var _class = [0, 1, 2, 3, 4, 5, 6];
};
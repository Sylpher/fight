function _Arena(s) {
  this._user = 0;
	this._opponent = 0;

	this.User = function(u) {
		this._user = u;
	}

	this.Opponent = function(o) {
		this._opponent = o;
	}

	this.Update = function() {
		this._user.genName();
		this._opponent.genName();
	};

	this.Act = function() {
		if(this._user.resolveAttack(1)) {
			UI.modalWin('<p>OVER!</p>', 'Ok, thanks.');
		}

		this._user.toString();
	};

	this.toString = function() {
	};
};

var Arena = new _Arena();

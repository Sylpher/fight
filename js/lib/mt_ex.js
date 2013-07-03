// Mersenne Twister class extensions to make it a little nicer to work with.

// Converts a string into an int array to feed into init_by_array
MersenneTwister19937.prototype.init_by_string = function(seed) {
	var s = new Array(seed.length);
	for(var c=0; c<s.length; c++) {
		s[c] = seed.charCodeAt(c);
	}
	this.init_by_array(s, s.length);
};

// Simple dice roller. Returns each die, total and average.
MersenneTwister19937.prototype.dice = function(sides, num) {
	var d = { dice: new Array(num), total: 0, average:0 };
	for(var c=0; c<num; c++) {
		d.dice[c] = (this.genrand_int32() % sides) + 1; // +1 zero based
		d.total += d.dice[c];
	}
	d.average = d.total / num;
	return d;
};

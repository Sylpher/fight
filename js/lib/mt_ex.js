// Mersenne Twister class extensions to make it a little nicer to work with.

// Converts a string into an int array to feed into init_by_array
MersenneTwister19937.prototype.init_by_string = function(seed) {
	var s = new Array(seed.length);
	for(var c=0; c<s.length; c++) {
		s[c] = seed.charCodeAt(c);
	}
	this.init_by_array(s, s.length);
};

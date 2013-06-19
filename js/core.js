var ver = '0.2';

function genRandomString(len) {
	var result = '';
	var now = new Date();
	var seed = now.getTime().toString();
	var genString = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	var genArray = genString.split('');
	var mt = new MersenneTwister19937();
	
	mt.init_by_string(seed);
	
	for(var i=0; i<len; i++)
		result += genArray[mt.genrand_int32() % genArray.length];
	
	return result;
};

// Dumb stuff the browser should already do.
function getParameterByName(name) {
	name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	var results = regex.exec(window.location.search);
	if(results == null) {
		return "";
	} else {
		return decodeURIComponent(results[1].replace(/\+/g, " "));
	}
};
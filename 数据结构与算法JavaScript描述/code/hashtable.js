function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
	// this.get = get;
}

function simpleHash(data) {
	var total = 0;
	for (var i = 0; i < data.length; ++i) {
		total += data.charCodeAt(i);
	}
	return total % this.table.length;
}

function put(data) {
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}


function showDistro() {
	var n = 0;
	for (var i = 0; i < this.table.length; ++i) {
		if (this.table[i] != undefined) {
			print(i + ": " + this.table[i]);
		}
	}
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();

for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i]);
}
hTable.showDistro();




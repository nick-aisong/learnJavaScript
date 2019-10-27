function Set() {
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show = show;
	this.contains = contains;
}

function add(data) {
	if (this.dataStore.indexOf(data) < 0) {
		this.dataStore.push(data);
		return true;
	}
	else {
		return false;
	}
}

function remove(data) {
	var pos = this.dataStore.indexOf(data);
	if (pos > -1) {
		this.dataStore.splice(pos, 1);
		return true;
	}
	else {
		return false;
	}
}

function show() {
	return this.dataStore;
}


function contains(data) {
	if (this.dataStore.indexOf(data) > -1) {
		return true;
	}
	else {
		return false;
	}
}

function union(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; ++i) {
		tempSet.add(this.dataStore[i]);
	}
	for (var i = 0; i < set.dataStore.length; ++i) {
		if (!tempSet.contains(set.dataStore[i])) {
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}
	return tempSet;
}

function intersect(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}


function subset(set) {
	if (this.size() > set.size()) {
		return false;
	}
	else {
		for(var i = 0; i< this.dataStore.length; ++i) {
			if (!set.contains(this.dataStore[i])) {
				return false;
			}
		}
	}
	return true;
}

function size() {
	return this.dataStore.length;
}

function difference(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (!set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

var it = new Set();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");
var dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");
if (dmp.subset(it)) {
print("DMP is a subset of IT.");
}
else {
print("DMP is not a subset of IT.");
}
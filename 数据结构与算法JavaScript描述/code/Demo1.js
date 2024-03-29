function List() {
this.listSize = 0;
this.pos = 0;
this.dataStore = [];
this.clear = clear;
this.find = find;
this.toString = toString;
this.insert = insert;
this.append = append;
this.remove = remove;
this.front = front;
this.end = end;
this.prev = prev;
this.next = next;
this.lenght = length;
this.currPos = currPos;
this.moveTo = moveTo;
this.getElement = getElement;
this.length = length;
this.contains = contains;
this.hasNext = hasNext;
this.hasPrev = hasPrev;
}

function append(element) {
	this.dataStore[this.listSize++] = element;
}

function find(element) {
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (this.dataStore[i] == element) {
			return i;
		}
	}
	return -1;
}

function remove(element) {
	var foundAt = this.find(element);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}

function length() {
	return this.listSize;
}

function toString() {
	return this.dataStore;
}

function insert(element, after) {
	var insertPos = this.find(after);
	if (insertPos > -1) {
		this.dataStore.splice(insertPos+1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}

function clear() {
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.post = 0;
}

function contains(elemet) {
	return (this.find(elemet) != -1);
}

function front() {
	this.pos = 0;
}

function end() {
	this.pos = this.listSize - 1;
}

function prev() {
//if (this.pos > 0) {
	--this.pos;
//}
}

function next() {
//if (this.pos < this.listSize - 1) {
	++this.pos;
//} 
}

function currPos() {
	return this.pos;
}

function hasNext() {
	return this.pos < this.length();
}

function hasPrev() {
	return this.pos >= 0;
}

function moveTo(position) {
	this.pos = position;
}

function getElement() {
	return this.dataStore[this.pos];
}


var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

// for(names.front(); names.hasNext(); names.next()) {
// 	print(names.getElement());
// }


for(names.end(); names.hasPrev(); names.prev()) {
	print(names.getElement());
}
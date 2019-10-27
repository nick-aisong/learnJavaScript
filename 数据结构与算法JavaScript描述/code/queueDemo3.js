function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element) {
	this.dataStore.push(element);
}

function dequeue() {
	var entry = 0;
	for (var i = 1; i < this.dataStore.length; ++i) {
		if (this.dataStore[i].code < this.dataStore[entry].code) {
			entry = i;
		}
	}
	return this.dataStore.splice(entry, 1);
}

function front() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length-1]
}

function toString() {
	var reStr = "";
	for (var i = 0; i < this.dataStore.length; ++i) {
		reStr += this.dataStore[i].name + " code: " 
			+ this.dataStore[i].code + "\n";
	}
	return reStr;
}

function empty() {
	if (this.dataStore.length == 0) {
		return true;
	}
	else {
		return false;
	}
}


function Patient(name, code) {
	this.name = name;
	this.code = code;
}

var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());
// 下一轮
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());








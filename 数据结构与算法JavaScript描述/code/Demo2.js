var movies = read("films.txt").split('\n');
// print(movies);

// function createArr(file) {
// 	var arr = read("films.txt").split("\n");
// 	for (var i = 0; i < arr.length; ++i) {
// 		arr[i] = arr[i].trim();
// 	}
// 	return arr;
// }

// arr = createArr();
// for (var i = 0; i <  arr.length; ++i) {
// 	print(arr[i]);
// }

var movieList = new List();
for (var i = 0; i < movies.length; ++i) {
	movieList.append(movies[i]);
}
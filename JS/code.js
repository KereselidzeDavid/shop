// Данный код выводит все элементы массива по порядку, и показывает значение каждого элемента.
// Посчитывает общее кол-во элементов в массиве. Показывает максимальное значение. 
// Записывает все элементы с макс.значением в массив и выводит в консоль эти элементы.

		var scores = [60, 50, 60, 58, 54, 54,
					  58, 50, 52, 54, 48, 69,
					  34, 55, 51, 52, 44, 51,
					  69, 64, 66, 55, 52, 61,
					  46, 31, 57, 52, 44, 18,
					  41, 53, 55, 61, 51, 44];

		function printAndGetHighScore (scores) {
			var output;
			var highScore = 0;

			for(var i = 0; i < scores.length; i++) {
				output = "test #" + i +
						" score: " + scores[i];
				console.log(output);

				if (scores[i] > highScore) {
					highScore = scores[i];
				}
			}
			return highScore;

		}

		var highScore = printAndGetHighScore(scores);

		console.log("tests: " + scores.length);
		console.log("Highest score: " + highScore);

		function getBestResults(scores, highScore) {

			var bestSolutions = [];

			for (var i = 0; i < scores.length; i++) {

				if (scores[i] == highScore) {
					bestSolutions.push(i);
				}
			}
			return bestSolutions;

		}

		var bestSolutions = getBestResults(scores, highScore);

		console.log("Tests with the highest score: " + bestSolutions);


// Данный код берет входной массив и суммирует каждый элемент массива с последующими,
// после чего выводит в консоль все комбинации сумма которых равна 10.

var arr = [2, 4, 5, 1, 7, 9,
		   4, 6, 3, 7, 3, 8];

		var output;

		function Summ(arr) {
			for (var m = 0; m < arr.length; m++) {
				for (var i = m + 1; i < arr.length; i ++) {
					output = arr[m] + arr[i];
					if (output === 10) {
						console.log(arr[m] + " + " + arr[i] + " равняется " + output);
					}
				}
			}
		}

		Summ(arr);


const arrayOfStringsToArrayOfObjects = function (arrayOfStrings, optionValue, minOption, maxOption, limitFrequency) {
	let arrayOfObjects = [];
	let frequencyChart = {};
	arrayOfStrings.forEach((item) => {
		const object = {};
		object.name = item;
		let randomOption = checkOption(optionValue, minOption, maxOption, limitFrequency, frequencyChart);
		if (!frequencyChart[randomOption]) {
			frequencyChart[randomOption] = 1;
			object.option = randomOption;
		} else {
			frequencyChart[randomOption]++;
			object.option = randomOption;
		}
		arrayOfObjects.push(object);
	});
	frequencyChart = objectToArray(frequencyChart);
	return {
		arrayOfObjects, frequencyChart
	};
};

const randIntegerFromMinToMax = function (min, max) {
	let random = min + Math.random() * (max + 1 - min);
	random = Math.floor(random);
	return random;
};

const checkOption = function(optionValue, minOption, maxOption, limitFrequency, frequencyChart) {
	debugger;
	let value = optionValue(minOption, maxOption);
	console.log(frequencyChart, 'frequencyChart');
	let currentFrequency = frequencyChart[value];
	if (currentFrequency === limitFrequency) {
		checkOption (optionValue, minOption, maxOption, limitFrequency, frequencyChart);
	} else {
		return value;
	}
	window.frequencyChart = frequencyChart;

};

const objectToArray = function(object) {
	// for (option in object) {
	// 	console.log(`${option} : ${object[option]}`);
	// }
	return Object.entries(object).map(([key, value]) =>	({key, value}));
};

const studentsData = ["Береснев Артем", "Жаров Александр", "Железников Свелий", "Зотова Анастасия", "Иванова Екатерина", "Илларионова Маргарита", "Максимов Артемий", "Мансурова Екатерина", "Мелешенко Олеся", "Миков Влад", "Михайлов Богдан", "Петрова Аня", "Пуртов Денис", "Солодовникова Анна", "Сорокин Иванн", "Сухотерин Богдан", "Томашик Полина", "Устинова Полина", "Фелисеева Анна", "Шипелова Лина"];
// const studentsData = ["Береснев Артем", "Жаров Александр", "Железников Свелий", "Зотова Анастасия", "Иванова Екатерина", "Илларионова Маргарита", "Максимов Артемий", "Мансурова Екатерина", "Мелешенко Олеся", "Миков Влад", "Михайлов Богдан", "Петрова Аня", "Пуртов Денис", "Солодовникова Анна", "Сорокин Иванн", "Сухотерин Богдан", "Томашик Полина", "Устинова Полина", "Фелисеева Анна", "Шипелова Лина", "Береснев Артем", "Жаров Александр", "Железников Свелий", "Зотова Анастасия", "Иванова Екатерина", "Илларионова Маргарита", "Максимов Артемий", "Мансурова Екатерина", "Мелешенко Олеся", "Миков Влад", "Михайлов Богдан", "Петрова Аня", "Пуртов Денис", "Солодовникова Анна", "Сорокин Иванн", "Сухотерин Богдан", "Томашик Полина", "Устинова Полина", "Фелисеева Анна", "Шипелова Лина"];


let studentsWithOptions = arrayOfStringsToArrayOfObjects(studentsData, randIntegerFromMinToMax, 1, 14, 2);


// console.log(studentsWithOptions.arrayOfObjects, 'arrayOfObjects');
// console.log(studentsWithOptions.frequencyChart, 'frequencyChart');

new Vue({
	el: '#root',
	data: {
		students: studentsWithOptions.arrayOfObjects,
		frequency: studentsWithOptions.frequencyChart
	}
});

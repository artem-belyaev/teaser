var randomBodyParts = ['глаз', 'нос', 'ухо', 'рот', 'голова'];
var randomAdjectives = ["вонючая", "унылая", "дурацкая", "грязная"];
var randomWords = ["муха", "лягушка", 'рыба', "выдра", "дубина", "мартышка", "крыса"];

// Выбор случайной части тела из массива randomBodyParts:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 5)];

// Выбор случайного прилагательного из массива randomAdjectives:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];

// Выбор случайного слова из массива randomWords:
var randomWord = randomWords[Math.floor(Math.random() * 7)];

// Соединяем случайные строки в предложение:
var randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!";

randomInsult;
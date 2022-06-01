var randomBodyParts = ['глаз', 'нос', 'палец', 'рот', 'зуб'];
var randomAdjectives = ["вонючий", "унылый", "дурацкий", "грязный"];
var randomWords = ["мухи", "лягушки", 'рыбы', "выдры", "собаки", "мартышки", "крысы"];
var randomAnimalsParts= [`хвост`,`жабра`,`лапы`,`уши`,`нос`,`язык`,`когти`];
// Выбор случайной части тела из массива randomBodyParts:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 5)];


// Выбор случайного прилагательного из массива randomAdjectives:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];
var randomAnimalsPart = randomAnimalsParts[Math.floor(Math.random() * 7)];

// Выбор случайного слова из массива randomWords:
var randomWord = randomWords[Math.floor(Math.random() * 7)];

// Соединяем случайные строки в предложение:
var randomInsult = "У тебя " + randomBodyPart + "  ещё более  " + randomAdjective + " чем " + randomAnimalsPart+ " у " + 
 randomWord;                                                                                                                          randomInsult;

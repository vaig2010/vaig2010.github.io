document.addEventListener("DOMContentLoaded", function() {
    var names = ["Даша", "Дашенька", "Дашуля", "Дашечка", "Дашушка",
                 "Дашиш", "Дошик", "Дашуня", "Дашунька", "Мдашиш"]; // Коллекция разновидностей имени
                 // [М]Да[ша,шу]-[ня] [рья,шиш]
    
    var nameIndex = 0;
    var nameElement = document.getElementById("name");
    
    setInterval(function() {
        var randomIndex = Math.floor(Math.random() * names.length); // Генерируем случайный индекс
        nameElement.textContent = names[randomIndex];
    }, 2000); // Изменение имени каждые 2 секунды

    var poets = {
        "(Стиль) Бродский": [
            "Любовь - это музыка страсти,",
            "В ней звуки сердец переплетаются.",
            "Ритмом любви мы сливаемся,",
            "В единстве наши души таются."
        ],
        "(Стиль) Маяковский": [
            "Любовь - это огонь,",
            "Любовь - это мощь.",
            "Любовь - это пламя",
            "В сердце нашей души."
        ],
        // Добавьте других поэтов и их стихи
    };
    
    var poetSelect = document.getElementById("poet");
    var poemElement = document.getElementById("poem");
    
    poetSelect.addEventListener("change", function() {
        var selectedPoet = poetSelect.value;
        var poems = poets[selectedPoet];
        
        poemElement.textContent = ""; // Очистка содержимого элемента с идентификатором "poem"
        
        for (var i = 0; i < poems.length; i++) {
            var poem = poems[i];
            var poemItem = document.createElement("p");
            poemItem.textContent = poem;
            poemElement.appendChild(poemItem);
        }
    });
});



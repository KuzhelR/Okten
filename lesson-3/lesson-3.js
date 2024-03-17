/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*/
/* За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині *


let as = [
    'Десять заповідей Okten School',
    'Okten School це твій Шанс і немає інших у тебе',
    'Не святку зустрічі з Okten School марно',
    'Святкуй свій вихідний разом з превю',
    'Шануй менторів своїх',
    'Не забий',
    'Не чини перелюбу до Менторів своїх',
    'Не кради час Okten School',
    'Не говори брехні проти Ментора свого та однокурсника',
    'Не пожадай роботи свого однокурсника',
    'Не пожпдай майна свого однокурсника'
];

for (let i = 0; i < as.length; i++) {
    document.write(`<div>${as[i]}</div>`);
}
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*/


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*/
/* За допомогою циклу for і document.write() вивести 10 блоків div
c довільним текстом і індексом всередині *
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i}  ${as[i]}</div>`);
}
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*/


/* За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині. */
/* За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині. *

let recommendations = [
    '19 рекомендацій Okten School',
    'Розберіться з основами',
    'Пишіть код',
    'Розвязуйте завдання і проблеми',
    'Читайте код інших',
    'Вивчайте з помилок',
    'Розумійте алгоритми та структури даних',
    'Створюйте проекти',
    'Вивчайте від великих',
    'Користуйтеся документацією',
    'Використовуйте інструменти розробки',
    'Практикуйте тестування',
    'Вивчайте принципи чистого коду',
    'Розширюйте свій стек технологій',
    'Працюйте над проектами з командою',
    'Будуйте мережу контактів',
    'Будьте терплячими та впевненими в собі',
    'Ставте перед собою мети',
    'Будьте відкритими до навчання',
    'Не забувайте про здоровя'
];

let counter = 0;

while (counter < 20) {
    document.write(`<h1>${counter + 1}. ${recommendations[counter]}</h1>`);
    counter++;
}
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*/


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*/

/* Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Масив:

    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

ШАБЛОН:
    <ul>
        <li>ITEM OF ARRAY</li>
        <!--
            і тд інші об'єкти масиву
             ...
             ...
             ...
        -->
    </ul>

замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

----------------------------------------------- *
let listOfItems = [
    'html',
    'css',
    'javascript',
    'mysql',
    'mongodb',
    'react',
    'angular',
    'node.js'
];

for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<ul><li>${listOfItems[i]}</li></ul>`)
}
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*/


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*/
/*   Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

ШАБЛОН
<div class="product-card">
    <h3 class="product-title">TITLE. Price - PRICE</h3>
<img src="IMAGE" alt="" class="product-image">
</div>
Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*/


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let i = 0; i < products.length; i++) {
    document.write(`<div class="product-card">
        <h3 class="product-title">${products[i].title.toUpperCase()}. Price - ${products[i].price}</h3>
        <img src="${products[i].image}" alt="" class="product-image"/>
    </div>`);
}




/*    є масив

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

за допомоги циклу вивести:
    - користувачів зі статусом true
- користувачів зі статусом false
- користувачів які старші за 30 років*/


let userss = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let i = 0; i < userss.length; i++) {
    if (userss[i].status === true) {
        console.log(userss[i]);
    }
}

for (let i = 0; i < userss.length; i++) {
    if (userss[i].status === false) {
        console.log(userss[i]);
    }
}

for (let i = 0; i < userss.length; i++) {
    if (userss[i].age > 30) {
        console.log(userss[i]);
    }
}
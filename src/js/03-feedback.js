// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.
// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

// створює пустий об'єкт для запису данних
const formData = {};

// Знаходить form та textarea
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

// Додає слухачів до form та textarea
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// додає слухача до form 
refs.form.addEventListener('input', (event) => {
    event.preventDefault();
    // записує до об'єкту ім'я поля та його значення
  formData[event.target.name] = event.target.value;
    
    // Данні перетворює на стороку та записує у локальне сховище
  let formDataJSON = JSON.stringify(formData);
  console.log(formDataJSON);
    localStorage.setItem(STORAGE_KEY, formDataJSON);
    
});

// Визиває функцію, що получає зі сховища повідомлення з ключем 'feedback-form-state' та перевіряє є повідомлення з таким ключем. Якщо є, то оновлюємо DOM.

populateTextarea();

//  Скидаємо дефолтне перезавантаження сторінки при submit, відправляємо форму та очищуємо

function onFormSubmit(event) {
    event.preventDefault();
    console.log('отправляем форму');
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

// Получення значення поля textarea та збереження його в локальному сховищі
function onTextareaInput(event) {
    const message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message);
    
}

// функція, що получає зі сховища повідомлення з ключем 'feedback-form-state' та перевіряє є повідомлення з таким ключем. Якщо є, то оновлюємо DOM.

function populateTextarea() {
    let savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
}

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const sendButton = form.querySelector('button[type="submit"]');

// Функція для оновлення сховища
const updateLocalStorage = throttle(() => {
    const feedbackState = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
}, 500); // Оновлювати не частіше одного разу в 500 мілісекунд

// Функція для завантаження даних зі сховища
const loadFromLocalStorage = () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const parsedState = JSON.parse(savedState);
        emailInput.value = parsedState.email;
        messageInput.value = parsedState.message;
    } else {
        emailInput.value = '';
        messageInput.value = '';
    }
}

// Очищення сховища та полів форми при відправці
form.addEventListener('submit', event => {
    event.preventDefault();
    const formState = {
        email: emailInput.value,
        message: messageInput.value,
    };
    console.log(formState);
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
    sendButton.disabled = true;
});

// Додайте обробники подій для відслідковування вводу
form.addEventListener('input', updateLocalStorage);

// Завантажте дані зі сховища при завантаженні сторінки
loadFromLocalStorage();

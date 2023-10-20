 
  
// Підключаємо бібліотеку lodash.throttle
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const sendButton = form.querySelector('button[type="submit"]');

// Функція для зберігання стану форми в локальне сховище
function saveFormStateToLocalStorage() {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

// Перевіряємо наявність даних у локальному сховищі та заповнюємо поля форми
function populateFormFromLocalStorage() {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    const parsedState = JSON.parse(savedState);
    emailInput.value = parsedState.email;
    messageInput.value = parsedState.message;
  }
}

// Відстежуємо подію input та зберігаємо стан форми в локальне сховище
form.addEventListener('input', throttle(saveFormStateToLocalStorage, 500));

// Відстежуємо подію submit для виводу даних в консоль та очищення полів форми
form.addEventListener('submit', event => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formState);

  // Очищення полів форми
  emailInput.value = '';
  messageInput.value = '';

  // Очищення локального сховища
  localStorage.removeItem('feedback-form-state');
  sendButton.disabled = true;
});

// Завантаження даних з локального сховища під час завантаження сторінки
populateFormFromLocalStorage();


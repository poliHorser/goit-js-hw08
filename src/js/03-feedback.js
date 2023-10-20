 
  
// Підключаємо бібліотеку lodash.throttle
import throttle from 'lodash.throttle';

// Функція, яка зберігає стан форми в локальне сховище
function saveFormStateToLocalStorage() {
  const emailInput = document.querySelector('input[name="email"]');
  const messageTextarea = document.querySelector('textarea[name="message"]');
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Функція, яка заповнює поля форми зі значеннями з локального сховища
function populateFormFromLocalStorage() {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const formData = JSON.parse(storedData);
    const emailInput = document.querySelector('input[name="email"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
}

// // Відстежуємо подію input і зберігаємо дані у локальне сховище з допомогою lodash.throttle
document.querySelector('.feedback-form').addEventListener('input', throttle(saveFormStateToLocalStorage, 500));


// Відстежуємо подію submit для очищення полів вводу
document.querySelector('.feedback-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const emailInput = document.querySelector('input[name="email"]');
  const messageTextarea = document.querySelector('textarea[name="message"]');
  
  // Очищаємо поля вводу
  emailInput.value = '';
  messageTextarea.value = '';
  
  // Виводимо дані в консоль
  console.log({
    email: emailInput.value,
    message: messageTextarea.value,
  });
});
// Відстежуємо подію submit для очищення полів вводу
document.querySelector('.feedback-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Очищаємо поля вводу
  emailInput.value = '';
  messageTextarea.value = '';
//   const emailInput = document.querySelector('input[name="email"]');
//   const messageTextarea = document.querySelector('textarea[name="message"]');
  
//   // Очищаємо поля вводу
//   emailInput.value = '';
    //   messageTextarea.value = '';
    
    emailInput.value = localStorage.getItem(email)
    messageTextarea.value = localStorage.getItem(message)
    
  
  // Виводимо дані в консоль
  console.log({
    email: emailInput.value,
    message: messageTextarea.value,
  });
});

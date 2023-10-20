
  // Функція для оновлення об'єкта стану форми і збереження його в локальному сховищі з обмеженням на 500 мілісекунд
  const updateFormStateThrottled = document.throttle(function() {
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    // Створюємо об'єкт стану форми
    const formState = {
      email: emailInput.value,
      message: messageInput.value
    };

    // Зберігаємо об'єкт стану форми в локальному сховищі
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }, 500); // Оновлення не частіше, ніж раз на 500 мілісекунд

  // Викликаємо функцію оновлення стану при події input на полях форми
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');

  emailInput.addEventListener('input', updateFormStateThrottled);
  messageInput.addEventListener('input', updateFormStateThrottled);

  // Встановлюємо збережений стан форми, якщо він є
  const savedFormState = localStorage.getItem('feedback-form-state');
  if (savedFormState) {
    const formState = JSON.parse(savedFormState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  } else {
    // Якщо збереженого стану немає, очищаємо поля форми
    emailInput.value = '';
    messageInput.value = '';
  }

  // Функція для зберігання стану форми при відправці форми
  function saveFormValues(event) {
    // Забороняємо відправку форми, оскільки ми вже зберегли дані
    event.preventDefault();

    // Очищаємо локальне сховище
    localStorage.removeItem('feedback-form-state');

    // Виводимо об'єкт стану в консоль
    console.log({
      email: emailInput.value,
      message: messageInput.value
    });
  }

  // Додаємо обробник події submit для заборони відправки форми
  const feedbackForm = document.querySelector('.feedback-form');
  feedbackForm.addEventListener('submit', saveFormValues);


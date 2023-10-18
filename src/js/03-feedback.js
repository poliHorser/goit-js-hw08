import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input[name="email"]');
const message = form.querySelector('textarea[name="message"]');

const updateLocalStorage = throttle(() => {
    const feedbackState = {
        email: email.value,
        message: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
}, 500); 

const loadFromLocalStorage = () => {
    const storedState = localStorage.getItem('feedback-form-state');
    if (storedState) {
        const feedbackState = JSON.parse(storedState);
        email.value = feedbackState.email;
        message.value = feedbackState.message;
    }
};


form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    console.log({
        email: emailInput.value,
        message: messageTextarea.value
    });
    // localStorage.removeItem('feedback-form-state');
});




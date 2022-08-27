const btn = document.querySelector('#btn');
const input = document.querySelector('#email')

btn.addEventListener('click', () => {
    if (input.value.search('@') < 1) {
    document.querySelector('.error').classList.remove('visible');
    document.querySelector('.text__error').classList.remove('visible');  
    } else {
        document.querySelector('.error').classList.add('visible');
        document.querySelector('.text__error').classList.add('visible');  
    }
});


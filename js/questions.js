// using selectors inside the element
const btn = document.querySelectorAll('.faq-question-item-title-btn');

btn.forEach(function(btn){
    btn.addEventListener('click', function(event){
        const question = event.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-faq-text');
    });
});
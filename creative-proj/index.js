const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const icon = accordion.querySelector('.icon');
    const answer = accordion.querySelector('.answer');

    accordion.addEventListener('click', () => {

        if(icon.classList.contains('active-icon')){
            icon.classList.remove('active-icon');
            answer.style.maxHeight = null
        }
        else{
            icon.classList.add('active-icon');
            answer.style.maxHeight = answer.scrollHeight + 'px'
        }
    })
})
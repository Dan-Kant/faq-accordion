const faqContents = document.querySelectorAll('.faq-content');

faqContents.forEach(faqContent => {
    faqContent.addEventListener('click', () => {
        faqContent.classList.toggle('faq-content-active');
    });
});
function redirectToPage(pageUrl) {
    window.location.href = pageUrl;
}

const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
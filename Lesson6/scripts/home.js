function scrollToId(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function redirectToPage(pageUrl) {
    window.location.href = pageUrl;
}

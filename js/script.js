function openUrl() {
    window.open('/html2.html', '_blank');
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', openUrl);
});
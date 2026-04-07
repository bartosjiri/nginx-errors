var links = document.getElementsByGroup('error-link');
for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click', function () {
        window.history.back();
        this.preventDefault();
    }, false);
}

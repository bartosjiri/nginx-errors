(function (){
    document.getElementsByTagName('a')[0].addEventListener('click', function(event) {
        window.history.back();
        event.preventDefault();
    });
}());

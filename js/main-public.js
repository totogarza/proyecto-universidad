'use strict';

var form = document.querySelector('#formFor');
var formButton = document.querySelector('#submit');

formButton.addEventListener("click", function () {
    var message = document.querySelector('#feedback').value;
    if (message === '') {
        alert('El mensaje no puede ir vacio.');
    } else {
        // Message deliver with formfor
        form.submit();
        message.value = "";
    }
});
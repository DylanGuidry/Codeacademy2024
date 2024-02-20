// //  PRACTICE

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState)
    if(request.readyState === 4) {
        // console.log(request.responseText)
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();

//POST PRACTICE

document.addEventListener('DOMContentLoaded', function () {
    const formEl = document.querySelector('.form');

    formEl.addEventListener('submit', () => {
        console.log('Hello');
    });
});

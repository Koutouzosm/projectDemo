console.log('for github')
function getLocalStorage() {
    return JSON.parse(localStorage.getItem('hello')) || "let's go!"
}
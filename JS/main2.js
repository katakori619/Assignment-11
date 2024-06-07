var arr2 = JSON.parse(localStorage.getItem('user'))
var arr3 = JSON.parse(localStorage.getItem('index'))
document.getElementById('welcome').innerHTML = 'Hello ' + arr2[arr3[0]].id
function logout(){
    window.location = 'index.html'
}
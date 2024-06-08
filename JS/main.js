let uname = document.getElementById('username')
let umail = document.getElementById('usermail')
let upass = document.getElementById('userpassword')
let lname = document.getElementById('loginmail')
let lpass = document.getElementById('loginpass')
let arr;
let x1 , x2
let array = []
if(localStorage.getItem('user') == null){
    arr = []
}
else{
    arr = JSON.parse(localStorage.getItem('user'))
}
function store(){
    var found = false
    if(uname.value == "" || umail.value =="" || upass.value == ""){
        document.getElementById('empty').classList.remove('d-none')
        document.getElementById('repeated').classList.add('d-none')
        document.getElementById('correct').classList.add('d-none')
        document.getElementById('valid').classList.add('d-none')
    }
    else{
        var y = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
        if(!y.test(umail.value)){
            document.getElementById('valid').classList.remove('d-none')
            document.getElementById('repeated').classList.add('d-none')
            document.getElementById('correct').classList.add('d-none')
            document.getElementById('empty').classList.add('d-none')
        }
        else{
            data = {
                id: uname.value ,
                mail: umail.value ,
                pass: upass.value ,
            }
            for(let i = 0;i<arr.length;i++){
                if(arr[i].mail == umail.value){
                    found = true
                    break
                }
            }
            if(found){
                document.getElementById('repeated').classList.remove('d-none')
                document.getElementById('empty').classList.add('d-none')
                document.getElementById('correct').classList.add('d-none')
                document.getElementById('valid').classList.add('d-none')
            }
            else{
                arr.push(data)
                x = JSON.stringify(arr)
                localStorage.setItem('user',x)
                document.getElementById('correct').classList.remove('d-none')
                document.getElementById('empty').classList.add('d-none')
                document.getElementById('repeated').classList.add('d-none')
                document.getElementById('valid').classList.add('d-none')
                setTimeout(function(){window.location = 'index.html'},1400)
            }
        }
    }
}

function check(){
    x1 = 0
    correctmail = correctpass = false
    if(lname.value == "" || lpass.value == ""){
        document.getElementById('emp').classList.remove('d-none')
        document.getElementById('mailIncorrect').classList.add('d-none')
        document.getElementById('passwordIncorrect').classList.add('d-none')
        document.getElementById('both').classList.add('d-none')
        document.getElementById('corr').classList.add('d-none')
    }
    else{
        for(var i = 0;i<arr.length;i++){
            if(arr[i].mail == lname.value){
                x1 = i
                correctmail = true
                break
            }
        }
        for(var i = 0;i<arr.length;i++){
            if(arr[i].pass == lpass.value){
                if(x1==i){
                    x2 = i
                    correctpass = true
                    break
                }
                else if(x1==0){
                    correctpass = true
                }
            }
        }
        if((correctmail && correctpass) && (x1 == x2)){
            array.push(x1)
            localStorage.setItem('index',JSON.stringify(array))
            document.getElementById('corr').classList.remove('d-none')
            document.getElementById('mailIncorrect').classList.add('d-none')
            document.getElementById('passwordIncorrect').classList.add('d-none')
            document.getElementById('both').classList.add('d-none')
            document.getElementById('emp').classList.add('d-none')
            setTimeout(function(){window.location = "home.html"} , 1400)
        }
        else if((correctmail == true && correctpass == false) || (correctmail == true && correctpass == true && x1!=x2)){
            document.getElementById('passwordIncorrect').classList.remove('d-none')
            document.getElementById('mailIncorrect').classList.add('d-none')
            document.getElementById('corr').classList.add('d-none')
            document.getElementById('both').classList.add('d-none')
            document.getElementById('emp').classList.add('d-none')
        }
        else if(correctmail == false && correctpass == true){
            document.getElementById('mailIncorrect').classList.remove('d-none')
            document.getElementById('passwordIncorrect').classList.add('d-none')
            document.getElementById('corr').classList.add('d-none')
            document.getElementById('both').classList.add('d-none')
            document.getElementById('emp').classList.add('d-none')
        }
        else{
            document.getElementById('both').classList.remove('d-none')
            document.getElementById('passwordIncorrect').classList.add('d-none')
            document.getElementById('corr').classList.add('d-none')
            document.getElementById('mailIncorrect').classList.add('d-none')
            document.getElementById('emp').classList.add('d-none')
        }
    }
}
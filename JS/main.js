let uname = document.getElementById('username')
let umail = document.getElementById('usermail')
let upass = document.getElementById('userpassword')
let arr;
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
            }
        }
    }
}
function login(){
    var uName = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    var msgBox = document.getElementById("message_box");

    if(uName == '' || pwd == ''){
        msgBox.innerText = "Please enter email and password";
        msgBox.className = "msg-box msg-box--wrong";
        
    }
    else if(uName == 'admin' && pwd == 'admin123'){
        msgBox.className = "msg-box msg-box--correct";
        msgBox.innerText = "Login Success!";
    }
    else {
        msgBox.className = "msg-box msg-box--wrong";
        msgBox.innerText = "Please enter correct email and password";
    }
    
}
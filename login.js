function login(){
    var uName = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    var msg = document.getElementById("message");
    var msgBox = document.getElementById("message_box");

    if(uName == '' || pwd == ''){
        msgBox = msgBox.className = "msg-box msg-box--wrong";
        msg = msg.innerText = "Please enter email and password";
    }
    else if(uName == 'admin' && pwd == 'admin123'){
        msgBox = msgBox.className = "msg-box msg-box--correct";
        msg = msg.innerText = "Login Success!";
    }
    else {
        msgBox = msgBox.className = "msg-box msg-box--wrong";
        msg = msg.innerText = "Please enter correct email and password";
    }
    
}
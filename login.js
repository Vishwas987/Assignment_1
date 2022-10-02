function login(){
    var u_name = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    var msg = document.getElementById("message");
    var msg_box = document.getElementById("message_box");

    if(u_name == '' || pwd == ''){
        msg_box = msg_box.className = "msg__box msg__box--wrong";
        msg = msg.innerText = "Please enter email and password";
    }
    else if(u_name == 'admin' && pwd == 'admin123'){
        msg_box = msg_box.className = "msg__box msg__box--correct";
        msg = msg.innerText = "Login Success!";
    }
    else {
        msg_box = msg_box.className = "msg__box msg__box--wrong";
        msg = msg.innerText = "Please enter correct email and password";
    }
    
}
const mybutton = document.getElementById('button1');
mybutton.addEventListener("click",()=>{
    const mail = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    if(pass!="" && mail!=""){
        fetch("http://localhost:5501/login",{
        method : "POST",
        headers : {
            "Content-type" : "application/json",
        },
        body : JSON.stringify({
            id : Date.now(),
            email : mail,
            password : pass,
        })
        });
        window.location.href = "./login.html";
    }
    else{
        alert("Fill in all blank");
    }
    console.log(mail,pass);
});
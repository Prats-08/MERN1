const mybutton1 = document.getElementById('button2');
mybutton1.addEventListener("click",()=>{
    const mail = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    fetch("http://localhost:5501/login",{
	    method : "GET",
    })
        .then( (response)=>response.json())
        .then((data)=>{const user = data.find( (el)=> el.email=== mail && el.password === pass) ;
            if(user){
                window.location.href = "./../food/index.html";
            }
            else{
                window.location.href = "./signup.html";
            }});

    
}
);
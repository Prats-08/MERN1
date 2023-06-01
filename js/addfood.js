const mybuttonf = document.getElementById('foodpost');
mybuttonf.addEventListener("click",()=>{
    const name = document.getElementById('foodname').value;
    const rating = document.getElementById('rating').value;
    const image = document.getElementById('imagefood').value;
    const about = document.getElementById('about').value;
    if(name!="" && image!="" && rating!="" && about!=""){
        fetch("http://localhost:5501/food",{
        method : "POST",
        headers : {
            "Content-type" : "application/json",
        },
        body : JSON.stringify({
            image : image,
            title : name,
            rating : rating,
            about : about
        })
        });
        // window.location.href = "./../food/index.html";
    }
    else{
        alert("Fill in all blank");
    }
});
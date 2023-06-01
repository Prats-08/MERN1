
const moviebox = document.getElementById('showmovie');
fetch("http://localhost:5501/food",{
	    method : "GET",
    })
        .then( (response)=>response.json())
        .then((data)=>{data.map((el)=>{
            const div = document.createElement('div');
            const image = document.createElement('img');
            const about = document.createElement('div');
            image.src = el.image;
            about.innerText = el.about;
            const movieTitle = document.createElement('h3');
            movieTitle.innerText = el.title;
            const rating = document.createElement('p');
            rating.innerText = el.rating;
            const button = document.createElement('button');
            button.innerText = "More";
            div.append(image);
            div.append(movieTitle,rating,button);
            button.id="button1";
            div.style.backgroundColor = "black";
            div.id = "movie-box";
            button.addEventListener('click',()=>{
                if(button.innerText=="More"){
                    div.append(about);
                    button.innerText = "Less";
                    about.style.position = "relative";
                    about.style.marginTop= '-415px';
                    about.style.textAlign = "justify";
                    about.style.padding = "10%";
                    about.style.backgroundColor = "rgba(0,0,0,0.8)";
                    about.style.height= "72%";
                    about.style.width = "245px";
                    about.style.borderRadius =  '7px';
                    about.style.marginLeft = '0px';
                    about.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                    about.style.color="white";
                    about.style.fontVariant ="normal";
                }
                else{
                    about.remove();
                    button.innerText="More";
                }
            });
            moviebox.append(div);
        
        });

    
}
);

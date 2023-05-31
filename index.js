const data =[{
    image : "https://www.acouplecooks.com/wp-content/uploads/2022/02/Baked-Donuts-003s.jpg",
    title : "DONUTS",
    rating : "⭐⭐⭐⭐⭐",
    about : "Doughnuts are sweet ring-shaped treats that are typically made with flour dough and then deep-fried. These sweet round snacks can also be coated in sugar, chocolate, or maple glazing.",
},
{
    image : "https://keviniscooking.com/wp-content/uploads/2020/05/Homemade-Italian-Lasagna-square-500x500.jpg",
    title : "LASAGNA",
    rating : "⭐⭐⭐⭐⭐",
    about : "Lasagna is a type of pasta, possibly one of the oldest types,made of very wide, flat sheets. Either term can also refer to an Italian dish made of stacked layers of lasagna alternating with fillings such as ragù (ground meats and tomato sauce), béchamel sauce, vegetables, cheeses (which may include ricotta, mozzarella, and parmesan), and seasonings and spices.",
},
{
    image : "https://lh3.googleusercontent.com/NdluJ8b49TnQhoZIh0NyLTAnoJWqB5bSGJp_n3Egnv2mbyMJbU4824WI1BmDG-0Kz4Q4P0mdKh0Mq2XA8NrT3h3AEE_YNAZJP7QBxWYY",
    title : "BIRIYANI",
    rating : "⭐⭐⭐⭐⭐",
    about : "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy.",
},
{
    image : "https://lh3.googleusercontent.com/wgw7mS5Gugz7xUxhZeumfwbieUkldeUlLB2pdWF5GCN1cDdrOXwVodslcM4hEz1UT803bqZONVh_PkfMx5me8kNOiuMe1CFt7ANCRC_l=w512-rw",
    title : "MANCHOW SOUP",
    rating : "⭐⭐⭐⭐" ,
    about : "An assortment of vegetables are chopped finely and stir-fried, then added to a thick, savory broth flavored with soy sauce and rice vinegar and topped with crispy fried noodles.",
},

];
const moviebox = document.getElementById('showmovie');
data.map((el)=>{
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
            about.style.backgroundColor = "rgba(0,0,0,0.9)";
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
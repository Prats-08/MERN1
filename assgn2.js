const button1 = document.getElementById('knowus');
const aboutus = document.getElementById('about-us');
const divcourse = document.getElementById('course');
button1.addEventListener('click', ()=>{
    let h1 = document.getElementById('abouth1');
    let p = document.getElementById('aboutp');
    h1.innerText = "ABOUT US";
    p.innerText = "Welcome to our online course platform! We are dedicated to providing high-quality education and learning opportunities to individuals from all walks of life.<br> Our platform is designed to empower learners and help them acquire new skills, enhance their knowledge, and achieve their personal and professional goals.At our core, we believe that education should be accessible and flexible. We strive to break down barriers to learning by offering a wide range of courses that can be accessed anytime, anywhere. Whether you're a busy professional, a student looking to supplement your education, or someone simply eager to learn something new, our platform caters to your needs.What sets us apart is our commitment to excellence.<br> We collaborate with leading experts and industry professionals to develop our courses, ensuring that the content is up-to-date, relevant, and in-demand. Our instructors are passionate about teaching and are dedicated to helping learners succeed.We offer a diverse selection of courses spanning various fields and disciplines. From business and technology to arts and humanities, our curriculum is designed to cater to different interests and career paths. Whether you're interested in coding, photography, marketing, language learning, or personal development, you'll find a course that suits your needs.Our online learning platform provides a seamless experience for our users. You'll have access to interactive course materials, including video lectures, quizzes, assignments, and discussion forums. Our user-friendly interface makes it easy to navigate through the courses and track your progress, ensuring a smooth and engaging learning journey. We understand the importance of community and collaboration in the learning process. That's why we foster a vibrant online community of learners from around the world. Connect with fellow students, engage in discussions, and collaborate on projects to enhance your learning experience.Whether you're looking to acquire new skills for your career, explore a passion, or simply expand your knowledge, our online course platform is here to support you every step of the way. Join us today and embark on a transformative learning journey!";

});
const button2 = document.getElementById('show');
const button3 = document.getElementById('noshow');
button2.addEventListener('click',()=>{

    let div1 = document.getElementById('course1');
    let h11 = document.getElementById('courseh1');
    let div2 = document.getElementById('course2');
    let h12 = document.getElementById('courseh2');
    let div3 = document.getElementById('course3');
    let h13 = document.getElementById('courseh3');
    let div4 = document.getElementById('course4');
    let h14 = document.getElementById('courseh4');
    let div5 = document.getElementById('course5');
    let h15 = document.getElementById('courseh5');
    let div6 = document.getElementById('course6');
    let h16 = document.getElementById('courseh6');
    h11.innerText="React";
    div1.append(h11);
    h12.innerText="MongoDB";
    div2.append(h12);
    h13.innerText="Express";
    div3.append(h13);
    h14.innerText="Angular";
    div4.append(h14);
    h15.innerText="React";
    div5.append(h15);
    h16.innerText="React";
    div6.append(h16);
    div1.style.backgroundColor="black";
    div2.style.backgroundColor="black";
    div6.style.backgroundColor="black";
    div3.style.backgroundColor="black";
    div4.style.backgroundColor="black";
    div5.style.backgroundColor="black";
    divcourse.append(div1,div2,div3,div4,div5,div6);
});
button3.addEventListener("click",()=>{
    window.location.reload();
})
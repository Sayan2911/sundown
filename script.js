

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
var picture=document.querySelector("#p5right img")
var headings1=document.querySelector("#hfirst")
var headings2=document.querySelector("#hsecond")
var headings3=document.querySelector("#hthird")
var paragraph=document.querySelector("#paragraph p")

// console.log(headings);

function changeColor1(){
   headings1.style.borderLeft="4px solid #FE330A"
   headings1.style.color="white"

   headings2.style.borderLeft="4px solid #504A45"
   headings2.style.color="#504A45"

   headings3.style.borderLeft="4px solid #504A45"
   headings3.style.color="#504A45"

    picture.src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg"
    console.log(picture.src);
    console.log(paragraph);
    paragraph.innerHTML="Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."

    
}
setTimeout(changeColor1,3000)

changeColor1()
function changeColor2(){
    
    headings1.style.borderLeft="4px solid #504A45"
    headings1.style.color="#504A45"
    
    headings2.style.borderLeft="4px solid #FE330A"
    headings2.style.color="white"

   headings3.style.borderLeft="4px solid #504A45"
   headings3.style.color="#504A45"

   picture.src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp"
   paragraph.innerHTML="Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
}
function changeColor3(){
    
    headings1.style.borderLeft="4px solid #504A45"
    headings1.style.color="#504A45"
    
    headings2.style.borderLeft="4px solid #504A45"
    headings2.style.color="#504A45"

    headings3.style.borderLeft="4px solid #FE330A"
    headings3.style.color="white"

    picture.src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg"
    paragraph.innerHTML="We're with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
}
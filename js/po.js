'use strict'
const openNav = document.querySelector(".icon-btn");
const navBar = document.querySelector(".app-nav-co");
const closeNav = document.querySelector(".times");
const banner = document.querySelector(".banner-header");
const navLinks = document.querySelector('.link')
console.log(openNav)
console.log(navLinks);

const openBar = function () {
 
      navBar.classList.remove("close");
      document.querySelector(".bar").classList.add("hidde");
      closeNav.classList.remove("hidde");
    ;
}

const closeBar = function () {

      navBar.classList.add("close");
      document.querySelector(".bar").classList.remove("hidde");
      closeNav.classList.add("hidde");
    ;
}
closeNav.addEventListener("click", closeBar)
openNav.addEventListener("click", openBar)




// html insertig
const insertH = function (b, html) {
  b.innerHTML = " ";
  b.insertAdjacentHTML(`beforeend`, html)
 }

const homeHtml = `
    <div class="banner section-center" >
            <div class="img-co" >
                <img  class="photo"  src="./images/IMG-20220821-WA0036-removebg-preview.png" alt="" srcset="">
            </div>
            <div class="banner-text" >
                <h2 > turing vision into Reality code and design</h2>
                <p>As a skill frontend developer, I am dedicated to turning ideals into innovative web apllication. Explore my Latest projects and showcasing my expertise in HTML, CSS and JavaScript</p>
            </div>
            <div class="banner-btn">
                <button class="btn">
                    <a href="#">Resume <span><i class="fa-bars"></i></span></a>
                </button >
                   <button class="btn" >
                    <a href="#">Contact</i></span></a>
                </button>
            </div>

 `;
const aboutHtml = `
    <div class="head" >
        <div class="head-co section-center">
            <div class="about-header">
                <h1> passion fuels purpose!</h1>
            </div>

               <div class="about-user">       
                    <div class="about-img-co">
                        <div class="about-ph" > 
                            <img  class="about-ph2"  src="./images/IMG-20220821-WA0036-removebg-preview.png" alt="" srcset="">
                        </div>
                    </div>
                   
             <div class="about-text">    
                <h3>BIOGRAPHY </h3>
                <p>Hi, I'm Akinboyewa Micheal, a web developer  with a passion for creating beautiful, functional, and user-centered digital experiences. With a years of experience. I am always looking for new and innovative ways to bring my clients' visions to life. I believe that design is about more than just making things look pretty - it's about solving problems and creating intuitive, enjoyable experiences for users. Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
            </div>

        </div>   
        <div class="education">
            <h1> education </h1>
            <div class="edu">
                <h3> bachelor of Science in Political Science</h3>
            <p class="text-p" >2016-2023| Ekiti State University </p>
            <p> Relevant courses includes: public Administration, Comparative Politics, International Relations, Local Goverment</p>
            </div>
            <div class="edu">
            <h3> online Coursework</h3>
            <p class="text-p" >2022-till date| Udemy</p>
            <p>Completed courses in advance topics such as : HTML, CSS and JavaScript</p>
            </div>
        </div> 

        </div>
     </div>
`;
const projectHtml = `
       <div class="head" >
      <div class="project section-center">
                    <div class="project-header">
                        <h1> imagiation trump knowledge!</h1>
                     
                    </div>
         <div class="project-user">       
                <div class="project_co">
                    <img src="./images/pexels-tomáš-malík-2581922.jpg" class="project-ph" alt="" srcset="">

                </div>
                <div class="project-info">
               <h2>Featured Project</h2>
                                <h3>House Sales Application</h3>
                                <p>A Feature-rich E-commance house selling App using HTML,CSS and JavaScript. </p>
                               
                                <ul class="project-li" > 
                                    <li class="project-li_ico" >
                                        <a href="https://github.com/mickoty/housing.git"><i class="fa-brands fa-github"></i> </a>
                                    </li>
                                    <li>
                                        <button class="btn project-btn">
                                        <a href="https://app.netlify.com/sites/koty-house">visit Project</a>
                                        </button>
                                    </li>
                                </ul>
                </div>
                  
        </div>   
                   
       </div>
    </div>

`;

navLinks.addEventListener("click", function (el) {
  el.preventDefault();
  const elHref = el.target.getAttribute("href");



    if (elHref === "/index.html") {
      insertH(banner, homeHtml);
      closeBar();
    }
    if (elHref === "./about.html") {
     insertH(banner, aboutHtml);
        closeBar();
    }
    if (elHref === "./projects") {
      insertH(banner, projectHtml);
      closeBar();
    }

  console.log(elHref);
});

// document.querySelector(".app-nav-co").addEventListener("click", closeBar);

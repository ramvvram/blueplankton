// for mobile nav bar 
var button = document.getElementById("toggle-menu");
var menu =document.getElementById("menu")
var menulist = document.getElementsByClassName("nav-item")
var navbarLinks =document.querySelectorAll("nav a");
button.onclick = function(){
  let menuIsClosed = !menu.classList.contains('opened') // the menu is closed if it doesn't have the ".opened" class

  if (menuIsClosed) {
    menu.classList.add('opened')
    button.classList.add('is-active')
  } else {
    menu.classList.remove('opened')
     button.classList.remove('is-active')
  }
  navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick(){
  menu.classList.remove('opened')
  button.classList.remove('is-active')
  
}
}


// end mobile nav bar 


 // fro to top button  

mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
 // end to top button  

let section = document.querySelectorAll("section");
            let navLinks = document.querySelectorAll("nav a");

            window.onscroll = () => {
                section.forEach(sec => {
                        let top = window.scrollY;
                        let offset = sec.offsetTop;
                        let height = sec.offsetHeight;
                        let id = sec.getAttribute('id');
                        if (top >= offset && top < offset + height) {
                            navLinks.forEach(links => {
                                links.classList.remove('active');
                                document.querySelector(' nav a[href*=' + id + ']').classList.add('active');

                            });
                        }

                    }

                )

            }

            AOS.init();
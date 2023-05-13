import { menuPage } from './menuLink.js';
import { contactPage } from './contactPage.js';

export function homePage() {
  const theDiv = document.getElementById("content");

  //nav bar
  const navBar = document.createElement("div");

  const homeLink = document.createElement("a");
  homeLink.textContent = "Home";
  homeLink.style.color = "black"; 
  homeLink.style.fontSize = "35px"; 
  navBar.appendChild(homeLink);

  //hover home link
  homeLink.addEventListener("mouseover", function() {
    homeLink.style.fontWeight = "bold";
  });
  homeLink.addEventListener("mouseout", function() {
    homeLink.style.fontWeight = "normal";
  });

  const menuLink = document.createElement("a");
  menuLink.classList.add("menuButtonClass");
  menuLink.textContent = "Menu";
  menuLink.style.color = "black";
  menuLink.style.fontSize = "35px"; 
  navBar.appendChild(menuLink);

  //hover menu link
  menuLink.addEventListener("mouseover", function() {
    menuLink.style.fontWeight = "bold";
  });
  menuLink.addEventListener("mouseout", function() {
    menuLink.style.fontWeight = "normal";
  });


  const contactLink = document.createElement("a");
  contactLink.textContent = "Contact";
  contactLink.style.color = "black"; 
  contactLink.style.fontSize = "35px"; 
  navBar.appendChild(contactLink);

  //hover contact link
  contactLink.addEventListener("mouseover", function() {
    contactLink.style.fontWeight = "bold";
  });
  contactLink.addEventListener("mouseout", function() {
    contactLink.style.fontWeight = "normal";
  });


  navBar.style.display = "flex"; // display the links in a row
  navBar.style.justifyContent = "space-around"; // space the links evenly
  theDiv.appendChild(navBar);

  navBar.classList.add("nav-bar")
  homeLink.classList.add("link")
  menuLink.classList.add("link")
  contactLink.classList.add("link")

  //title
  const title = document.createElement("h1");
  title.textContent = "Pitaya Palace";
  title.style.color = "black";
  title.style.fontSize = "90px"; 
  
  theDiv.appendChild(title);

  //subtitle
  const description = document.createElement("h3");
  description.textContent = "Rolls, Bowls, and More";
  description.style.fontSize = "35px"; 
  description.style.color = "black"; 
  theDiv.appendChild(description);

  //menu button
  const menuButton = document.createElement("button");
menuButton.textContent = "Menu";
menuButton.style.fontSize = "20px";
menuButton.style.fontFamily="'Merienda', cursive"

  menuButton.style.width="300px";
  menuButton.classList.add("menuButtonClass");
  theDiv.appendChild(menuButton);

  //menu toggle

  function clearContent() {
    theDiv.innerHTML = '';
    theDiv.appendChild(navBar);
  }
  //menuPage
  document.addEventListener("click", (event) => {
    if (event.target.matches(".menuButtonClass")) {
      clearContent(); // clear the content and add the nav bar back
      menuPage(); // add the menu content
      const element = document.querySelector('.menuPaper');
  element.style.marginTop = '50px';
    }
  });
  

  //return to homePage
  homeLink.addEventListener("click", function() {
    theDiv.innerHTML = ''; // clear any existing content from theDiv
    homePage(); // re-create the content for the home page
  });

   //contact page toggle
   contactLink.addEventListener("click", function() {
    clearContent(); // clear any existing content from theDiv
    contactPage(); // re-create the content for the home page
    const element2 = document.querySelector('.businessCard');
  element2.style.marginTop = '100px';
  });
}







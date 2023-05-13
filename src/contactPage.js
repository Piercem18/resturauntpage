export function contactPage(){
const theDiv = document.getElementById("content");

const contactBack=document.createElement("div");
contactBack.classList.add("businessCard");
contactBack.style.height="300px";
contactBack.style.width="600px";
contactBack.style.borderRadius="10px";
contactBack.style.background="white";
;
const manager = document.createElement("p");
manager.textContent = "Manager";
manager.classList.add("info");
manager.style.marginLeft="50px";
manager.style.fontSize="40px";

const phone = document.createElement("p");
phone.textContent = "555-555-5555";
phone.classList.add("info");
phone.style.marginLeft="50px";
phone.style.fontSize="35px";

const email = document.createElement("p");
email.textContent = "perfectlypink@PitayaRocks.com";
email.classList.add("info");
email.style.marginLeft="50px";
email.style.fontSize="35px";


contactBack.appendChild(manager);
contactBack.appendChild(phone);
contactBack.appendChild(email);
theDiv.appendChild(contactBack)

}

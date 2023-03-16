let btns=Array.from(document.querySelectorAll(".gallery-imgs .buttons div"))
let web=Array.from(document.querySelectorAll(".web-images .box img"))
let app=Array.from(document.querySelectorAll(".app-images .box img"))
let ui=Array.from(document.querySelectorAll(".ui-images .box img"))
let graphic=Array.from(document.querySelectorAll(".graphic-images .box img"))
let social=Array.from(document.querySelectorAll(".social-images .box img"))
let mainWeb=document.querySelector(".web-images")
let mainApp=document.querySelector(".app-images")
let mainUI=document.querySelector(".ui-images ")
let mainGraphic=document.querySelector(".graphic-images")
let mainSocial=document.querySelector(".social-images")

btns.forEach((btn)=>{
    btn.onclick=function(){
        if(btn.innerHTML=="All"){
            mainWeb.style.display="flex" 
            mainApp.style.display="flex" 
            mainUI.style.display="flex" 
            mainGraphic.style.display="flex" 
            mainSocial.style.display="flex" 
        }
        else if(btn.innerHTML=="Web Development"){
            mainWeb.style.display="flex" 
            mainApp.style.display="none" 
            mainUI.style.display="none" 
            mainGraphic.style.display="none" 
            mainSocial.style.display="none"
        }
        else if(btn.innerHTML=="Application Development"){
            mainWeb.style.display="none" 
            mainApp.style.display="flex" 
            mainUI.style.display="none" 
            mainGraphic.style.display="none" 
            mainSocial.style.display="none"
        }
        else if(btn.innerHTML=="UI/UX"){
            mainWeb.style.display="none" 
            mainApp.style.display="none" 
            mainUI.style.display="flex" 
            mainGraphic.style.display="none" 
            mainSocial.style.display="none"
        }
        else if(btn.innerHTML=="Graphic Design"){
            mainWeb.style.display="none" 
            mainApp.style.display="none" 
            mainUI.style.display="none" 
            mainGraphic.style.display="flex" 
            mainSocial.style.display="none"
        }
        else if(btn.innerHTML=="Social Media Manager"){
            mainWeb.style.display="none" 
            mainApp.style.display="none" 
            mainUI.style.display="none" 
            mainGraphic.style.display="none" 
            mainSocial.style.display="flex"
        }
    }

})
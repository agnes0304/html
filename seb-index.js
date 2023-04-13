const backdrop = document.querySelector(".backdrop");
const swimBtn = document.querySelector("#swim");
const scubaBtn = document.querySelector("#scuba");
const colorBtn = document.querySelector("#color");
const historyBtn = document.querySelector("#history");
const plantBtn = document.querySelector("#plant");

const swimContent = document.querySelector("#hashtag-swim");
const scubaContent = document.querySelector("#hashtag-scuba");
const colorContent = document.querySelector("#hashtag-color");
const historyContent = document.querySelector("#hashtag-his");
const plantContent = document.querySelector("#hashtag-plant");

swimBtn.addEventListener("click", function(){
    swimContent.style.display = "block";
    backdrop.style.display = "block";
});

scubaBtn.addEventListener("click", function(){
    scubaContent.style.display = "flex";
    scubaContent.style.padding = "1rem";
    backdrop.style.display = "block";
});

colorBtn.addEventListener("click", function(){
    colorContent.style.display = "block";
    backdrop.style.display = "block";
});

historyBtn.addEventListener("click", function(){
    historyContent.style.display = "block";
    backdrop.style.display = "block";
});

plantBtn.addEventListener("click", function(){
    plantContent.style.display = "flex";
    plantContent.style.padding = "1rem";
    backdrop.style.display = "block";
});

backdrop.addEventListener("click", function(){
    swimContent.style.display = "none";
    plantContent.style.display = "none";
    historyContent.style.display = "none";
    colorContent.style.display = "none";
    scubaContent.style.display = "none";
    backdrop.style.display = "none";
});
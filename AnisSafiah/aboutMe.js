let bodyStyle = document.querySelector("body");
bodyStyle.style.fontFamily = "Arial, sans-serif"

let liOne = document.body.querySelectorAll("li span")[0];
liOne.innerHTML = "Anis";
let liTwo = document.body.querySelectorAll("li span")[1];
liTwo.innerHTML = "Movies";
let liThree = document.body.querySelectorAll("li span")[2];
liThree.innerHTML = "Kedah";

let liStyle = document.createElement("style");
liStyle.innerHTML= ".list-item{ color: red; }"
document.head.appendChild(liStyle);

let allLi = document.body.querySelectorAll("li");
for (let i=0; i < allLi.length; i++){
    allLi[i].setAttribute("class","list-item");
}

let myPic = document.createElement("img");
myPic.src = "https://picsum.photos/400/500";
document.body.appendChild(myPic);
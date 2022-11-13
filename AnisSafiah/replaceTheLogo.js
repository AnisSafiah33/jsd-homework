//Exercises: Working with the CSSOM
//Find the Google logo and store it in a variable using DOM traversal
let image = document.querySelector(".lnXdpd");

//Modify the source of the logo IMG so that it's a Yahoo logo
image.srcset = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg";

//Find the Google search button and store it in a variable
let textSearch = document.querySelector(".FPdoLc.lJ9FBc .gNO89b");
textSearch.value = "Yahoo!!!"
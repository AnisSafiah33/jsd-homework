//Exercise: The DOM Detective
//https://generalassemb.ly/
document.querySelector("title"); //title of the page
document.querySelector(".navi_banner_logo a") //The logo in the nav

//The "Find Your Course" button in the nav //document.querySelector(".navi_menu .highlight a");
let naviMenu = document.querySelectorAll(".navi_menu_item_link");
naviMenu[3];

//The heading that says "Learning Today, Leading Tomorrow"
document.querySelector("h1");

//All the DOM nodes that contain course names (such as "Software Engineering", "UX Design Immersive" etc.)
document.querySelectorAll(".navi_menu_dropdown_nested-dropdown");

//The amount of campuses around the world
document.querySelector(".facts_list_item_quantity").innerHTML;

//The number of instructors
document.querySelectorAll(".facts_list_item_quantity")[2].innerHTML;

//The logos of GA's featured clients and hiring partners
document.querySelector(".Employers__list___1cuG_");

//GA's social links at the bottom (Facebook, Twitter, LinkedIn, Instagram, YouTube)
document.querySelector(".navi_footer-social-icons_facebook").href;
document.querySelector(".navi_footer-social-icons_twitter").href;
document.querySelector(".navi_footer-social-icons_linkedin").href;
document.querySelector(".navi_footer-social-icons_instagram").href;
document.querySelector(".navi_footer-social-icons_youtube").href;

//The input where you add your email to sign up for the newsletter (in the footer)
document.querySelector(".navi_footer-signup-input");

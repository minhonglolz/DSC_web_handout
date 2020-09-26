 ;
 (function () {
     let a = document.querySelectorAll('.nav_title');
     console.log(a)
     a.forEach((e, index) => {
         e.addEventListener('mouseover', (o) => {
             document.querySelectorAll('.menus')[index].style.display = "block";
         })
         e.addEventListener('mouseleave', (o) => {
             document.querySelectorAll('.menus')[index].style.display = "none";
         })
     });
 })()
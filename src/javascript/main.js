//   const button = document.querySelector('.menu');
// //   button.addEventListener('click', anime({
// //     targets: '.menu',
// //     translateX: 250,
// //     rotate: '1turn',
// //     backgroundColor: '#FFF',
// //     duration: 8000
// //   }) )
// console.log(button)


  
const mediaQuery = window.matchMedia('(min-width:800px)');
let menu = document.querySelector(".menu");

  function mediaQueryCb(event){
    if(!event.matches){
/*========================================================
                         NAVIGATION
==========================================================*/
const mediaQueryLg = window.matchMedia('(min-width:1200px)');
let menuItem = document.querySelectorAll(".menu__item");
let navItem = document.querySelectorAll(".nav__item");
let navButton = document.querySelector(".nav__button");
let navFooter = document.querySelector(".nav__footer");
let navBar = document.querySelector(".nav__bar");
const animationDuration = 150;
const durantionStagger = animationDuration / 7;

let animateMenu = anime.timeline({
  easing: "linear",
  autoplay: false,
  duration: animationDuration,
});
animateMenu
  .add({
    targets: menuItem[0],
    translateY: 8,
    rotate: 45,
  }, animationDuration)
  .add({
    targets: menuItem[2],
    translateY: -8,
    rotate: -45,
  }, animationDuration)
  .add({
    targets: menuItem[1],
    opacity: 0,
  }, animationDuration)
  .add({
    targets: navBar,
    opacity: [0, 1],
    translateX: ["100%", "0%"],
  }, animationDuration)
  .add({
    targets: [navItem, navButton, navFooter, "hr"],
    translateX: ["100%", "0"],
    opacity: [0, 1],
    delay: anime.stagger(durantionStagger),
  }, animationDuration);

  function animateMenuCb(){
    animateMenu.play();
    animateMenu.finished.then(() => {
      animateMenu.reverse();
    });
  }
  menu.addEventListener("click", animateMenuCb);
  }
    }
  
  

mediaQuery.addEventListener('change', mediaQueryCb);
mediaQueryCb(mediaQuery);
/*========================================================
                         OTHERS
==========================================================*/
let card = document.querySelectorAll('.card');
  let accordion = document.querySelectorAll('.accordion');
  let accordionContent = document.querySelectorAll('.accordion__content');
  let accordionList = document.querySelectorAll('.accordion__list');


  



for (let i = 0; i < accordion.length; i++) {
  const animateAccordion = anime.timeline({
    duration: 150,
    easing: 'linear',
    autoplay:false
  })
  
  animateAccordion
  .add({
    targets:[accordionList[i]],
    maxHeight:[
      {value:'25px', duration:30},
      {value:['30px','50px'], duration:60},
      {value:['50px','500px'], duration:60}
    ],
  });

      function animateAccordionCb(){
      animateAccordion.play();
      animateAccordion.finished.then(() => {
        animateAccordion.reverse();
      });
    }
  accordion[i].onclick=function(){
    accordion[i].classList.toggle('arrow--active');
    animateAccordionCb();
  }}

  /*========================================================
                         OTHERS
==========================================================*/
const boxContent = document.querySelectorAll('.box__content');
const box = document.querySelectorAll('.box');
const boxButton = document.querySelectorAll('.box__content button');



  boxContent.forEach((element,index,Content)=>{
    let animateWorks = anime.timeline({
      duration:150,
      easing: 'linear',
      autoplay:false,
    })
    
    animateWorks
    .add({
      targets:[element],
    opacity:[0, 0.8],
    
    },0)
    .add({
      targets:[boxButton],
      translateY:[100, 0],
    },25)
    .add({
      targets:['.box__content .box__title'],
      translateX:[-100,0],
    },10)

      box[index].addEventListener('mouseenter', ()=>{

        animateWorks.play();
        animateWorks.finished.then(()=>{
          animateWorks.reverse();

        })
      })
      box[index].addEventListener('mouseleave', ()=>{
        animateWorks.play();
        animateWorks.finished.then(()=>{
          animateWorks.reverse();

        })
      })
    
  })
  




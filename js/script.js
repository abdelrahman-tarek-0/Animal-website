let navEle = document.querySelectorAll(".navElement");
let ele = document.querySelectorAll('nav ul ul li a')
let sideBar = document.querySelector('.sidebar')
let burger = document.querySelector('.menu-icon')

navEle.forEach((item) =>{
  item.addEventListener("click", () => {
    if (item.classList.contains("on-active-nav")) {
      item.classList.remove("on-active-nav");
    } else {
      item.classList.add("on-active-nav");
    }

    let arrow = item.querySelector("span");
    if (arrow.classList.contains("on-active-arrow")) {
      arrow.classList.remove("on-active-arrow");
    } else {
      arrow.classList.add("on-active-arrow");
    }

    let cate = item.parentElement.querySelector('ul');
    if (cate.classList.contains("on-active-element")) {
      cate.classList.remove("on-active-element");
    } else {
      cate.classList.add("on-active-element");
    }
    
  })
});
ele.forEach((item)=>{
  item.addEventListener("click",()=>{
    if(item.classList.contains('on-active-nav')){
      item.classList.remove("on-active-nav");
    }else{
      item.classList.add("on-active-nav");
    }
  })
})


burger.addEventListener('click',()=>{
  let burgerChildes = burger.childNodes
  if (burgerChildes[1].classList.contains('on-active-burger-first')) {
    burger.classList.remove('on-active-burger-menu')
    sideBar.classList.remove('on-active-sideBar')
    burgerChildes[1].classList.remove('on-active-burger-first')
    burgerChildes[3].classList.remove('on-active-burger-second')
    burgerChildes[5].classList.remove('on-active-burger-last')
  }else{
    burger.classList.add('on-active-burger-menu')
    sideBar.classList.add('on-active-sideBar')
    burgerChildes[1].classList.add('on-active-burger-first')
    burgerChildes[3].classList.add('on-active-burger-second')
    burgerChildes[5].classList.add('on-active-burger-last')
  }
})

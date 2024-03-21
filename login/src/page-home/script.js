/**
 * 1. lưu toàn bộ trong một array
 * 2. một biến chứa html của trang wep dạng string 
 * 2. duyệt qua mảng array và cộng lại 
 * 
 **/
const listPage = [
    {
        linkPage: "/login/src/page-creative",
        thumb: '/login/src/assets/img/logo-tutorial-course.jpg',
        pageName: 'food',
        informationPage: 'trnag dc viet bằng ngôn ngữ html , js dffdfdfdfddfdftrnag dc viet bằng ngôn ngữ html , js dffdfdfdfddfdf    fdfdf fdfd dfdfdfdfdfdfdfd, css'
    },
    {
        linkPage: "/login/src/food-page/index.html",
        thumb: '/login/src/assets/img/logo-tutorial-course.jpg',
        pageName: 'food',
        informationPage: 'Vào trang js html'
    },

];
const boxContentEle = document.getElementById('boxContent');
let contentListPage = '';

// ui place in section-2
listPage.forEach((ele) => {
    contentListPage += `<div class="box-item" >
    <img src="${ele.thumb}" alt="">
    <div class="item-right">
            <h3>Page: ${ele.pageName} </h3>
            <div>Detail: ${ele.informationPage} </div>  
    </div>
</div>`;
})
boxContentEle.innerHTML = contentListPage
console.log(contentListPage);


/**
 * Start Slider
 * */
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});

/**
 * End of Slider
 * */

/** Start ui section-2
 * boxInitial:
 * if box is visible then iframe is hidden, and revert one
 * 
 * */
const boxInitial = document.getElementById("boxInitial");
const boxPageEle = document.querySelectorAll(".box-item");
const cardPopup = document.getElementById("cardPopup");
const iframePageEle = document.getElementById("iframePage")

boxPageEle.forEach((item, i) => {
    item.addEventListener('click', () => {
        cardPopup.classList.toggle("visible-popup");
        iframePageEle.src = listPage[i].linkPage;
        backgroundPopupEle.classList.toggle("background-popup-visible");
    })
})
/** End ui section 2 
 * boxInitial:
 * if box is visible then iframe is hidden, and revert one
 * 
 * */
// when click background popup turnoff
const backgroundPopupEle = document.getElementById("backgroundPopup");
backgroundPopupEle.addEventListener("click", () => {
    cardPopup.classList.toggle("visible-popup");
    backgroundPopupEle.classList.toggle("background-popup-visible");
   
})
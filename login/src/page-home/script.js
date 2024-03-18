/**
 * 1. lưu toàn bộ trong một array
 * 2. một biến chứa html của trang wep dạng string 
 * 2. duyệt qua mảng array và cộng lại 
 * 
 * 
 *
 **/
const listPage = [
    {
        thumb: '/login/src/assets/img/logo-tutorial-course.jpg',
        pageName: 'food',
        informationPage: 'trnag dc viet bằng ngôn ngữ html , js , css'
    },
    {
        thumb: '/login/src/assets/img/logo-tutorial-course.jpg',
        pageName: 'food',
        informationPage: 'Vào trang js html'
    },
];
const boxContentEle= document.getElementById('boxContent');
let contentListPage = '';


listPage.forEach((ele) => {
    contentListPage += `<div class="box-page" id="boxPage">
    <img src="${ele.thumb}" alt="">
    <div>
        <h3>Page: ${ele.pageName} </h3>
        <div>Detail: ${ele.informationPage} </div>   
        <button>vào trang</button>
    </div>
</div>`;
})
boxContentEle.innerHTML=contentListPage
console.log(contentListPage);
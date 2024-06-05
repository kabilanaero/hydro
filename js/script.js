// ========================================== banner section ==========================================
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    itemActiveOld.classList.remove('active');
    // active new item
    items[itemActive].classList.add('active');
    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}




function aboutSection() {
    window.location.href = "about.html";
}
function productsSection() {
    window.location.href = "product.html";
}
function industriesSection() {
    window.location.href = "industries.html";
}
function navigateToStrategyPurpose() {
    window.location.href = "strategy.html";
}


function navigateToProduct(productId) {
    const url = `details.html?productId=${productId}`;
    window.location.href = url;
}

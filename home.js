const bodyEl = document.getElementById("body1")
const foodData = [{
    name: "Bánh tôm hùm Luke",
    description: "Đây là bánh cuốn",
    img: "./cook/b.jpg"
},

{
    name: "Bánh bông lan Castella",
    description: "Đây là bánh cuốn",
    img: "./cook/n.jpg"
},


{
    name: "Khoai tây mật ong",
    description: "Đây là bánh cuốn",
    img: "./cook/b.jpg"
},


{
    name: "Súp bí đỏ",
    description: "Đây là bánh cuốn",
    img: "./cook/bi.jpg"
},


{
    name: "Blackberry Pana Cotta",
    description: "Đây là bánh cuốn",
    img: "./cook/image.jpg"
},


{
    name: "Kem đào + berry",
    description: "Đây là bánh cuốn",
    img: "./cook/ras.jpg"
},



{
    name: "Súp rau củ",
    description: "Đây là bánh cuốn",
    img: "./cook/bina.jpg"
},



{
    name: "Chocolate nama",
    description: "Đây là bánh cuốn",
    img: "./cook/n.jpg"
},


{
    name: "Mỳ Udon",
    description: "Đây là bánh cuốn",
    img: "./cook/u.jpg"
},


{
    name: "Khoai lang phomai",
    description: "Đây là bánh cuốn",
    img: "./cook/w.jpg"
},


{
    name: "Bánh mochi matcha",
    description: "Đây là bánh cuốn",
    img: "./cook/mochi.jpg"
},


{
    name: "Bánh bạch tuộc",
    description: "Đây là bánh cuốn",
    img: "./cook/m.png"
},


{
    name: "Xôi cốm hạt sen",
    description: "Đây là bánh cuốn",
    img: "./cook/xoi-com.jpg"
},


{
    name: "Cánh gà chiên bơ tỏi",
    description: "Đây là bánh cuốn",
    img: "./cook/ga.jpg"
},




]








const onclickReaction = () => {
    console.log("3")

}




function renderFood(){
    bodyEl.innerHTML=""
    for(let i = 0;i<foodData.length;i++){
        bodyEl.innerHTML+= `
        <div class='pic'>
            
            <div id = 'pic_anh'>
                <img src="${foodData[i].img}" alt="">
            </div>



            
            <p class = "pic_anh_add"><i class="fas fa-utensil-spoon"></i> THÊM VÀO THƯC ĐƠN</p> 
            
            <div class="pic_txt">
                <h3 onclick="assign()">${foodData[i].name}</h3>
                <div><p>Time: 7.pm - 8.pm </p></div>
                <div><p>Always Fresh</p></div>
            </div>
              
            
            <div class = 'reaction'>
                <i class="fas fa-comment"></i>
                <a>0</a>
                <span onclick ="onclickReaction(${i})">
                <i class="fas fa-heart" ></i>
                <span id = "f-${i}">0</span>
                </span>
            </div>

        </div>
    `




}

}

renderFood()

console.log("ádsa");


// Chuyển hướng
function pageChange(){
    window.location.assign('food.html');
}
function assign(){
    window.location.assign('detail.html');
}


var btn = document.getElementById("btn");
var input = document.getElementById("inp");

btn.addEventListener('click', ()=> {
    const value = input.value;
    console.log(value);
     localStorage.setItem('value',value);
     pageChange();
     
    })
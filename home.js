const bodyEl = document.getElementById("body1")
const foodData = [



{
    name: "Cánh gà chiên bơ tỏi",
    description: "Cánh gà chiên bơ tỏi là món ăn đơn giản nhưng sẽ mang lại một bữa ngon miệng, hấp dẫn cho gia đình bạn. Lớp da bên ngoài vàng giòn, thơm lừng mùi bơ, phần thịt gà bên trong thì chín mềm, có vị ngọt đặc trưng của thịt gà. Thêm một món ăn nữa dành cho cả nhà cùng thưởng thức rồi, bạn vào bếp để xem cách làm ngày nhé.",
    img: "./cook/ga.jpg",
    id : 0,
},
{
    name: "Xôi cốm hạt sen",
    description: "Đây là bánh cuốn",
    img: "./cook/xoi.jpg",
    id : 1,
},
{
    name: "Bánh bông lan Castella",
    description: "Bánh bông lan cơ bản (sponge cake) Sponge Cake là một trong những loại bánh cơ bản và đơn giản nhất, bánh được làm bằng cách đánh bông trứng, không sử dụng bơ hoặc rất ít bơ, và cũng không cần bột nở vì bánh nở chủ yếu dựa vào bọt khí trong trứng đánh bông.",
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
    img: "../cook/bi.jpg"
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
    name: "Bánh tôm hùm Luke",
    description: "Banh Tom Hum Lake",
    img: "./cook/b.jpg"
},




]








const onclickReaction = (e) => {
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
                <h3 onclick="assign(this)">${foodData[i].name}</h3>
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

// Chuyển hướng
function pageChange(){
    window.location.assign('food.html');
}
function assign(e){
    console.log(foodData[1].id);
    // window.location.assign('detail.html');
}


var btn = document.getElementById("btn");
var input = document.getElementById("inp");

btn.addEventListener('click', ()=> {
    const value = input.value;
    console.log(value);
     localStorage.setItem('value',value);
     pageChange();
     
    })

// creat new FOOD 

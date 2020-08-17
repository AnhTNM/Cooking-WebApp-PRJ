const bodyEl = document.getElementById("body1")

const onclickReaction = (e) => {
    console.log("3")

}



//Hiện thị Món
async function renderFood(){
    const response = await fetch(`https://5f389e0141c94900169bfe8b.mockapi.io/api/v1/Foods`);
    const data = await response.json();
    bodyEl.innerHTML=""
    for(let i = 0;i<data.length;i++){
        bodyEl.innerHTML+= `
        <div class='pic'>
            
            <div id = 'pic_anh'>
                <img src="${data[i].img}" alt="">
            </div>



            <p class = "pic_anh_add"><i class="fas fa-utensil-spoon"></i> THÊM VÀO THƯC ĐƠN</p> 
            
            <div class="pic_txt">
                <h3 class="nameHome">${data[i].name}</h3>
                <div><p>Time: ${data[i].time}</p></div>
                <div><p>Dành cho ${data[i].kp}</p></div>
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
function assign(){
    window.location.assign('detail.html');
}

//Cick vào món ăn ra detail
bodyEl.addEventListener('click',async (event) => {
    const response = await fetch(`https://5f389e0141c94900169bfe8b.mockapi.io/api/v1/Foods`);
    const data = await response.json();
    const nameFood = event.target.innerText;
    var rs = false;
    for(let i = 0; i < data.length; i++){
        if(nameFood == data[i].name){
            localStorage.setItem('id',i);
            rs = true;
            break;
        }
        else localStorage.removeItem('id');
    }
    if(rs === true){
        assign();
    }
})

//Set giá trị tìm kiếm vào loca
var btn = document.getElementById("btn");
var input = document.getElementById("inp");

btn.addEventListener('click', ()=> {
    const value = input.value;
     localStorage.setItem('value',value.toUpperCase());
     pageChange();
     
    })

// creat new FOOD 

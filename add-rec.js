

var arrUser = [{
    name: "Minh Anh",
    img: "https://scontent.fhan5-5.fna.fbcdn.net/v/t1.0-9/117039274_2800143570220157_8092088375204193952_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=5FUCe-mo6zwAX8yK-DJ&_nc_ht=scontent.fhan5-5.fna&oh=ea2f7e095e3b72e0994fb07200a2739b&oe=5F5492B5",
}]

async function testAPI() {
    const response = await fetch(`https://5f389e0141c94900169bfe8b.mockapi.io/api/v1/Foods`);
    const data = await response.json();
    
}
//Add Du Lieu
const titImg = document.getElementById('title-imgg');
const nameRec = document.getElementById('name-rec');
const  txt = document.getElementById('main-txt');
const perEat = document.getElementById('kp');
const ulIngre = document.getElementById('add-ingre');
const numberList = document.getElementById('number-list');
const mainForm = document.getElementById('form-cmt');
const cmtUser = document.getElementById('in-cmt-user');
const time = document.getElementById("time");
const userUp = document.getElementById("user-up");
const userUp2 = document.getElementById("page-user2");
const picNew = document.getElementById("pic-new2");



async function getData(n) {
    const response = await fetch(`https://5f389e0141c94900169bfe8b.mockapi.io/api/v1/Foods`);
    const data = await response.json();
    //Anh Big
    const imgBig = data[n].img;
    titImg.innerHTML += `<img class="tits-img" src="./cook/${imgBig}">`;
    //Add tên món
    const name = data[n].name;
    nameRec.innerHTML += `<h1 class="name   ">${name}</h1>`;
    //Add tits ở dưới
    const text = data[n].tits;
    txt.innerHTML += `<p class="txt">${text}</p>`
    //Add thông tin user
    userUp.innerHTML += `<img src="${data[n].userImg}" class="user-img" alt="">
    <div>
        <p class="name-user">${data[n].userName}</p>
    <span class="in">
        <i class="fas fa-map-marker-alt"></i>
        ${data[n].userLoca}
    </span>
</div>`
//Add thong tin user duoi
userUp2.innerHTML += ` <img src="${data[n].userImg}" class="user-img" alt="">
<a class="p-txt">Lên sóng bởi</a>
<div class="name-user-2">${data[n].userName}</div>
<a class="p-txt">vào 1 tháng 8 năm 2020</a>
<div class="kb cs-p" onclick="addFr()">Kết bạn bếp</div>`
    //Time
    const tim = data[n].time;
    time.innerHTML += `<i class="far fa-clock"></i>
    <span>${tim}</span>`
    //Add số người ăn
    const eat = data[n].kp;
    perEat.innerHTML += `<i class="fas fa-user"></i>
    <span>${eat}</span>`;
    //Add thành phần
    const ing = data[n].ingredients;
    for(let i = 0; i < ing.length; i++){
        ulIngre.innerHTML += `<li>
        <div class="pd-1">
            <p class="ingredient-quantity">${ing[i]}</p>
        </div>
        </li>`
    }
    //Add các bước
    const step = data[n].steps;
    for(let i = 0; i < step.length; i++){
        numberList.innerHTML += `<li class="number-list-item">
        <div>
            <p>${step[i].stepName}</p>
        </div>
    </li>`
    const ig = step[i].img;
    if("img" in step[i]){
        for(let j = 0; j < step[i].img.length; j++){
            numberList.innerHTML += `
            <a>
                <img src="${step[i].img[j]}" class="step-img" alt="">
            </a>
            `
        }
    }
    }
    //Comment
    var cmtArr = data[n].comments || [];
    if(cmtArr != []){
        for(let i = 0; i < cmtArr.length; i++){
            cmtUser.innerHTML += `
            <div class="box-u-cmt">
        <img src="${cmtArr[i].img}" class="img-comment">
        <a class="name-user-cmt">${cmtArr[i].nameUser}</a>
        </div>
        <div class=" comm">${cmtArr[i].cmt}</div>
        </div>
         `
        }
    }  

    //Món khác của USer
    picNew.innerHTML = ``
    const checkName = data[n].userName;
    for(let i = 0; i < data.length; i++){
        if(data[i].userName == checkName && data[i].name != name){

            picNew.innerHTML += `<div class='pic-new'>
            <img class = 'pic_img'src="./cook/${data[i].img}" alt="">
            <p class = "add-new"><i class="fas fa-utensil-spoon"></i> THÊM VÀO THƯC ĐƠN</p>
            <div class="txt-new">
                <h3 class="name33 cs-p">${data[i].name}</h3>
                <div class="name44"><p>Time: ${data[i].time}</p>
                <p>Dành cho ${data[i].kp}</p></div>
            </div>
            <div class="reaction">
                <i class="fas fa-comment"></i>
                <a>0</a>
                <i class="fas fa-heart"></i>
                <a>0</a>
            </div>
        </div>`
        }
    }
}
const n = localStorage.getItem('id');
getData(n);




//Comment Now
const cmtNow = document.getElementById("cmt-now");
mainForm.addEventListener('submit', (e) => {
    let stringSave="";
    e.preventDefault();
    const comment = mainForm.comment.value;
    cmtNow.innerHTML += `
    <div class="box-u-cmt">
    <img src="${arrUser[0].img}" class="img-comment">
    <a class="name-user-cmt">${arrUser[0].name}</a>
    </div>
    <div class="comm">${comment}</div>
    </div>
     `
     cmtArr.unshift(comment);
})


//Cick mon duoi cung
picNew.addEventListener('click', async (event)=> {
    const response = await fetch(`https://5f389e0141c94900169bfe8b.mockapi.io/api/v1/Foods`);
    const data = await response.json();
    const nameRec = event.target.innerText;
    var rs = false;
    for(let i = 0; i < data.length; i++){
        if(nameRec == data[i].name){
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
function assign(){
    window.location.assign('detail.html');
}


//Hiện tab câu gửi câu hỏi
var modal = document.getElementById('myModal');
var btn = document.getElementById("btn-modal");
var cl = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

cl.onclick = function() {
    modal.style.display = "none";
}




//KB

var modalAddUser = document.getElementById("myModal-2");
function addFr() {
    modalAddUser.style.display = "block";
}

window.onclick = function() {
    if(event.target == modalAddUser){
        modalAddUser.style.display = "none";
    }
}

//Chuyển màn tạo món
function creatRec() {
    window.location.assign("./index.html");
}

//Tìm kiếm món ăn
function pageChange(){
    window.location.assign("food.html");
}

// const searchForm = document.getElementById("searchForm");
// searchForm.addEventListener('submit', ()=> {
//     const value = searchForm.searchTwo.value;
//      localStorage.setItem('value',value);    
// })

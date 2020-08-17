

var arrUser = [{
    name: "Trần Vũ",
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


async function getData(n) {
    const response = await fetch(`https://5f389e0141c94900169bfe8b.mockapi.io/api/v1/Foods`);
    const data = await response.json();
    //Anh Big
    const imgBig = data[n].img;
    titImg.innerHTML += `<img class="tits-img" src="${imgBig}">`;
    //Add tên món
    const name = data[n].name;
    nameRec.innerHTML += `<h1 class="name   ">${name}</h1>`;
    //Add tits ở dưới
    const text = data[n].tits;
    txt.innerHTML += `<p class="txt">${text}</p>`
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
}
const n = localStorage.getItem('id');
getData(n);

//Comment

mainForm.addEventListener('submit', (e) => {
    let stringSave="";
    e.preventDefault();
    const comment = mainForm.comment.value;
    cmtUser.innerHTML += `
    <div class="box-u-cmt">
    <img src="${arrUser[0].img}" class="img-comment">
    <a class="name-user-cmt">${arrUser[0].name}</a>
    </div>
    <div class="comm">${comment}</div>
    </div>
     `
     cmtArr.unshift(comment);
})


//


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
var kb = document.getElementsByClassName("kb")[0];
var modalAddUser = document.getElementById("myModal-2");
kb.onclick = function() {
    modalAddUser.style.display = "block";
}

window.onclick = function() {
    if(event.target == modalAddUser){
        modalAddUser.style.display = "none";
    }
}

//

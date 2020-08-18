let input0ne = document.getElementById("input-material");
let button = document.getElementById("delete-material");
let addMaterial = document.getElementById("add-material");
let material = document.getElementById("material");

// add Nguyen Lieu
 addMaterial.addEventListener("click",function(){
            material.innerHTML+=` <div class="container_creat-form-info-material-inputone">
            <input type="text" name="" id="input-material" placeholder="..."  id="material-food" class="inGre">
            <button id="input-" onclick="delete_item(this)"><i class="fas fa-trash"></i></button>
            </div>`
    })
// add thanh phan
let newStep=document.getElementById("new-step");
let addStep=document.getElementById("add-step");

    newStep.addEventListener("click",function(){
        addStep.innerHTML+=`
        <li>
        <input type="text" class="input-step" id="step-food" placeholder="...">
        <button onclick="delete_item(this)"><i class="fas fa-trash"></i></button>
        </li>`
    })
// delete nguyen lieu , thanh phan 
     function delete_item(e){
        e.parentNode.parentNode.removeChild(e.parentNode);
    }

// get value Page
let saveData=document.getElementById("save-data");

//call value input  
let nameFood=document.getElementById("name");
let shareinfo=document.getElementById("share-food");
let people=document.getElementById("people-food");
let time=document.getElementById("time-food");
let stepFood=document.getElementsByClassName("input-step");
let ingreFood = document.getElementsByClassName('inGre');


//Post lên mock
saveData.addEventListener('click',() => {
        const nameValue = nameFood.value;
        const titsValue = shareinfo.value;
        const kpValue = people.value+" phần ăn";
        const timeValue = time.value;
        const imgValue = localStorage.getItem('img');
    
        const stepValue = [];
        const ingreValue = [];

        for(let i = 0; i < ingreFood.length; i++){
            ingreValue.push(ingreFood[i].value);
        }
        console.log(ingreValue);

        for(let i = 0; i < stepFood.length; i++){
            stepValue.push({'stepName': stepFood[i].value});
        }
        console.log(stepValue);

        getPostData({
           id: 11,
            imgGr: imgValue,
           name: nameValue,
           tits: titsValue,
           kp: kpValue,
           time: timeValue,
           steps: stepValue,
           ingre: ingreValue,
        });
        
    });

    const getPostData = async(FoodData) => {
        const respone = await fetch(
            'https://5f389e0141c94900169bfe8b.mockapi.io/api/v1/Foods',
            { method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                id: FoodData.id,
                img: FoodData.imgGr,
                name: FoodData.name,
                tits: FoodData.tits,
                kp: FoodData.kp,
                time: FoodData.time,
                steps: FoodData.steps,
                ingredients: FoodData.ingre,
                userName: 'Minh Anh',
                userLoca: 'Hồ Chí Minh City',
                userImg: 'https://dotobjyajpegd.cloudfront.net/photo/5d3a66f962710e25dc99ffa3',
              }),
        },
        );
        const content = await respone.json();
        
        
        goDetail();
    };

//  delete-user-input
function myFunction() { 
   if (confirm("Bạn có thực sự muốn xóa không???")){

       location.reload()
   }
   else {
       alert("Bạn nên save bài viết lại không lại quên mất ^^!")
   }
}
//input img
function encodeImageFileAsURL(element) {
    var file = element.files[0];
    localStorage.setItem('img', file.name);
    var reader = new FileReader();
    reader.onloadend = function() {
        let imgUrl=reader.result;
        let image=document.getElementById("add-img");   
        image.innerHTML+=`<img class="img" src="${imgUrl}">
        <button class="button-img" onclick="delete_item(this)"><i class="fas fa-trash"></button>`
    }
    reader.readAsDataURL(file);
  }

  //chuyen trang
  function goDetail(e) {
      var txt; 
      var r  = confirm("Nhanh lên !! còn một bước nữa thôi là chúng ta có món mới . ?")
          if (r = true){
            window.location.assign("home.html");
          } else {
              alert("Ố KỀ Làm món ăn thêm chi tiết đi nào !! ")
          }
      }
     

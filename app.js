let input = document.getElementById("input-material");
let button = document.getElementById("delete-material");
let addMaterial = document.getElementById("add-material");
let material = document.getElementById("material");

// add Nguyen Lieu
 addMaterial.addEventListener("click",function(){
            material.innerHTML+=` <div class="container_creat-form-info-material-inputone">
            <input type="text" name="" id="input-material" placeholder="..."  id="material-food">
            <button id="input-" onclick="delete_item(this)"><i class="fas fa-trash"></i></button>
            </div>`
    })
// add thanh phan
let newStep=document.getElementById("new-step")
let addStep=document.getElementById("add-step")

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
let ingredientFood=document.getElementById("ingredient-food");
let stepFood=document.getElementById("step-food");



saveData.addEventListener("click",function(){
        const listArray = 'array';
        const array = {
            ten:nameFood.value,
            thongtin:shareinfo.value,
            khauphan:people.value,
            thoigian:time.value,
            thanhphan:ingredientFood.value,
            buoc:stepFood.value,
        }
    localStorage.setItem(listArray,JSON.stringify(array))
    });


// delete-user-input
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
    var reader = new FileReader();
    reader.onloadend = function() {
    let imgUrl=reader.result;
    let image=document.getElementById("add-img")
        image.innerHTML+=`<img class="img" src="${imgUrl}">
        <button class="button-img" onclick="delete_item(this)"><i class="fas fa-trash"></button>`
    }
    reader.readAsDataURL(file);
  }


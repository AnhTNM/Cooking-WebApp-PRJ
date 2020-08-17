
const foodData = [




    {
        name: "Bánh tôm hùm Luke",
        description: "Đây là bánh cuốn",
        img: "./cook/b.jpg",
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
        img: "./cook/xoi.jpg",
    },
    
    
    {
        name: "Cánh gà chiên bơ tỏi",
        description: "Đây là bánh cuốn",
        img: "./cook/ga.jpg",
        
    },
    

];



var body = document.getElementById("body");

function renderFood(foods){
    body.innerHTML=''
    for(let i = 0;i<foods.length;i++){
        body.innerHTML+= `
        <div class='body_wrapper'>
            
        <div class = 'body_wrapper_content' id ="clickChange">
            <h2 >${foods[i].name}</h2>
            <p>${foods[i].description}</p>
        </div>

        <div>  <img src="${foods[i].img}" alt=""> </div> 
    </div>`
    }
}
renderFood(foodData)






// Search

var searchForm = document.getElementById("searchForm");
searchForm.addEventListener('submit',(e)=> {
    e.preventDefault();
    const name = searchForm.search.value;
    var searchResult = [];
    for(let i = 0;i<foodData.length;i++){
        if(foodData[i].name.includes(name)){
            searchResult.push(foodData[i]);
        }
    }
    renderFood(searchResult);
})

var getValue = localStorage.getItem('value');
function search(getValue){

    var searchResult = [];
        for(let i = 0;i<foodData.length;i++){
            if(foodData[i].name.includes(getValue)){
                searchResult.push(foodData[i]);
            }
        }
        renderFood(searchResult);
        if   (searchResult[0].name.indexOf("Cánh") > - 1){
  
            var setId = localStorage.setItem("id", 0);
         }
         if (searchResult[0].name.indexOf("Xôi") > - 1){
  
            var setId = localStorage.setItem("id", 1);
         }else if (searchResult[0].name.indexOf("Beef") > - 1){
            var setId = localStorage.setItem("id", 2);
         }
         
}
search(getValue);

var clickChange = document.getElementById('clickChange');

clickChange.addEventListener("click", () => {
    window.location.assign('detail.html');
})















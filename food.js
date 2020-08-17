
var body = document.getElementById("body");
//So sánh name sau đó gán key 'id' trên local = vị trí
body.addEventListener('click',async (event) => {
    const response = await fetch(`https://5f389e0141c94900169bfe8b.mockapi.io/api/v1/Foods`);
    const data = await response.json();
    const nameFood = event.target.innerText;
    for(let i = 0; i < data.length; i++){
        if(nameFood == data[i].name){
            localStorage.setItem('id',i);
        }
    }
    testCha();
})
//




// Search từ màn search
var searchForm = document.getElementById("searchForm");
searchForm.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const response = await fetch(`https://5f389e0141c94900169bfe8b.mockapi.io/api/v1/Foods`);
    const data = await response.json();
    const name = searchForm.search.value;
    var searchResult = [];
    for(let i = 0;i<data.length;i++){
        const nameSe = data[i].name.toUpperCase();
        if(nameSe.includes(name.toUpperCase())){
            searchResult.push(data[i]);
        }
    }
    renderFood(searchResult);
})

//Search từ màn home
var getValue = localStorage.getItem('value');
async function search(getValue){
    const response = await fetch(`https://5f389e0141c94900169bfe8b.mockapi.io/api/v1/Foods`);
    const data = await response.json();
    var searchResult = [];
        for(let i = 0;i<data.length;i++){
            const name = data[i].name.toUpperCase();
            if(name.includes(getValue)){
                searchResult.push(data[i]);
            }
        }
        renderFood(searchResult);
         
}
search(getValue);

//Hiển thị kết quả search
function renderFood(searchResult){
    body.innerHTML=''
    for(let i = 0;i<searchResult.length;i++){
        body.innerHTML+= `
        <div class='body_wrapper'>
            
        <div class = 'body_wrapper_content'>
            <h2 class="blu-name">${searchResult[i].name}</h2>
            <p class="blu-tit">${searchResult[i].tits}</p>
        </div>

        <div>  <img src="${searchResult[i].img}" alt=""> </div> 
    </div>`
    }
}
renderFood(searchResult);


//Chuyển trang
function testCha(){
    window.location.assign('detail.html');
}









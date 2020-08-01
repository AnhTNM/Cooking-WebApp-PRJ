var data = [  
  "Cơm Gà Sốt", 
  "Mì xào bò", 
  "Bún Bò Huế", 
  "Nem Chua", 
  "Cơm Gà Nướng", 
  "Phở Bò", 
  "Bánh Tráng Trộn", 
  "Mỳ Ý", 
  "Pizza", 
  "Phở Cuốn", 
  "Tôm Hấp", 
  "Mực Xào Cần Tây", 
  "Thịt Lợn Luộc" 
]; 

function search(value){
    document.getElementById("datalist-food").innerHTML = "";
       
    var html = "";
    var new_data = [];
    data.forEach(element => {
        let new_string = to_slug(element);
        if(new_string.indexOf(to_slug(value)) !== -1){
            new_data.push(element);
        }
    });

    new_data.forEach(element => {
        html += "<li>"+element+"</li>";
    });
    document.getElementById("datalist-food").innerHTML += html;

}

function to_slug(str)
{
    str = str.toLowerCase(); 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-zA-Z-\s])/g, '');
 
    return str;
}
function remove_datalist(){
    document.getElementById("datalist-food").innerHTML = "";
  }

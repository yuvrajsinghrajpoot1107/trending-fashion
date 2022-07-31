console.log("i am working");
console.log("i am in console");



function getdata(){
  
   url="https://script.google.com/macros/s/AKfycbxrbS7a8Q51QulLyIASMwYtnb4i8PU2OwTF-EVrrJoYVokKzgTCDSsmdsGOMnSQo8u8/exec";
   
   //url="https://ssl.gstatic.com/trends_nrtr/3045_RC01/embed_loader.js";
   fetch(url).then((responce) => {
          
          const data = responce.json();
          console.log(data);
          buildTable(data)
    })
}


getdata()

function buildTable(data){
   var table = document.getElementById('myTable')
        for(var i=1; i< 6  ; i++){
            var row = `<tr>
                 <td>>${data[i].gender}</td>
                 <td>>${data[i].wear}</td>
                 <td>>${data[i].cloth}</td>
                 <td>>${data[i].attribute}</td>
            
            </tr>`

            table.innerHTML += row
        }
}



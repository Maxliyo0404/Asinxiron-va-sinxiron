let wrapper = document.getElementById("cards");
let data = []
fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
.then(respone =>respone.json())
.then(data => {
    
})
 function renderData(){
    const card = data.map(el => `{
        
        }`)
 }
let wrapper = document.getElementById("cards");
let datas = []
fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
.then(respone =>respone.json())
.then(data => {
     datas = datas;
     renderData(data);
})
 function renderData(data){
    const card = data.map(el => `
        <div class="card">
            <img class="rasm"  src="${el.avatar}" alt="${el.name}">
             <p class="text">${el.name}</p>
            <a class="data" href="#">${new Date(el.createdAt).toLocaleDateString()}</a>
    </div>
        `).join("");
        wrapper.innerHTML = card;
 }
 
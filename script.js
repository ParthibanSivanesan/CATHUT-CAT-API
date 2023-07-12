let api = `https://api.thecatapi.com/v1/breeds`;

let parent = document.querySelector(".parent");

fetchcat();

async function fetchcat(){
    let data = await fetch(api);
    let result = await data.json();

    console.log("result", result);

renderingcats(result);

}

async function renderingcats(result){
    for(var i=0; i<result.length; i++){
        const card = `
        <div class="card">
       
          <img class="cat-image" src='https://cdn2.thecatapi.com/images/${result[i].reference_image_id}.jpg' alt="Not Found" onerror="this.onerror=null; this.src='/cat-temp.jpg'">
          <div class="card-content">
            
            <h3 class="cat-name">${result[i].name}</h3>
            <div class="cat-orgin"><p>From ${result[i].origin}</p></div>
            <p class="heading">Adaptability
                        <div class="progress bars">
                        <div class="progress-bar bg-success " role="progressbar" style="width: ${(100 - (100 / result[i].adaptability))}%" aria-valuenow="${result[i].adaptability}" aria-valuemin="0" aria-valuemax="10">${result[i].adaptability}</div>
                        </div>
            </p>
            <p class="heading">Affection 
                        <div class="progress bars">
                        <div class="progress-bar bg-success" role="progressbar" style="width: ${(100 - (100/result[i].affection_level))}%" aria-valuenow="${result[i].affection_level}" aria-valuemin="0" aria-valuemax="10">${result[i].affection_level}</div>
                        </div>
            </p>
            <p class="heading">Child Friendly 
                        <div class="progress bars">
                        <div class="progress-bar bg-success" role="progressbar" style="width: ${(100 - (100/result[i].child_friendly))}%" aria-valuenow="${result[i].child_friendly}" aria-valuemin="0" aria-valuemax="10">${result[i].child_friendly}</div>
                        </div>
            </p>
            <p class="heading">Dog Friendly 
                        <div class="progress bars">
                        <div class="progress-bar bg-success" role="progressbar" style="width: ${(100 - (100/result[i].dog_friendly))}%" aria-valuenow="${result[i].dog_friendly}" aria-valuemin="0" aria-valuemax="10">${result[i].dog_friendly}</div>
                        </div>
            </p>
            <p class="heading">Energy Level 
                        <div class="progress bars">
                        <div class="progress-bar bg-success" role="progressbar" style="width: ${(100 - (100/result[i].energy_level))}%" aria-valuenow="${result[i].energy_level}" aria-valuemin="0" aria-valuemax="10">${result[i].energy_level}</div>
                        </div>
            </p>
            <p class="cat-type"><b>Type</b> ${result[i].temperament}</p>
              </div>
        </div>
      `;
     
     parent.insertAdjacentHTML("beforeend", card);
      
    }

}

function callfun(obj)
 {
        var altimg = "cat-temp.jpg";
        obj.src=altimg;
}

function catSearch(){
    let userInput = document.getElementById("searchbar").value;
    userInput = userInput.toLowerCase();
  
    let search = document.getElementsByClassName("card");
    
    for(var i=0; i<search.length; i++){
        if(!search[i].innerHTML.toLowerCase().includes(userInput)){
            search[i].style.display = "none";
        }else{
            search[i].style.display = "list-item";
        }
    }
  }

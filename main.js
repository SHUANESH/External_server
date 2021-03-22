
const baseAPI = `https://api.tvmaze.com/search/shows?q=`;
let input_search = document.getElementById(`input1`);
let info_search = document.getElementById(`info_search`);
let container = document.getElementById(`container`);
let lod_img = document.getElementById(`lod_img`);

function getAPI(params) {
    return fetch(`${baseAPI}${params}` , {})
    .then((res)=>{return res.json()})
};


container.innerHTML = "";
let result_array = [];
async function Show_search_results_list() {
    try {
        lod_img.src = `https://icons8.com/preloaders/preloaders/805/Glowing%20ring.gif`;
        result_array = await getAPI(input_search.value);

        result_array.forEach(searchResult => {
            let resultArray = searchResult.show;
            console.log(resultArray); 
            container.innerHTML += `<div class='item_class'>
                                      <h3> Name: ${resultArray.name}</h3>
                                      <a href="${resultArray.url}">
                                      <img src="${resultArray.image.medium} " id="img_array" alt="img" id="lod_img" height="260px" width="200px" />
                                      </a> 
                                      <h4> Genre: ${resultArray.genres}</h4> 
                                    </div>
                                      
                                    `

        });
    }
     catch (reject) {
        console.log(reject);
    }
    finally{
        lod_img.style.display =`none`
    }
};
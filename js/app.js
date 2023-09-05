const loadProducts = async() => {
    const url = `https://openapi.programming-hero.com/api/ai/tools/`;
    const res = await fetch(url);
    const data = await res.json();
    displayProducts(data.data.tools);
}

const displayProducts = products => {
    const productContainer = document.getElementById("phone_container");
    // Display only six phones at first time
    const seeAll = document.getElementById("see_all_button");
    if(products.length >6){
        products =products.slice(0,12);
        
        seeAll.classList.remove("d-none");

    }
    else{
        seeAll.classList.add("d-none");
    }

    document.getElementById("btn_see_all").addEventListener("click", function () {
        newProducts = products.slice(0, products.length);

        
    
    })
    

    products.forEach(product => {
        console.log(product);
        const productDiv = document.createElement("div");
        productDiv.classList.add("col");
        productDiv.innerHTML = `

            <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="No Figure"
                    <div class="card-body">
                      <h6 class="card-title">Features</h6>
                      <ol>
                        <li>${product.features[0]}</li>
                        <li>${product.features[1]}</li>
                        <li>${product.features[2]}</li>
                      </ol>
                      <h6>${product.name}</h6>
                      <p>${product.published_in}</p>
                      <button onclick = "loadProductDetailse(${product.id})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Detailse</button>
                      
                    </div>
            </div>
        `;
        productContainer.appendChild(productDiv);

    })
 
}

document.getElementById("startingButton").addEventListener("click",function (){
    const loader = document.getElementById("loader");
    loader.classList.add("d-none");
})


const loadProductDetailse = async id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}



loadProducts();
const productDetails = document.getElementById('productDetails');
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('productId'));
const products = JSON.parse(localStorage.getItem('products') || '[]');
const product = products.find(p => p.id === productId);

if (product) {
    const productHTML = `
        <section class="product-ban" style="background-image: url('${product.bannerImgSrc}');">
        </section>
        <section class="products-container">
            <div class="product-content">
                <div class="product-image">
                    <img src="${product.imgSrc}" alt="${product.name}">
                    <div class="wrap">
                        <button id="openModalButton" class="button">ENQUIRE NOW</button>
                    </div>
                    <div id="myModal" class="modal">
                        <div class="modal-content">
                            <span class="close">&times;</span>    
                            <div class="form-container">
                                <h2 class="contacthead">Contact Us</h2>
                                <p class="contactpara">Leave the message here we will get back to you!</p>
                                <form method="POST" id="form">
                                    <input type="hidden" name="access_key" value="8edf1a37-f184-4a6f-bfa7-58a3dfcde646">
                                    <span>
                                        <label for="name">Name</label><br>
                                        <input type="text" name="name" id="name" required>
                                    </span><br>
                                    <span>
                                        <label for="phone" id="phone-label">Phone Number</label><br>
                                        <input type="number" name="phone" id="phone" required>
                                    </span><br>
                                    <button type="submit">Submit Form</button>
                                    <div id="result"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-content-rightside">
                    <h1 class="prod-heading">${product.name}</h1>
                    <p class="prod-description">${product.description}</p>
                    <div class="product-details">
                        <p>${product.details}</p>
                    </div>
                    ${product.keyPoints ? `
                        <div class="product-keypoints">
                            <ul>
                                ${product.keyPoints.map(keyPoint => `
                                    <li>${keyPoint}</li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            </div>
            ${product.subProducts ? `
                <div class="similar-products">
                    <div class="sub-products">
                        
                            ${product.subProducts.map(subProduct =>
                                 `
                                <div class="subproduct-box">
                                    <div class="subproduct-images">
                                        <img src="${subProduct.imgSrc}" alt="${subProduct.name}">
                                    </div>
                                    <div class="subproduct-para">
                                        <strong>${subProduct.name}</strong> - ${subProduct.description}
                                    </div>
                                </div>
                            `).join('')}
                    
                    </div>
                </div>
            ` : ''}
        </section>
    `;
    productDetails.innerHTML = productHTML;

    // Modal functionality
    const modal = document.getElementById("myModal");
    const openModalButton = document.getElementById("openModalButton");
    const closeModalSpan = document.querySelector(".close");

    openModalButton.onclick = function() {
        modal.style.display = "block";
    }

    closeModalSpan.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

} else {
    productDetails.innerHTML = '<p>Product not found</p>';
}

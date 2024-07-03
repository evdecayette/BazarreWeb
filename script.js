document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            id: 1,
            title: "Product 1",
            price: "$10.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "images/blank-1886001_1280.png"
        },
        {
            id: 2,
            title: "Product 2",
            price: "$15.00",
            description: "Nulla sit amet efficitur magna.",
            image: "images/blank-1886008_1280.png"
        },
        {
            id: 3,
            title: "Product 3",
            price: "$20.00",
            description: "Suspendisse potenti. Vivamus fermentum bibendum ex.",
            image: "images/blank-1886013_1280.png"
        },
        {
            id: 4,
            title: "Product 4",
            price: "$20.00",
            description: "Suspendisse potenti. Vivamus fermentum bibendum ex.",
            image: "images/isolated-t-shirt-1852115_1280.png"
        },
        {
            id: 5,
            title: "Product 5",
            price: "$20.00",
            description: "Suspendisse potenti. Vivamus fermentum bibendum ex.",
            image: "images/shoes-2831821_1280.jpg"
        },
        {
            id: 6,
            title: "Product 6",
            price: "$20.00",
            description: "Suspendisse potenti. Vivamus fermentum bibendum ex.",
            image: "images/shoes-584850_1280.jpg"
        },
        {
            id: 7,
            title: "Product 7",
            price: "$20.00",
            description: "Suspendisse potenti. Vivamus fermentum bibendum ex.",
            image: "images/sports-4875288_1280.jpg"
        },
        {
            id: 8,
            title: "Product 8",
            price: "$20.00",
            description: "Suspendisse potenti. Vivamus fermentum bibendum ex.",
            image: "images/feet-1840619_1280.jpg"
        }
    ];

    const modal = document.getElementById("product-modal");
    const closeBtn = document.querySelector(".close-btn");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");

    document.querySelectorAll(".view-details").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const productId = parseInt(this.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);

            if (product) {
                modalImg.src = product.image;
                modalTitle.textContent = product.title;
                modalPrice.textContent = product.price;
                modalDescription.textContent = product.description;
                modal.style.display = "block";
            }
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

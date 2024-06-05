const products = [
    { 
        id: 1, 
        name: "Hydraulic Pumps", 
        imgSrc: "images/hydraulic.jpg",
        bannerImgSrc: "images/ban1.jpg",
        description: "High-quality hydraulic pumps for industrial applications. Durable and efficient.",
        details: "Our hydraulic pumps are designed to handle the most demanding applications. They are made from high-quality materials and engineered for performance and reliability.",
        keyPoints: [
            "Durable construction",
            "Efficient performance",
            "Suitable for industrial applications",
            "High-quality materials"
        ],
        subProducts: [
            { 
                name: "Gear Pump", 
                imgSrc: "images/gear_pump.png", 
                description: "Durable and efficient gear pumps.",
                details: "Gear pumps are known for their durability and efficiency. They are ideal for applications requiring a steady flow of hydraulic fluid.",
                keyPoints: [
                    "Steady flow",
                    "Durable design",
                    "Efficient operation"
                ]
            },
            { 
                name: "Vane Pump", 
                imgSrc: "images/vane-pump.png", 
                description: "High-performance vane pumps for various applications.",
                details: "Vane pumps provide high performance and are suitable for a wide range of hydraulic applications. They offer reliable and efficient operation.",
                keyPoints: [
                    "High performance",
                    "Wide range of applications",
                    "Reliable operation"
                ]
            },
            { 
                name: "Piston Pump", 
                imgSrc: "images/piston-pump.png", 
                description: "Reliable and powerful piston pumps.",
                details: "Piston pumps are designed for power and reliability. They are perfect for applications that require high pressure and efficiency.",
                keyPoints: [
                    "High pressure",
                    "Reliable",
                    "Efficient"
                ]
            },
            { 
                name: "Hydro Pump", 
                imgSrc: "images/hydraulic-pump.png", 
                description: "Versatile hydro pumps for multiple uses.",
                details: "Hydro pumps are versatile and can be used in a variety of applications. They are known for their flexibility and performance.",
                keyPoints: [
                    "Versatile",
                    "Flexible",
                    "High performance"
                ]
            }
        ]
    },
    { 
        id: 2, 
        name: "Hydraulic Valves", 
        imgSrc: "images/valves.jpg",
        bannerImgSrc: "images/ban1.jpg",
        description: "Precision hydraulic valves for precise flow control. Reliable and robust.",
        details: "Our hydraulic valves are built to provide precise control of hydraulic fluid flow. They are available in a variety of configurations to meet your specific needs.",
        keyPoints: [
            "Precise flow control",
            "Reliable",
            "Robust design",
            "Variety of configurations"
        ],
        subProducts: [
            { 
                name: "Directional Control Valve", 
                imgSrc: "images/directional-control-valve.png", 
                description: "Efficient directional control valves.",
                details: "Directional control valves are essential for controlling the direction of hydraulic fluid flow. They are efficient and reliable.",
                keyPoints: [
                    "Controls fluid direction",
                    "Efficient",
                    "Reliable"
                ]
            },
            { 
                name: "Throttle Valve", 
                imgSrc: "images/throttle-valve.png", 
                description: "Precision throttle valves for controlling flow rate.",
                details: "Throttle valves are designed for precision control of the flow rate. They are ideal for applications requiring accurate flow regulation.",
                keyPoints: [
                    "Precise flow control",
                    "Accurate regulation",
                    "Reliable"
                ]
            },
            { 
                name: "Cartridge Valve", 
                imgSrc: "images/cartridge_valve.png", 
                description: "Compact and versatile cartridge valves.",
                details: "Cartridge valves are compact and versatile, making them suitable for a variety of hydraulic systems. They offer reliable performance in a small package.",
                keyPoints: [
                    "Compact",
                    "Versatile",
                    "Reliable performance"
                ]
            }
        ]
    },
    { 
        id: 3, 
        name: "Power Pack", 
        imgSrc: "images/power-pack.png",
        bannerImgSrc: "images/ban1.jpg",
        description: "Compact and powerful hydraulic power packs. Efficient and easy to install.",
        details: "Our hydraulic power packs are designed to provide a reliable source of hydraulic power. They are compact, efficient, and easy to install.",
        keyPoints: [
            "Compact design",
            "Powerful",
            "Efficient",
            "Easy to install"
        ]
    },
    {
        id: 4,
        name: "Hydraulic Fittings",
        imgSrc: "images/fitting2.jpg",
        bannerImgSrc: "images/ban1.jpg",
        description: "High-quality hydraulic fittings for secure and leak-proof connections.",
        details: "Our hydraulic fittings are designed to provide secure and leak-proof connections. They are made from high-quality materials and are available in a variety of sizes and configurations.",
    keyPoints: [
            "Secure connections",
            "Leak-proof",
            "High-quality materials",
            "Variety of sizes"
        ],
       
    },
    { 
        id: 5, 
        name: "Industrial Valves", 
        imgSrc: "images/intr1.jpg",
        bannerImgSrc: "images/ban1.jpg",
        description: "Durable industrial valves for a variety of applications. High performance and reliability.",
        details: "Our industrial valves are built to handle a wide range of applications. They are designed for high performance and reliability, ensuring smooth operation in any environment.",
        keyPoints: [
            "Durable",
            "High performance",
            "Reliable",
            "Versatile applications"
        ],
        subProducts: [
            { 
                name: "Gate Valve", 
                imgSrc: "images/gate-valve.png", 
                description: "Reliable gate valves for shut-off applications.",
                details: "Gate valves are ideal for shut-off applications. They provide a reliable seal and are designed for durability.",
                keyPoints: [
                    "Shut-off applications",
                    "Reliable seal",
                    "Durable"
                ]
            },
            { 
                name: "Ball Valve", 
                imgSrc: "images/ball-valve.png", 
                description: "Durable ball valves for various industrial uses.",
                details: "Ball valves offer durability and reliable performance in a variety of industrial applications. They are designed for ease of use and maintenance.",
                keyPoints: [
                    "Durable",
                    "Reliable performance",
                    "Easy to use"
                ]
            },
            { 
                name: "Globe Valve", 
                imgSrc: "images/globe-valve.png", 
                description: "High-performance globe valves for flow control.",
                details: "Globe valves are designed for precise flow control. They offer high performance and are suitable for a variety of applications.",
                keyPoints: [
                    "Flow control",
                    "High performance",
                    "Versatile applications"
                ]
            },
            { 
                name: "Check Valve", 
                imgSrc: "images/check-valve.png", 
                description: "Versatile check valves for multiple applications.",
                details: "Check valves are versatile and prevent backflow in hydraulic systems. They are essential for maintaining system integrity.",
                keyPoints: [
                    "Prevents backflow",
                    "Versatile",
                    "Maintains system integrity"
                ]
            },
            { 
                name: "Butterfly Valve", 
                imgSrc: "images/butterfly-valve.png", 
                description: "Efficient butterfly valves for air control.",
                details: "Butterfly valves are efficient for controlling air flow in various systems. They offer ease of operation and reliability.",
                keyPoints: [
                    "Air control",
                    "Efficient",
                    "Reliable"
                ]
            },
            { 
                name: "Needle Valve", 
                imgSrc: "images/needle-valve.png", 
                description: "Precision needle valves for fine control.",
                details: "Needle valves are designed for precision control of flow rates. They are ideal for applications requiring fine adjustments.",
                keyPoints: [
                    "Precision control",
                    "Fine adjustments",
                    "Reliable"
                ]
            }
        ]
    },
    { 
        id: 6, 
        name: "Hydraulic Directional Control Valves", 
        imgSrc: "images/hydraulic-directional-control-valve.png",
        bannerImgSrc: "images/ban1.jpg",
        description: "Reliable directional control valves for efficient hydraulic fluid flow management.",
        details: "Our hydraulic directional control valves provide efficient and precise control of hydraulic fluid flow direction. These valves are built for reliability and durability, ensuring optimal performance in various industrial applications.",
        keyPoints: [
            "Efficient flow management",
            "Precise control",
            "Reliable",
            "Durable",
            "Suitable for industrial applications"
        ]
    }
];

localStorage.setItem('products', JSON.stringify(products));

// Retrieve the products from localStorage
const retrievedProducts = JSON.parse(localStorage.getItem('products'));

function navigateToProduct(productId) {
    window.location.href = `details.html?productId=${productId}`;
}

const productPageRow = document.getElementById('productPageRow');

retrievedProducts.forEach(product => {
    const productCol = document.createElement('div');
    productCol.className = 'productpage-col';

    const productBox = document.createElement('div');
    productBox.className = 'productpage-box';
    productBox.onclick = () => navigateToProduct(product.id);

    const productImage = document.createElement('div');
    productImage.className = 'productpage-image';

    const img = document.createElement('img');
    img.src = product.imgSrc;
    img.alt = product.name;

    productImage.appendChild(img);
    productBox.appendChild(productImage);

    const productPara = document.createElement('div');
    productPara.className = 'productpage-para';

    const h4 = document.createElement('h4');
    h4.textContent = product.name;

    const arrow = document.createElement('div');
    arrow.className = 'arrow';
    arrow.innerHTML = '<span></span>';

    productPara.appendChild(h4);
    productPara.appendChild(arrow);

    productBox.appendChild(productPara);
    productCol.appendChild(productBox);
    productPageRow.appendChild(productCol);
});

let serviceBoxes = document.querySelectorAll('.service-boxes')[0];
let services = document.querySelectorAll('.service')[0];
let serviceDescription = document.querySelectorAll('.service-description')[0];


let serviceDataArray = [
    {title: 'Responsive Websifrfggfte', price: 'Request a Quote', description: 'My websites are responsive. Typically websites can only be seen on desktop computers unless it is coded in. You will be able to see your website on your laptop, phone or computer!', img: 'mobile.svg'},
    {title: 'Multiple Pages', price: '$50-$100 extra per page', description: 'Sometimes you may want or need an extra page! Price will vary on complexity and length of page.', img: 'pages.svg'},
    {title: 'TypeWriting', price: '$50-$100 extra per page', description: 'Sometimes you may want or need an extra page! Price will vary on complexity and length of page.', img: 'writing.svg'},
    {title: 'Weekly Updates*', price: '$50-$100 extra per page', description: 'Sometimes you may want or need an extra page! Price will vary on complexity and length of page.', img: 'calander.svg'},
    {title: 'Photography', price: '$50-$100 extra per page', description: 'Sometimes you may want or need an extra page! Price will vary on complexity and length of page.', img: 'photography.svg'},
    {title: 'In-Store Evaluation', price: '$50-$100 extra per page', description: 'Sometimes you may want or need an extra page! Price will vary on complexity and length of page.', img: 'review.svg'}
]


window.addEventListener('DOMContentLoaded', function(){
   loadProducts(serviceDataArray);
})

function loadProducts(serviceItems){
    let showProducts = serviceItems.map(function(item){
        return `<div class="service">
        <h3>${item.title}</h3>
                <img src ="${item.img}">
                </div>`;
    })
    showProducts = showProducts.join("")
    serviceBoxes.innerHTML = showProducts;
    
}


//     serviceDescription.innerHTML = hey
// load up title and picture MAP box
// add click event listener to serviceBox
// If serviceBox is clicked, hide service and SHOW serviceDescription 

// If serviceBox is clicked, show price & description  

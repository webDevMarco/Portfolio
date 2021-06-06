const allTheseServices = document.querySelector('#all-these-services');

let serviceDataArray = [
    {title: 'Responsive Website', price: 'Request a Quote', img: 'mobile.svg',
    description: "Your website will be responsive, meaning it can be seen on a computer, laptop or phone! You can design on a piece of paper what you'd like or alternatively, I can provide the design for you. <br>I will include SEO so your website is ranked on Google when people search for keywords. <br> Price quote is for a one-page website and does not include Website Hosting."},

    {title: 'Multiple Pages', price: '$50-$100', img: 'pages.svg',
    description: 'If you have multiple side businesses you would like to showcase, want a seperate page for your menu or anything else, I can provide extra pages. <br>Price will depend on how content-heavy the pages are. Extra long webpages will count as an extra page.'},

    {title: 'TypeWriting', price: 'FREE', img: 'writing.svg',
    description: "If you want your website written word-for-word, you will need to send me a text file through e-mail. <br> If you have an idea on what you want but can't put your ideas into words, I can do the writing for you. <br> Grammar and spelling on me!"},

    {title: 'Weekly Updates*', price: 'Request a Quote', img: 'calander.svg',
    description: 'If you have weekly sales or a vendor has paid for an advert on your website, I can take care of the work for you. <br> I can modify the page so we have a list of sale items/services and change the items each week on a schedule. Weekly price for me to modify will be low, though it will depend how much content will be changed each week. '},

    {title: 'Photography', price: '$20', img: 'photography.svg',
    description: 'I also happen to be learning to use the Canon Rebel T5i camera! With some luck and time, I can produce good quality photos. <br>I will add the business building photo as the cover photo on your website if requested. If you want to add extra photos just for your Google Maps profile, it will be a total of $10 per photo approved by you.<br>Examples include: close-ups of food/product, inside-building details, etc'},

    {title: 'In-Store Evaluation', price: '$50 or FREE', img: 'review.svg',
    description: "Ever wonder what a new customer thinks when they first go into your store, what stands out? <br>Do you want to know what quality of customer service your employees give when you're not around? <br> You may ask this and up to 50 questions total. I will be detailed and truthful.<br> Your review will come with experience, as I work as a supervisor in a grocery store. <br> FREE with purchase of website (optional). <br> $50 without purchase of website."}
];

// Show the grid of services
window.addEventListener('DOMContentLoaded', function(){
   loadProducts(serviceDataArray);
})

function loadProducts(serviceItems){
    let showProducts = serviceItems.map(function(item){
        return `
        <div class="service-boxes">
        <div class="service">
        <h3>${item.title}</h3>
        <img src ="${item.img}">
        <p class="service-price">${item.price}</p>
        <p class="service-paragraphs">${item.description}</p>
                
        
        </div>
                </div>`; 
    } 
    )
  
    showProducts = showProducts.join("")
    allTheseServices.innerHTML = showProducts;
}

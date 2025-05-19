const product = [
    {
        id: 0,
        image: '/cover/img20.jpg',
        title: 'Fresh juice',
        price: 65,
    },
    {
        id: 1,
        image: '/cover/img12.jpg',
        title: 'Pepper 500g',
        price: 299,
    },
    {
        id: 2,
        image: '/cover/img14.jpg',
        title: 'Aashirvaad atta 1kg',
        price: 494,
    },
    {
        id: 3,
        image: '/cover/img4.jpg',
        title: 'Chilli powder',
        price: 85,
    },
    {
        id: 4,
        image: '/cover/img16.jpg',
        title: 'Fortune oil',
        price: 195,
    },
    {
        id: 5,
        image: '/cover/img2.jpg',
        title: 'Nescafe',
        price: 90,
    },
    {
        id: 6,
        image: '/cover/img7.jpg',
        title: 'Yippee noodles x3',
        price: 120,
    },
    {
        id: 7,
        image: '/cover/img8.jpg',
        title: 'Onion 1kg',
        price: 40,
    },
    {
        id: 8,
        image: '/cover/img17.jpg',
        title: 'Water Bottle',
        price: 25,
    }

];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
function placeOrder() {
    alert("Your order has been placed successfully");
}
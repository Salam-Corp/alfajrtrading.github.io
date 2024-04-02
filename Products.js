const btns = [
    {
    id: 1,
    image: 'PineSpray.jpg',
    title: 'Pineapple',
    price:'$5',
    },

    {
        id: 2,
        image: '/Love-Spray.jpg',
        title: 'Love',
        price:'$5',
        },

        {
            id: 3,
            image: 'images/PassionFruit-Spray.jpg',
            title: 'Passion Fruit',
            price:'$5',
            },

            {
                id: 4,
                image: 'images/Strawberry-Spray.jpg',
                title: 'Strawberry',
                price:'$5',
                },

                {
                    id: 5,
                    image: 'images/BlackButter-Spray.jpg',
                    title: 'Black Butter',
                    price:'$5',
                    }

                    
    ]
    const categories = [...new Set(product.map((item)=>
        {return item}))]

    let cart = document.getElementById('root')
    cart.innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            <div class="box">
                <div class="img-box">
                    <img src=${image}></img>
                </div>
                <div class="left">
                    <p>${title}</p>
                    <h2>${price}</h2>
                    <button>Add to Cart</button>
                </div>
            </div>
        )

    }).join('')

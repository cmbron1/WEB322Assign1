const products=
{
    fakeDB:[],

    init()
    {

        this.fakeDB.push({image: '/img/home2.jpg',category:'Home Products'});

        this.fakeDB.push({image: '/img/electronics4.jpg',category:'Electronics & Accessories'});

        this.fakeDB.push({image: '/img/beauty1.jpg',category:'Beauty Products'});

        this.fakeDB.push({image: '/img/clothing1.jpg',category:'Clothing & Shoes'});
    },

    getAllProducts()
    {
        return this.fakeDB;
    }

}

products.init();
module.exports=products;
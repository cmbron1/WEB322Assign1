const products=
{
    fakeDB:[],

    init()
    {

        this.fakeDB.push({image:'/img/bestseller1.jpg'});
        this.fakeDB.push({image:'/img/bestseller2.jpg'});
        this.fakeDB.push({image:'/img/beauty2.jpg'});
        this.fakeDB.push({image:'/img/bestseller4.jpg'});   
        this.fakeDB.push({image:'/img/clothing2.jpg'});   
        this.fakeDB.push({image:'/img/home3.jpg'});   

        

    },

    getAllProducts()
    {
        return this.fakeDB;
    }

}

products.init();
module.exports=products;
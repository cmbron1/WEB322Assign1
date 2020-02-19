const products=
{
    fakeDB:[],

    init()
    {

        this.fakeDB.push({image:'/img/product1.jpg',title:'Dinosaur Silicone Mold',price:'$12.99',category:'Kitchen Supplies',best: ''});
        this.fakeDB.push({image:'/img/product2.jpg',title:'64GB Flashdrive',price:'$35.99',category:'Electronics & Accessories',best: 'Best Seller'});
        this.fakeDB.push({image:'/img/product3.jpg',title:'Ocean Design Washi Tape',price:'$4.99',category:'Arts & Crafts',best:''});
        this.fakeDB.push({image:'/img/product4.jpg',title:'Kalimba Thumb Piano',price:'$54.99',category:'Instruments',best:'Best Seller'});
        this.fakeDB.push({image:'/img/product5.jpg',title:'Plus Size Women Leggings',price:'$27.99',category:'Clothing',best:''});
        this.fakeDB.push({image:'/img/product6.jpg',title:'Sterling Silver Stacking Ring',price:'49.99',category:'Jewelry',best:'Best Seller'});  
        

    },

    getAllProducts()
    {
        return this.fakeDB;
    }

}

products.init();
module.exports=products;
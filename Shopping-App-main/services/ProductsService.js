const SNEAKERS = [
    {
        id: 100,
        name: 'Formal Shoe',
        price: 350,
        image: require('../assets/products/myshoe.jpg'),
        description: 'Formal shoes is the best in town now.  Formal shoes are to be worn at formal occasions, like a meeting or a wedding.'
    },
     {
        id: 56,
        name: 'Fashion Collection',
        price: 600,
        image: require('../assets/products/mykicks.jpg'),
        description: 'There are different shoes to buy from us. Shop with us and look good. These are different casual shoes for both boys and girls. Select your any and will  be delivered quickly',
    
    },
     {
        id: 67,
        name: 'Master Watch',
        price: 6,
        image: require('../assets/products/watch.jpg'),
        description: 'A watch is a portable timepiece intended to be carried or worn by a person. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps or any other kind of bracelet'
    },
  
    {
        id: 4,
        name: 'T- Shirt',
        price: 2,
        image: require('../assets/products/nice shirt.jpg'),
        description: 'A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front..'
    },
      {
        id: 89,
        name: 'Cap',
        price: 5,
        image: require('../assets/products/cap.jpg'),
        description: 'A close-fitting covering for the head, usually of soft supple material and having no visor or brim.'
    },
       
];

export function getProducts() {
    return SNEAKERS;
}

export function getProduct(id) {
    return SNEAKERS.find((product) => (product.id == id));
}


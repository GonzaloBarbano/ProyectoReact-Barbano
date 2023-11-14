const products = [
    { id: "1", name: "Zapatilla", img: "url-img", price: 15000, category: "calzados", description: "Zapatilla deportiva", stock: 10 },
    { id: "2", name: "Remera", img: "url-img", price: 8500, category: "ropa", description: "Remera", stock: 10},
    { id: "3", name: "Short", img: "url-img", price: 10000, category: "ropa", description: "Short Deportivo", stock: 10 },
    { id: "4", name: "Zapatilla", img: "url-img", price: 10000, category: "calzados", description: "Zapatilla deportiva", stock: 10 },
    { id: "5", name: "Remera", img: "url-img", price: 7000, category: "ropa", description: "Remera deportiva", stock: 10 },
    { id: "6", name: "Zapatilla", img: "url-img", price: 17000, category: "calzados", description: "Zapatilla Deportiva", stock: 10 },
    { id: "7", name: "Calza", img: "url-img", price: 7500, category: "ropa", description: "Calza", stock: 10},
    { id: "8", name: "Pantalón", img: "url-img", price: 12000, category: "ropa", description: "Pantalon largo", stock: 10 },
    { id: "9", name: "Zapatilla", img: "url-img", price: 20000, category: "calzados", description: "Zapatilla deportiva", stock: 10 },
    { id: "10", name: "Remera", img: "url-img", price: 7500, category: "ropa", description: "Remera", stock: 10},
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
      }, 1500 )
      
    });
  };
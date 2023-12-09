import { addDoc, collection } from "firebase/firestore"
import { db } from "../../config/firebaseConfig"

const products = [
    { name: "Zapatilla", img: "https://d2r9epyceweg5n.cloudfront.net/stores/057/265/products/9330-blanco-t031-5001ff75c5cc9172dc16485688110792-1024-1024.jpg", price: 15000, category: "calzados", description: "Zapatilla deportiva", stock: 50},
    { name: "Remera", img: "https://lafabricaderemeras.com.ar/wp-content/uploads/2023/02/2-REMERAS-DEPORTIVAS.jpg", price: 8500, category: "ropa", description: "Remera", stock: 50},
    { name: "Short", img: "https://http2.mlstatic.com/D_NQ_NP_715869-MLA45656943415_042021-O.webp", price: 10000, category: "ropa", description: "Short Deportivo", stock: 50 },
    { name: "Zapatilla", img: "https://d2r9epyceweg5n.cloudfront.net/stores/057/265/products/9314-verde-t031-8e8a6fef577d8105ad16480764578491-1024-1024.jpg", price: 10000, category: "calzados", description: "Zapatilla deportiva", stock: 50 },
    { name: "Remera", img: "https://http2.mlstatic.com/D_NQ_NP_801433-MLA69978895589_062023-O.webp", price: 7000, category: "ropa", description: "Remera deportiva", stock: 50 },
    { name: "Zapatilla", img: "https://http2.mlstatic.com/D_NQ_NP_716575-MLA49718384068_042022-O.webp", price: 17000, category: "calzados", description: "Zapatilla Deportiva", stock: 50 },
    { name: "Calza", img: "https://http2.mlstatic.com/D_NQ_NP_953566-MLA49535873904_032022-O.webp", price: 7500, category: "ropa", description: "Calza", stock: 50},
    { name: "Pantalón", img: "https://tiendaseptimo.vtexassets.com/arquivos/ids/414016/to_165088.jpg?v=638189724567630000", price: 12000, category: "ropa", description: "Pantalon largo", stock: 30 },
    { name: "Zapatilla", img: "https://http2.mlstatic.com/D_NQ_NP_700952-MLA47738615138_102021-O.webp", price: 20000, category: "calzados", description: "Zapatilla deportiva", stock: 50 },
    { name: "Remera", img: "https://borabikes.com.ar/62965-large_default/remera-deportiva-mujer-drb-fierce-ciclismo-casual-bora-bikes.jpg", price: 7500, category: "ropa", description: "Remera", stock: 50},
    ];


export const seedProductsDB = (() => { 
    products.forEach((product) => { 
        addDoc(collection(db,"products"), product );
    })
})
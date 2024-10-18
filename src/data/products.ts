export interface Product {
    id: number;
    name: string;
    price: number;
    color: string;
    features: string;
    category: string;
    photo:string
    colorTailwind:string
  }
  export const products: Product[] = [
    {
        id: 1,
        name: "Tote Shibuya",
        price: 140.00,
        color: "amarillo",
        category: "Mochila",
        features: "Reciclado", 
        colorTailwind:"bg-yellow-400",
        photo:"https://samsonite.com.pe/cdn/shop/files/c5ea9ddc7248c0ebf25c4dc2c9a2697b32a9b9eada38de6151c9379d03eb350d.png?v=1705429902"
    },
    {
        id: 1,
        name: "Tote Shibuya",
        price: 140.00,
        color: "amarillo",
        category: "Mochila",
        features: "Reciclado", 
        colorTailwind:"bg-yellow-400",
        photo:"https://samsonite.com.pe/cdn/shop/files/c5ea9ddc7248c0ebf25c4dc2c9a2697b32a9b9eada38de6151c9379d03eb350d.png?v=1705429902"
    },
    {
        id: 2,
        name: "Mochila SoFo Ciudad",
        price: 280.00,
        color: "gris",
        category: "Mochila",
        features: "Algodón", 
        colorTailwind:"bg-gray-500",
        photo:"https://cdn11.bigcommerce.com/s-9hloy7zzdu/products/309/images/2616/7_1__31577.1709658382.1280.1280.png?c=1"
    },
    {
        id: 3,
        name: "Mochila Gion Pro",
        price: 140.00,
        color: "marrón",
        features: "Impermeable", 
        category: "Mochila",
        colorTailwind:"bg-yellow-950",
        photo:"https://cdn11.bigcommerce.com/s-9hloy7zzdu/products/287/images/2604/1_1__65490.1712089692.1280.1280.png?c=1"
    },
    {
        id: 4,
        name: "Mochila SoFo Rolltop X",
        price: 170.00,
        color: "marino",
        features: "Algodón", 
        category: "Mochila",
        colorTailwind:"bg-sky-800",
        photo:"https://mochilandia.com/cdn/shop/files/040324_jansport_azul_marino_ac06bfbf-9bec-4a86-99e1-6ed611e92de9.png?v=1709599531"
    },
    {
        id: 4,
        name: "Mochila SoFo Rolltop X",
        price: 170.00,
        color: "marino",
        features: "Algodón", 
        category: "Mochila",
        colorTailwind:"bg-sky-800",
        photo:"https://mochilandia.com/cdn/shop/files/040324_jansport_azul_marino_ac06bfbf-9bec-4a86-99e1-6ed611e92de9.png?v=1709599531"
    },
    {
        id: 5,
        name: "Samsung",
        price: 170.00,
        color: "marino",
        features: "Version pro", 
        category: "celular",
        colorTailwind:"bg-gray-500",
        photo:"https://images.samsung.com/is/image/samsung/p6pim/pe/2401/gallery/pe-galaxy-s24-ps921-ef-ps921tvegww-539276631?$650_519_PNG$"
    },
];

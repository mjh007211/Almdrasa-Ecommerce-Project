export type ProductsData = {
  id?: string;
  category?: string;
  discount?: string;
  productImage: string;
  productName: string;
  originalProductPrice: number;
  discountedProductPrice?: number;
  rating?: string;
  quantity?: number;
};

export const flashSalesProductsData: ProductsData[] = [
  {
    id: crypto.randomUUID(),
    discount: "40",
    productImage: "/5d5c2e5250752d55f8b60f2aa2923183dadbc135.png",
    productName: "HAVIT HV-G92 Gamepad",
    originalProductPrice: 160,
    discountedProductPrice: 120,
    rating: "88",
    category: "gaming",
  },
  {
    id: crypto.randomUUID(),
    discount: "35",
    productImage: "/e59d9f348cc24eeff489863523b63971c3ff8e4a.png",
    productName: "AK-900 Wired Keyboard",
    originalProductPrice: 1160,
    discountedProductPrice: 960,
    rating: "75",
    category: "gaming",
  },
  {
    id: crypto.randomUUID(),
    discount: "30",
    productImage: "/5e634682db5174aff99bb9337d2dc9598a0b44e4.png",
    productName: "IPS LCD Gaming Monitor",
    originalProductPrice: 400,
    discountedProductPrice: 370,
    rating: "99",
    category: "electronics",
  },
  {
    id: crypto.randomUUID(),
    discount: "25",
    productImage: "/288da330273c46e1c3dc0a8915c4b031d0345347.png",
    productName: "S-Series Comfort Chair",
    originalProductPrice: 400,
    discountedProductPrice: 375,
    rating: "99",
    category: "furniture",
  },
  {
    id: crypto.randomUUID(),
    productImage: "/faa80b609e3950aed9181acb44510f859f50d850.png",
    productName: "PlayStation 5 Controller Skin High quality vinyl",
    originalProductPrice: 192,
    rating: "99",
    category: "gaming",
  },
];

export const thisMonthProductsData: ProductsData[] = [
  {
    id: crypto.randomUUID(),
    productImage: "/ee9a38001e9f94261b28e16ea21bacb4144473e8.png",
    productName: "The north coat",
    originalProductPrice: 360,
    discountedProductPrice: 260,
    rating: "65",
    category: "clothing",
  },
  {
    id: crypto.randomUUID(),
    productImage: "/4f3ca1d12722dbdf98f25179d3c0b785988c513d.png",
    productName: "Gucci duffle bag",
    originalProductPrice: 1160,
    discountedProductPrice: 960,
    rating: "65",
    category: "accessories",
  },
  {
    id: crypto.randomUUID(),
    productImage: "/6739d39dc218c97b645d616c8188a4f2e6aaf84b.png",
    productName: "RGB liquid CPU Cooler",
    originalProductPrice: 170,
    discountedProductPrice: 160,
    rating: "65",
    category: "electronics",
  },
  {
    id: crypto.randomUUID(),
    productImage: "/e86f6e872757d20a14861e2e0ebd4e9889693f59.png",
    productName: "Small BookShelf",
    originalProductPrice: 360,
    rating: "65",
    category: "furniture",
  },
];

export const ourProductsData: ProductsData[] = [
  {
    id: crypto.randomUUID(),
    productImage: "/78e727118c99fe72271cf43f5e3566b39ca7c8f4.jpg",
    productName: "Breed Dry Dog Food",
    originalProductPrice: 100,
    rating: "35",
    category: "pet",
  },
  {
    id: crypto.randomUUID(),
    productImage: "/e60892a4f0a3d5d144dce622c7338ec5be12908f.png",
    productName: "CANON EOS DSLR Camera",
    originalProductPrice: 360,
    rating: "95",
    category: "electronics",
  },
  {
    id: crypto.randomUUID(),
    productImage: "/203be522b7b02d10672f6f6147762cf52bfcfc54.png",
    productName: "ASUS FHD Gaming Laptop",
    originalProductPrice: 700,
    rating: "325",
    category: "electronics",
  },
  {
    id: crypto.randomUUID(),
    productImage: "/e7bdd11662ea1dfc2d615a5bb054e139a764f306.png",
    productName: "Curology Product Set",
    originalProductPrice: 500,
    rating: "145",
    category: "beauty",
  },
  {
    id: crypto.randomUUID(),
    productImage: "/5f4ea9acf805319ddf3897fc9daaf58559542260.png",
    productName: "Kids Electric Car",
    originalProductPrice: 960,
    rating: "65",
    category: "toys",
  },
  {
    id: crypto.randomUUID(),
    productImage: "/d0b7bb25884f6fdfc1357634d7d7b09e05755c2f.png",
    productName: "Jr. Zoom Soccer Cleats",
    originalProductPrice: 1160,
    rating: "35",
    category: "sports",
  },
  {
    id: crypto.randomUUID(),
    productImage: "/288e013365fe639fccc1fe4168fca740ef1f85e7.png",
    productName: "GP11 Shooter USB Gamepad",
    originalProductPrice: 660,
    rating: "55",
    category: "gaming",
  },
  {
    id: crypto.randomUUID(),
    productImage: "/04a1915fd6cedd7c8b1073685c5f1be1b50e1ac6.png",
    productName: "Quilted Satin Jacket",
    originalProductPrice: 660,
    rating: "55",
    category: "clothing",
  },
];

export const justForYouData: ProductsData[] = [
  {
    id: crypto.randomUUID(),
    discount: "35",
    productImage: "/203be522b7b02d10672f6f6147762cf52bfcfc54.png",
    productName: "ASUS FHD Gaming Laptop",
    originalProductPrice: 1160,
    discountedProductPrice: 960,
    rating: "65",
    category: "electronics",
  },
  {
    id: crypto.randomUUID(),
    productImage: "/5e634682db5174aff99bb9337d2dc9598a0b44e4.png",
    productName: "IPS LCD Gaming Monitor",
    originalProductPrice: 1160,
    rating: "65",
    category: "electronics",
  },
  {
    id: crypto.randomUUID(),
    productImage: "/5d5c2e5250752d55f8b60f2aa2923183dadbc135.png",
    productName: "HAVIT HV-G92 Gamepad",
    originalProductPrice: 560,
    rating: "65",
    category: "gaming",
  },
  {
    id: crypto.randomUUID(),
    productImage: "/e59d9f348cc24eeff489863523b63971c3ff8e4a.png",
    productName: "AK-900 Wired Keyboard",
    originalProductPrice: 200,
    rating: "65",
    category: "gaming",
  },
];

export const allProductsData: ProductsData[] = [
  ...flashSalesProductsData,
  ...thisMonthProductsData,
  ...ourProductsData,
];

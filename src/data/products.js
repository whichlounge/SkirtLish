
import lowRise from '../assets/low-rise-denim-mini.jpg'
import cargo from '../assets/cargo-pocket-mini.jpg'
import pleated from '../assets/black-pleated-mini.jpg'
import plaid from '../assets/red-plaid-mini.jpg'
import distressed from '../assets/distressed-denim-mini.jpg'
import chain from '../assets/chain-detail-mini.jpg'
import metallic from '../assets/black-pleated-detail.jpg'
import laceUp from '../assets/denim-detail.jpg'
import asymmetric from '../assets/statement-mini.jpg'
import ruffle from '../assets/white-ruffle-mini.jpg'
import camo from '../assets/camo-print-mini.jpg'
import sequin from '../assets/red-plaid-detail.jpg'


const products = [
  {
    id: "skirt-01",
    image: lowRise,
    name: "Low-Rise Denim Mini",
    description: "A classic low-rise denim mini with a vintage Y2K streetwear vibe.",
    price: 3499,
    category: "Denim",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue", "Light Blue"],
    stock: 12
  },
  {
    id: "skirt-02",
    name: "Cargo Pocket Mini",
   image: cargo,
    description: "An edgy utility skirt with oversized cargo pockets.",
    price: 4299,
    category: "Streetwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Olive"],
    stock: 8
  },
  {
    id: "skirt-03",
    image: pleated,
    name: "Black Pleated Mini",
    description: "A bold black pleated mini for an effortlessly edgy look.",
    price: 2999,
    category: "Pleated",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black"],
    stock: 15
  },
  {
    id: "skirt-04",
   image: plaid,
   name: "Plaid skirt",
    description: "A statement red plaid skirt inspired by early 2000s fashion.",
    price: 3199,
    category: "Plaid",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    stock: 10
  },
  {
    id: "skirt-05",
   image: distressed,
   name: "distressed denim skirt",
   description: "Distressed denim detailing for a rebellious streetwear look.",
    price: 3799,
    category: "Denim",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue"],
    stock: 7
  },
  {
    id: "skirt-06",
    name: "Chain Detail Mini",
    image: chain,
    description: "A sleek mini skirt finished with statement chain detailing.",
    price: 4599,
    category: "Streetwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Grey"],
    stock: 6
  },
  {
    id: "skirt-07",
      image: metallic,
    name: "Metallic Silver Mini",
    description: "A metallic statement piece made for bold night-out outfits.",
    price: 4999,
    category: "Party",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Silver"],
    stock: 5
  },
  {
    id: "skirt-08",
      image: laceUp,
    name: "Lace-Up Mini",
    description: "A fitted mini with lace-up detailing and an alternative edge.",
    price: 3899,
    category: "Streetwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White"],
    stock: 9
  },
  {
    id: "skirt-09",
      image: asymmetric,
    name: "Asymmetric Hem Mini",
    description: "An unconventional asymmetric hem for a standout silhouette.",
    price: 3599,
    category: "Statement",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Grey"],
    stock: 11
  },
  {
    id: "skirt-10",
      image: ruffle,
      name: "Ruffle Layered Mini",
    description: "A playful layered skirt with a bold early 2000s aesthetic.",
    price: 3299,
    category: "Statement",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pink", "Black"],
    stock: 8
  },
  {
    id: "skirt-11",
    image: camo,
    name: "Camo Print Mini",
    description: "A military-inspired camo mini with an urban streetwear feel.",
    price: 3699,
    category: "Streetwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camo"],
    stock: 4
  },
  {
    id: "skirt-12",
    image: sequin,
    name: "Sequin Party Mini",
    description: "A sparkling sequin mini designed to make every outfit louder.",
    price: 4799,
    category: "Party",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Silver"],
    stock: 0
  }
]

export default products

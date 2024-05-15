// enum Categories  {
//     MENS_CLOTHING = "men's clothing",
//     WOMENS_CLOTHING = "women's clothing",
//     JEWELERY = "jewelery",
//     ELECTRONICS = "electronics"
// }



export type TProduct = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}
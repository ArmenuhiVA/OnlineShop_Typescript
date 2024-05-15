import { Grid } from "@mui/material"
import axios from "axios"
import { FC, useEffect } from "react"
import { Product } from "./Product"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setAllProducts } from "../store/ProductSlice"



export const Products: FC = () => {
    // const [products, setProducts] = useState<TProduct[]>([])
    const allProducts = useAppSelector(state => state.products.allProducts);
    const dispatch = useAppDispatch()

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')

        if(!response.data) throw new Error('No data')

        dispatch(setAllProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    },[])

    console.log(allProducts)
    
    return(
        <Grid container spacing={2} >
             {
                allProducts.map(product => (
                    <Grid item xs={3} key={product.id}>
                        <Product {...product} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
import { TextField } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useEffect, useState } from "react"
import { TProduct } from "../types"
import { setAllProducts } from "../store/ProductSlice"
import { debounce } from "lodash"


export const Search = () => {
    const products = useAppSelector(state => state.products.allProducts)
    const dispatch = useAppDispatch()
    const [search, setSearch] = useState('')
    const [filteredProduct, setFilteredProduct] = useState<TProduct[]>(products)


    useEffect(() => {
        if (search) {
            debounce(async () => {
                const filtered = products.filter(product =>
                    product.title.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())
                )
                setFilteredProduct(filtered)
            }, 500)
        } else {
            setFilteredProduct(products)
        }
    }, [search, products])


    useEffect(() => {
        dispatch(setAllProducts(filteredProduct))
    }, [filteredProduct, dispatch])


    return (
        <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            // defaultValue="Normal"
            variant="filled"
            onChange={e => setSearch(e.target.value)}
        />
    )
}
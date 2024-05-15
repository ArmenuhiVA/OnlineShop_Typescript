import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import { setAllProducts } from "../store/ProductSlice";
import { TProduct } from "../types";


export const Filter = () => {
    const allPrducts = useAppSelector(state => state.products.allProducts)
    const dispatch = useAppDispatch()
    const [filter, setFilter] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string)
    }


    useEffect(() => {
        let sortedProducts: TProduct[] = [...allPrducts]
        switch (filter) {
            case "price":
                // dispatch(setProducts((prev: TProduct[]) => prev.sort((a,b) => a.price - b.price)))
                sortedProducts.sort((a,b) => a.price - b.price);
                break;
            case "rate":
                sortedProducts.sort((a,b) => b.rating.rate - a.rating.rate);
                break;
            case "count":
                sortedProducts.sort((a, b) => b.rating.count - a.rating.count);
                break;

            default:
                break;
        }
        dispatch(setAllProducts(sortedProducts))
    }, [filter, dispatch])

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort by </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter}
                label="Filter"
                onChange={handleChange}
            >
                <MenuItem value='price'>Price</MenuItem>
                <MenuItem value='rate'>Rate</MenuItem>
                <MenuItem value='count'>Count</MenuItem>
            </Select>
        </FormControl>
    )
}



import { FC } from "react";
import { TProduct } from "../types";
import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material";



export const Product: FC<TProduct> = ({
    title,
    price,
    // category,
    description,
    image,
    rating
}) => {
    return (
        <Card sx={{ minHeight: 600 }}>
            <CardMedia
                image={image}
                title="green iguana"
                sx={{ height: 280, backgroundSize: 'contain' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxHeight: 100
                    }}
                >
                    {description}
                </Typography>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                }}>
                    <Rating
                        readOnly
                        value={rating.rate}
                        precision={0.5}
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    />
                    <Typography variant="body2">
                        {rating.count} left
                    </Typography>
                </div>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Typography variant="body2">{price}$</Typography>
                <Button size="small">Buy</Button>
            </CardActions>
        </Card>
    )
}
import React from 'react'
import { Card, CardMedia, CardContent, Grid } from '@mui/material'
import Typography from '@mui/material/Typography';

const CardFeature = (props: any) => {
    return (
        <Card 
        className='hover:opacity-50 cursor-pointer'
        sx={{ maxWidth: 394, maxHeight: 289, width: 401, height: 289, transition: '.3s'}} 
        style={{
            borderRadius: "71px 71px 0 0", 
            border: '#d3bb67 3px solid', 
            borderCollapse: 'collapse', 
            background: 'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)', 
            margin: '5px'
        }}>
            <CardMedia
            component='img'
            sx={{ height: '80%' }}
            image={props.mediaPath}
            title={props.mediaTitle}
            />
            <CardContent 
            style={{
                maxHeight: '59px', 
                color: "white", 
                background: 'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)', 
                textAlign: 'center'
            }}>
                <Typography gutterBottom variant="h2" component="div" style={{fontSize: 'x-large', fontWeight: 'bold'}}>
                    {props.title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardFeature
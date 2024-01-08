import React from 'react'
import { Card, CardMedia, CardContent, Grid } from '@mui/material'
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


export default function CardFeature(props: any) {
    const theme = useTheme()
    return (
        <Card 
        className='hover:opacity-50 cursor-pointer'
        sx={{ maxWidth: 394, maxHeight: 289, width: 401, height: 289, transition: '.3s'}} 
        style={{
            borderRadius: "71px 71px 0 0", 
            border: '#d3bb67 3px solid', 
            borderCollapse: 'collapse', 
            background: `${theme.palette.background.paper}`, 
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
                background: `${theme.palette.background.paper}`, 
                textAlign: 'center'
            }}>
                <Typography gutterBottom variant="h2" component="div" style={{fontSize: 'x-large', fontWeight: 'bold'}}>
                    {props.title}
                </Typography>
            </CardContent>
        </Card>
    )
}
import React from 'react'
import { Paper, Button, Box} from '@mui/material'

const Item = (props) => {
    return (
        <Paper sx={{ display: 'flex', justifyContent: 'center',flexWrap: 'wrap' }}>
            <Box>
                <img src={props.item.img}/>
            </Box>
            <Box>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
                <Button className="CheckButton">
                    Check it out!
                </Button>
        
            </Box>
        </Paper>
    )
}

export default Item

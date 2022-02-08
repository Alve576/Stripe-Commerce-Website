import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import './Main.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}));
const Main = () => {
  return (
    <Box sx={{mt : 3}}>
      <Masonry columns={3} spacing={3}>
          <Item sx={{ height : '300px' ,boxShadow : 10,  backgroundPosition: 'center', backgroundImage: 'url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)' }}>
          </Item>
          <Item sx={{ height : '380px' ,boxShadow : 10,  backgroundPosition: 'center', backgroundImage: 'url(https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)' }}>
          </Item>
          <Item sx={{ height : '460px' ,boxShadow : 10,  backgroundPosition: 'bottom', backgroundImage: 'url(https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80)' }}>
          </Item>
          <Item sx={{ height : '350px' ,boxShadow : 10, backgroundImage: 'url(https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80)' }}>
          </Item>
          <Item sx={{ height : '320px' ,boxShadow : 10, backgroundImage: 'url(https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)' }}>
          </Item>
          <Item sx={{ height : '350px' ,boxShadow : 10, backgroundImage: 'url(https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80)' }}>
          </Item>
          <Item sx={{ height : '300px' ,boxShadow : 10, backgroundImage: 'url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)' }}>
          </Item>
          <Item sx={{ height : '380px' ,boxShadow : 10, backgroundImage: 'url(https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)' }}>
          </Item>
          <Item sx={{ height : '350px' ,boxShadow : 10, backgroundImage: 'url(https://images.unsplash.com/photo-1616464916265-68fc457bdc70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=666&q=80)' }}>
          </Item>
      </Masonry>
    </Box>
  )
};

export default Main;

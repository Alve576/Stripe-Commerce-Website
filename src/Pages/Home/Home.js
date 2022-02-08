import React from 'react'
import MisonaryGrid from '../MisonaryGrid/MisonaryGrid';
import Products from '../Products/Products';
import Holder from "./../Slider/Holder";
import Main from './../Main/Main'
const Home = () => {
    return (
        <div>
            <Holder></Holder>            
            <Main></Main>   
            <Products></Products>
        </div>
    )
}

export default Home

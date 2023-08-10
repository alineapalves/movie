import React from "react";
import styled from 'styled-components';

const Box = styled.div`
width:250px;
height: 450px;
background-color: #38161b;
margin: 10px;
margin-top: 25px;
`;

const ImagemBox = styled.img`
width: 250px;
height: 450px;
`;

const Button = styled.button`
 width: 100px;
 height: 25px;
 background-color:#38161b;
 color: #fff;
 border-radius: 8px;
 box-shadow: none;

`

export default function CaixaFilme ({movies}){
    return (
        <>
            <Box>
                 <ImagemBox src={movies.image} alt="" />
                 <a href={movies.url}><Button>Saiba +</Button></a>
            </Box>
        
        </>
    )

}
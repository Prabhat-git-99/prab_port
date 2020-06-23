import React from 'react';
import styled from 'styled-components';

export default function SingleCard({name,image,category,background,clip}) {
    console.log(image);
    return (
        <SingleCardWrapper image={image} >
        <div className='card_container'>
            <div className='card'>
                <div className='img_holder'>
                </div>
                <div className='title_holder'>
                    <h3>{name}</h3>
                </div>
                <div className='category_holder'>
                    <h3>{category}</h3>
                </div>
            </div>
        </div>
        </SingleCardWrapper>
    );
}

const SingleCardWrapper = styled.div`
    .card_container {
        width: 140px;
        height: 150px;
        box-sizing: border-box;
        /* border: 2px solid black; */
        margin: 20px 20px;
        /* background: rgba(0,0,0,0.1); */
        background: transparent;
        padding: 15px 15px;
        /* -webkit-box-shadow: 0px -1px 13px 0px rgba(0,0,0,1);
-moz-box-shadow: 0px -1px 13px 0px rgba(0,0,0,1);
box-shadow: 0px -1px 13px 0px rgba(0,0,0,1); */
        border-radius: 20%;
    }
    .card {
        padding: 10px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .img_holder {
        margin: 0 auto;
        background: url(${props => props.image}) center/cover no-repeat;
        width: 50px;
        height: 50px;
        /* border: 1px solid black;
        border-radius: 100%; */
    }
    .title_holder {
        padding: 10px;
        color: rgb(32, 193, 223);
        /* color: rgb(205, 180, 40); */
        font-size: 10px;
        text-transform: uppercase;
        text-align: center;
    }
    .category_holder {
        color: lightgreen;
        font-size: 13px;
        text-transform: uppercase;
        text-align: center;
    }
`;
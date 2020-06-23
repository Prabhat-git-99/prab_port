import React from 'react';
import styled from 'styled-components';

export default function Title({title1,title2}) {
    return (
        <TitleWrapper>
        <div className='title_wrap'>
        <div className='title'>
            <span className='t1'>{title1}</span>
            <div className='title_separator_big'></div>
            <span className='t2'>{title2}</span>
        </div>
        {/* <div className='underline'></div> */}
        </div>
        </TitleWrapper>
    );
}

const TitleWrapper = styled.div`
    .title_wrap {
        display: flex;
        flex-direction: column;
        text-transform: uppercase;
        letter-spacing: var(--bigSpacing);
        padding-top: 5px;
        align-self: auto;
    }
    .title {
        display: flex;
        align-items: center;
    }
    .t1{
        color: var(--grey);
        font-size: 25px;
    }
    .t2{
        color: var(--beize);
        font-size: 25px;
    }
    .underline{
        background: grey;
        width: 40%;
        height: 5px;
    }
    .title_separator_big {
        background: #C0C0C0;
        height: 30vh;
        margin: 10px;
        width: 2px;
        border-radius:100%;
    }
`;
import React from 'react';
import styled from 'styled-components';

export default function SingleFind({icon, url}) {
    return (
        <FindWrapper icon={icon}>
            <a href={url} target='_blank'>
            <div className='icon_container'>
                {/* <a href={url} className='icons'></a> */}
            </div>
            </a>
        </FindWrapper>
    );
}

const FindWrapper = styled.div`
    .icon_container {
        margin: 15px 10px;
        width: 25px;
        height: 25px;
        background: url(${props => props.icon}) center/cover no-repeat;
    }
`;
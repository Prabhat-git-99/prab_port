import React from 'react';
import styled from 'styled-components';

export default function singleEducation({name,college,branch,score,icon}) {
    return (
        <EWrapper icon={icon}>
            <div className='es_container'>
                <div className='es_first'>
                    <div className='school_es'>
                        {name}
                    </div>
                    <div className='photo_es'>
                    </div>
                </div>
                <div className='es_separator'></div>
                <div className='es_second'>
                    <div className='college_es com'>
                        {college}
                    </div>
                    <div className='branch_es com'>
                        {branch}
                    </div>
                    <div className='score_es com'>
                        {score}
                    </div>
                </div>
            </div>
        </EWrapper>
    );
}

const EWrapper = styled.div`
    .es_container {
        margin: 20px 20px;
        display: flex;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
        justify-content: center;
        align-items: center;
        width: 380px;
        height: 160px;
        background: rgba(255,255,255,0.2);

    }
    .es_first {
        display: flex;
        flex-direction: column;
        padding: 20px;
        align-items:center;
    }
    .es_second {
        display: flex;
        flex-direction: column;
    }
    .photo_es {
        background: url(${props => props.icon}) center/cover no-repeat;
        width: 70px;
        height: 70px;
    }
    .school_es {
        font-size: 30px;
        font-weight: bold;
    }
    .com {
        font-size: 20px;
        font-weight: lighter;
        padding: 5px 5px;
    }

`;
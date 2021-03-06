import React, {useState} from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container=Styled.SafeAreaView`
    flex:1;
`;

const TitleContainer=Styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    /* background-color:#FF1; */
`;

const TitleLabel=Styled.Text`
    font-size:24px;
`;

const CountContainer=Styled.View`
    flex:2;
    justify-content:center;
    align-items:center;
    /* background-color:#11A; */
`;

const CountLabel=Styled.Text`
    font-size:50px;
    font-weight:bold;
`;

const ButtonContainer=Styled.View`
    flex:1;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    /* background-color:#86A */
`;

interface Props{
    title?:string; //타이틀은 필수 x
    initValue:number; //초기값은 필수
}

const Counter=({title, initValue}:Props)=>{
    const [count,setCount]=useState<number>(0);//count란 state의 자료형을 number로 지정

    return(
        <Container>
            {title &&(
                <TitleContainer>
                    <TitleLabel>{title}</TitleLabel>
                </TitleContainer>
            )}
            <CountContainer>
                <CountLabel>{initValue+count}</CountLabel>
            </CountContainer>
            <ButtonContainer>
                <Button iconName="plus" onPress={()=>setCount(count+1)}/>
                <Button iconName="minus" onPress={()=>setCount(count-1)}/>
            </ButtonContainer>
        </Container>
    );
};

export default Counter;
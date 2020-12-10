import React from 'react';
import Styled from 'styled-components/native';

// 리액트 네이티브의 TouchableOpacitiy와 Image 컴포넌트를 이용해 Button 컴포넌트 구현
const Container=Styled.TouchableOpacity`
    flex:1;
    /* background-color:#0F9 */
    justify-content:center;
    align-items:center;
`;
const Icon=Styled.Image`
    width:50px;
    height:50px;
`;

// 타입스크립트를 이용해 컴포넌트 Props의 타입 지정
interface Props{
    iconName:'plus'|'minus'; //:은 필수 항목을 의미
    onPress?:()=>void; //?:은 필수항목은 아님
}

const Button=({iconName, onPress}:Props)=>{
    return(
        <Container onPress={onPress} >
            <Icon
                source={
                    iconName==='plus'
                    ?require(`~/Assets/Images/add.png`) //require를 이용해 이미지 불러옴
                    :require(`~/Assets/Images/remove.png`)
                }
             />
        </Container>
    );
};

export default Button;
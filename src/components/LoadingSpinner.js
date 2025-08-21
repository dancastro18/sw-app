import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../styles/variables";

const spin = keyframes`
    0% {transform: rotate(0deg):}
    100 {transform: rotate(360deg)}
`;

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
`;

const Spinner = styled.div`
    border: 8px solid ${colors.border};
    border-top: 8px solid ${colors.border};
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: ${spin} 1.2s linear infinite;
`

const LoadingSpinner = () =>{
    return(
        <SpinnerContainer>
            <Spinner/>
        </SpinnerContainer>
    );
};

export default LoadingSpinner;
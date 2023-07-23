import styled from "styled-components";

export const Wrapper = styled.div`
    backdrop-filter: blur(2px);
    width: 100%; 
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #fff;
    min-width: 50%;
    max-height: 500px;
    margin: auto;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
`

export const CloseButton = styled.button`
    width: auto;
    margin-left: auto;
    margin-bottom: 10px;
    border: none;
    border-radius: 15px;
    padding: 10px;
    cursor: pointer;
    background-color: #99a3ff;

    &:hover {
        transform: scale(1.2);
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: auto;
`

export const Table = styled.table`
    max-heigth: 200px;
    owerflow: auto;
`

export const TableTitle = styled.caption`
    font-size: 18px;
    margin-bottom: 10px;
`

export const TableRow = styled.tr`
    text-align: center;
`

export const Input = styled.input`
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 10px;
`

export const SendDataButton = styled.button`
    margin: 0 auto;
    padding: 10px;
    background-color: #fff;
    border-radius: 15px;
    border: 2px solid rgba(132, 209, 156, 1); 
    cursor: pointer;

    &:hover {
        background-color: rgba(132, 209, 156, 1);
    }

    &:disabled {
        background-color: transparent;
        border: 2px solid grey; 
    }
`


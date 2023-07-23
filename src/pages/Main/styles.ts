import { styled } from "styled-components";


export const Title = styled.h2`
    text-align: center;
    margin: 0;
    padding: 20px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    padding-bottom: 50px;
`

export const Table = styled.table`
    width: 100%;  
`

export const TableRow = styled.tr`
    &:hover {
        background-color: #969595;
        cursor: pointer;
    }
`
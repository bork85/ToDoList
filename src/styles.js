import styled from "styled-components";
import { FcOk, FcFullTrash } from "react-icons/fc";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ToDoList = styled.div`
    background-color: #e2e2e2ff;
    border-radius: 5px;
    padding: 30px 20px;
    width: 500px;

    .inputTask{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }       
    ul {
        padding: 0;
        margin-top: 60px;
        margin-bottom: -20px;

        .empty {
            height: 80px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: large;
            color: #494949;
        }
    }
`
export const Input = styled.input`
    border: 2px solid rgba(26, 27, 27, .3);
    border-radius: 15px;
    height: 40px;
    margin-right: 10px;
    width: 340px;
    box-shadow: 4px 4px 10px rgba(0,0,0,0.2);
    padding: 0 20px;
`
export const Button = styled.button`
    background-color: #8052EC;
    box-shadow: 4px 4px 10px rgba(0,0,0,0.3);
    border-radius: 5px;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    height: 40px;
    border: none;
    color: #ffffff;
    width: 130px;
    cursor: pointer;
    transition: 300ms;

    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }
`
export const ItemList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 60px;
    border-radius: 5px;
    background-color: ${props => props.$isfinished ? '#E8FF8B' : '#a1a1a1'};
    margin-bottom: 20px;
    box-shadow: 4px 4px 10px rgba(0,0,0,0.2);

    li {
        list-style: none;
        
    }
`

export const CheckOk = styled(FcOk)`
    &:hover {
        cursor: pointer;
    }
`
export const Trash = styled(FcFullTrash)`
    &:hover {
        cursor: pointer;
    }
`
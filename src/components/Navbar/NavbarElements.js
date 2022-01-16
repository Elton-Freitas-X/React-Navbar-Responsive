import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import {IoLogoGameControllerB} from 'react-icons/io'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    /*justify-content: space-between;*/
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;

    /* 3rd Nav  */

    justify-content: flex-start;
`

export const NavLink = styled.li`
    display: flex;
    align-items: center;
    height: 100%;

    a{
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    }

    a:active{
        color: #15cdfc;
    }

    a:hover{
        color: #15cdfc; 
        transition: all 0.2s ease-in-out;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const Game = styled(IoLogoGameControllerB)`
    color: #256ce1;
    font-size: 3.5rem;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    margin-right: -24px;

    /* 2rd Nav */
    /* margin-right: 24px */

    /* 3rd Nav */
        width: 100vw; 
        white-space: nowrap;
    

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    /* 3rd nav */
        justify-content: flex-end;
        width: 100vw;


        a{
        border-radius: 4px;
        background: #256ce1;
        padding: 10px 22px;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none; 


        /*margin-left: 24px;*/
    }

        a:hover{
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
        }

    @media screen and (max-width: 768px) {
        display: none;
    }
`


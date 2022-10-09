import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 6rem;

    @media screen and (max-width: 700px) {
        padding: 2rem 4rem;
    }

    @media screen and (max-width: 550px) {
        padding: 2rem;
    }
`;

export const NavbarLinks = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .logo {
        margin-right: 2rem;

        img {
            width: 62.56px;
            height: 16.02px;
        }
    }

    .container {
        display: flex;
        flex-direction: row;

        p {
            color: #fff;
            font-family: var(--font-family);
            font-weight: 500;
            font-size: 18px;
            line-height: 25px;
            text-transform: capitalize;

            margin: 0 1rem;
            cursor: pointer;
        }

        @media screen and (max-width: 1050px) {
            display: none;
        }
    }
`;

export const NavbarSign = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
        color: #fff;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        text-transform: capitalize;

        margin: 0 1rem;
        cursor: pointer;
    }

    button {
        padding: 0.5rem 1rem;
        color: #fff;
        background: #FF4820;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 5px;
    }

    @media screen and (max-width: 550px) {
        display: none;
    }
`;

export const NavbarMenuContainer = styled.div`
    color: #fff;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;

    margin: 0 1rem;
    cursor: pointer;

    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    
    text-align: end;
    background: var(--color-footer);
    padding: 2rem;
    position: absolute;
    right: 0;
    top: 40px;
    margin-top: 1rem;
    min-width: 210px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0,0, 0,0.2);

    @keyframes scale-up-center {
        0% {
            -webkit-transform: scale(0.5);
                    transform: scale(0.5);
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
        }
    }

    p {
        margin: 1rem 0;
    }

    button {
        padding: 0.5rem 1rem;
        color: #fff;
        background: #FF4820;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 5px;
    }

    .sign {
        display: none;

        @media screen and (max-width: 550px) {
            display: block;
        }
    }

    @media screen and (max-width: 550px) {
        top: 20px;
    }
`;

export const Menu = styled.div`
    margin-left: 1rem;

    display: none;
    position: relative;

    svg {
        cursor: pointer;
    }
    
    @media screen and (max-width: 1050px) {
        display: flex;
    }
`;
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: var(--color-footer);

    padding: 4rem 6rem;

    .heading {
        width: 100%;
        text-align: center;
        margin-bottom: 3rem;

        h1 {
           font-family: var(--font-family);
            font-weight: 800;
            font-size: 64px;
            line-height: 75px;

            background: var(--gradient-text);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            @media screen and (max-width: 850px) {
                font-size: 44px;
                line-height: 50px;
            }

            @media screen and (max-width: 550px) {
                font-size: 34px;
                line-height: 42px;
            }

            @media screen and (max-width: 400px) {
                font-size: 27px;
                line-height: 38px;
            }
        }
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 1rem;
        border: 1px solid #fff;
        text-align: center;

        margin-bottom: 10rem;
        cursor: pointer;
        
        p {
            font-size: 18px;
            font-family: var(--font-family);
            line-height: 21px;
            color: #fff;
            word-spacing: 2px;

            @media screen and (max-width: 550px) {
                font-size: 14px;
                line-height: 20px;
            }
        }
    }

    .copyright {
        margin-top: 2rem;
        text-align: center;
        width: 100%;

        p {
            font-size: 12px;
            font-family: var(--font-family);
            line-height: 15px;
            color: #fff;
        }
    }
`;

export const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;

    width: 100%;
    text-align: left;
    
    div {
        width: 250px;
        margin: 1rem;

        @media screen and (max-width: 550px) {
            margin: 1rem 0;
        }
    }

    .logo {
        display: flex;
        flex-direction: column; 

        img {
            width: 118px;
            height: 30px;

            margin-bottom: 1rem;
        }

        p {
            font-family: var(--font-family);
            font-size: 12px;
            line-height: 15px;
            color: #fff;
        }
    }

    .div {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;

        h4 {
           font-size: 14px;
            line-height: 17px;
            font-family: var(--font-family);
            color: #fff;

            margin-bottom: 0.9rem; 
        }
        
        p {
            font-size: 12px;
            line-height: 15px;
            font-family: var(--font-family);
            color: #fff;

            margin: 0.5rem 0;
            cursor: pointer;
        }
    }
`;
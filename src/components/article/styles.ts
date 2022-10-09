import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    background: var(--color-footer);
    
    .image {
        width: 100%;
        height: 100%;
        background: var(--color-bg);

        img {
            width: 100%;
            height: 100%;
        }

        @media screen and (max-width: 990px) {
            height: 250px;
        }
    }

    @media screen and (max-width: 990px) {
        width: 48%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1rem 1.5rem;
    height: 100%;

    p {
        font-family: var(--font-family);
        font-size: 11.65px;
        font-weight: 700;
        line-height: 35px;

        color: #fff;

        &:last-child {
            cursor: pointer;
        }
    }

    h3 {
        font-family: var(--font-family);
        font-size: 25.11px;
        font-weight: 800;
        line-height: 30.30px;
        
        color: #fff;
        margin-bottom: 5rem;
        cursor: pointer;

        @media screen and (max-width: 550px) {
            font-size: 18px;
            line-height: 25p;
        }
    }
`;
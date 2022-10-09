import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4rem 6rem;

    @media screen and (max-width: 950px) {
        flex-direction: column;
    }

    .image {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        margin-right: 2rem;

        @media screen and (max-width: 950px) {
            margin: 1rem 0;
        }
        
        img {
            width: 100%;
            height: 100%;

            @media screen and (max-width: 950px) {
                width: unset;
                height: unset;
            }

            @media screen and (max-width: 700px) {
                width: 100%;
                height: 100%;
            }
        }
        
    }

    .content {
       flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        flex-direction: column;

        @media screen and (max-width: 950px) {
            margin-top: 2rem;
        }

        h4 {
           font-family: var(--font-family);
            font-weight: 500;
            font-size: 16px;
            line-height: 30px;
            color: #71E5FF;

            &:last-child {
               color: #ff8A71; 
            }
        }

        h1 {
            font-family: var(--font-family);
            font-weight: 800;
            font-size: 34px;
            line-height: 45px;
            margin: 1rem 0;

            background: var(--gradient-text);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        p {
           color: var(--color-text);
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 16px;
            line-height: 30px;

            margin-bottom: 2rem; 
        }
    }
`;
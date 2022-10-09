import styled from 'styled-components';

export const Container = styled.div`
    padding: 4rem 6rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 990px) {
        flex-direction: column-reverse;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }
    
    .heading {
       width: 100%;
        text-align: left;

        margin-bottom: 5rem;

        h1 {
            font-size: 62px;
            line-height: 75px;
            font-family: var(--font-family);
            font-weight: 800;

            background: var(--gradient-text);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            @media screen and (max-width: 550px) {
                font-size: 34px;
                line-height: 42px;
            }

            @media screen and (max-width: 700px){
                font-size: 46px;
                line-height: 52px;
            }
        }
    }
`;

export const BlogContainer = styled.div`
    display: flex;
    flex-direction: row;

    .first {
        flex: 0.75;
        margin-right: 2rem;

        @media screen and (max-width: 990px) {
            margin: 2rem 0;
        }
    }

    .second {
        flex: 1;

        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;

        @media screen and (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 4rem 6rem;

    @media screen and (max-width: 990px) {
        flex-direction: column;
    }

    .heading {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        text-align: left;
        margin-right: 5rem;

        @media screen and (max-width: 990px) {
            margin: 0 0 2rem 0;
        }

        h1 {
            font-size: 34px;
            line-height: 45px;
            font-weight: 800;
            font-family: var(--font-family);

            background: var(--gradient-text);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            @media screen and (max-width: 550px) {
                font-size: 28px;
                line-height: 38px;
            }

            p {
                color: var(--color-subtext);
                font-size: 16px;
                line-height: 30px;
                font-weight: 500;
                font-family: var(--font-family);

                margin-top: 2rem;
            }
        }
    }

    .container {
        flex: 1.5;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }
`;
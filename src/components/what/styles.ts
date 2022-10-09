import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 2rem;
    background: var(--color-footer);

    background:-moz-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    background:-webkit-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    background:-o-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    background:-ms-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    background:radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    margin: 4rem 6rem;

    .feature {
        display: flex;

        div {
            margin: 0;

            .text {
                max-width: 700px;
                
                @media screen and (max-width: 650px) {
                    margin-top: 0.5rem;
                }
            }

            @media screen and (max-width: 650px) {
                flex-direction: column;
            }
        }
    }

    .heading {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        margin: 4rem 0 2rem;

        h1 {
            font-size: 34px;
            line-height: 45px;
            font-weight: 800;
            font-family: var(--font-family);
            max-width: 510px;

            background: var(--gradient-text);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            @media screen and (max-width: 650px) {
                font-size: 28px;
                line-height: 40px;
            }
        }
        
        p {
            font-family: var(--font-family);
            font-weight: 500;
            font-size: 16px;
            line-height: 30px;
            color: var(--color-subtext);
            cursor: pointer;

            @media screen and (max-width: 850px) {
                margin-top: 1rem;
            }
        }

        @media screen and (max-width: 850px) {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 0rem;
        }
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;

        margin-top: 2rem;

        .text {
            margin-top: 0.5rem;
        }

        .feature {
            @media screen and (max-width: 350px) {
                margin: 1rem 0;
                min-width: 100%;
            }
        }
    }
`;
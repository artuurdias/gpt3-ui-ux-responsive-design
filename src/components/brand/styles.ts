import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 4rem 6rem;

    div {
        flex: 1;
        max-width: 150px;
        min-width: 120px;
        margin: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
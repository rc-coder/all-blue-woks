import styled from 'styled-components';

export const OrderContainer = styled.div`
  background-color: var(--white);
  color: var(--black);
  width: 80vw;
  /* margin: 0 3rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
  border-radius: 16px;
  border: 4px solid black;

  @media screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;

export const OrderTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  var(--font-fraunces);
  font-weight: 800;
`;

export const OrderItem = styled.div`
  & h2 {
    padding: 0 2rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-family: var(--font-fraunces);
    font-weight: 800;
  }
  & span {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 3rem;
    width: 100%;
    font-weight: 600;
    font-size: 1.2rem;
    text-shadow: 1px 1px 2px black;
    color: aliceblue;

    @media screen and (max-width: 768px) {
      padding: 0.6rem 1rem;
    }
  }
`;

export const OrderTotal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & h2 {
    padding: 0 2rem;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-family: var(--font-fraunces);
    font-weight: 800;
    width: 100%;
    border-bottom: 2px solid black;
    margin-top: 1rem;
  }
  & p {
    align-self: flex-end;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-family: var(--font-fraunces);
    font-weight: 800;
    padding: 0 2rem;
  }
`;

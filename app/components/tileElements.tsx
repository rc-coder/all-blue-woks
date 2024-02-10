import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  gap: 1rem;
  /* grid-template-columns: repeat(4, minmax(0, 1fr)); */
  /* grid-template-rows: repeat(12, minmax(0, 1fr)); */
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(4, minmax(0, max-content));
  grid-template-rows: repeat(12, minmax(0, max-content));

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    /* padding: 1rem 0; */

    & .panel {
      margin: 0 1rem;
      height: 80vh;
    }
  }
`;

export const Title = styled.div`
  background: black;
  height: 100%;
  color: black;
  line-height: 1;
  min-height: 100%;
  display: grid;
  place-items: center;
  justify-content: center;
  min-height: calc(50vh - 16px);

  & h1 {
    font-family: var(--font-inter);
    font-size: 5vw;
    font-weight: 900;
    width: -webkit-min-content;
    width: -moz-min-content;
    width: min-content;
    margin: auto;
    text-transform: uppercase;
    background: linear-gradient(
      219deg,
      var(--color-1) 19%,
      transparent 19%,
      transparent 20%,
      var(--color-2) 20%,
      var(--color-2) 39%,
      transparent 39%,
      transparent 40%,
      var(--color-3) 40%,
      var(--color-3) 59%,
      transparent 59%,
      transparent 60%,
      var(--color-4) 60%,
      var(--color-4) 79%,
      transparent 79%,
      transparent 80%,
      var(--color-5) 80%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    @media screen and (max-width: 768px) {
      font-size: 20vw;
    }
  }

  & .container {
    padding: 1rem;
    text-align: center;
    background: radial-gradient(
        circle at 1.4% 1.4%,
        var(--color-1) 0.8%,
        transparent 0.8%
      ),
      radial-gradient(
        circle at 5.5% 3%,
        var(--color-2) 0.45%,
        transparent 0.45%
      ),
      radial-gradient(
        circle at 2.5% 3.5%,
        var(--color-3) 0.5%,
        transparent 0.5%
      ),
      radial-gradient(
        circle at 4.5% 1.2%,
        var(--color-4) 0.25%,
        transparent 0.25%
      ),
      radial-gradient(circle at 98% 98%, var(--color-1) 0.8%, transparent 0.8%),
      radial-gradient(
        circle at 95% 95%,
        var(--color-2) 0.45%,
        transparent 0.45%
      ),
      radial-gradient(
        circle at 94.5% 97.5%,
        var(--color-3) 0.5%,
        transparent 0.5%
      ),
      radial-gradient(
        circle at 98.5% 95.5%,
        var(--color-4) 0.25%,
        transparent 0.25%
      );
  }
`;

export const TileText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  position: relative;
  color: black;
  text-shadow: 1px 1px 2px black;

  @media screen and (max-width: 768px) {
    padding: 0px;
  }
  & h2 {
    text-transform: uppercase;
    text-align: center;
    font-size: 1.6rem;
    font-family: var(--font-fraunces);
    font-weight: 800;
  }

  & .steps {
    margin: 15px;
    padding: 5px 15px;
    float: right;
    background: #ddd;
    border: 2px solid #222;
    box-shadow: -4px 4px 0 #222;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-style: italic;
    top: 0px;
    left: -5px;
    font-weight: 600;

    @keyframes ani {
      0% {
        transform: translate3d(0, 0, 0);
        text-shadow: 0em 0em 0 lightblue;
        color: black;
      }
      30% {
        transform: translate3d(0, 0, 0);
        text-shadow: 0em 0em 0 lightblue;
        color: black;
      }
      70% {
        transform: translate3d(0.08em, -0.08em, 0);
        text-shadow: -0.08em 0.08em lightblue;
        color: black;
      }
      100% {
        transform: translate3d(0.08em, -0.08em, 0);
        text-shadow: -0.08em 0.08em lightblue;
        color: black;
      }
    }

    & p {
      position: relative;
      display: inline-block;
      animation: ani 1s infinite alternate cubic-bezier(0.86, 0, 0.07, 1);
    }
  }

  & .number {
    display: inline-block;
    color: white;
    font-size: 5rem;
    text-shadow: -0.06em 0.04em 0 hsla(240, 40%, 40%, 1);
    position: absolute;
    bottom: 0px;
    right: 15px;
  }
`;

export const BaseOptions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BaseTitle = styled.span`
  position: absolute;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-size: 2rem;
  left: -2rem;
  top: -1rem;
  padding: 10px 0;
`;

export const VegTitle = styled.span`
  position: absolute;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-size: 2rem;
  left: -2rem;
  bottom: -1rem;
  padding: 10px 0;
`;

export const ProtTitle = styled.span`
  position: absolute;
  font-size: 2rem;
  top: -2.5rem;
  left: 1rem;
  padding: 0 10px;
`;

export const SalsaTitle = styled.span`
  position: absolute;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-size: 2rem;
  left: -2rem;
  top: -1rem;
  padding: 10px 0;
`;

export const ToppingsTitle = styled.span`
  position: absolute;
  font-size: 2rem;
  bottom: -2.5rem;
  right: 1rem;
  padding: 0 10px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: var();

  & .sectionTitle {
    color: black;
    background-image: linear-gradient(gold, gold);
    background-size: 100% 10px;
    background-repeat: no-repeat;
    background-position: 100% 0%;
    transition: background-size 0.7s, background-position 0.5s ease-in-out;
  }

  &:hover {
    & .sectionTitle {
      background-size: 100% 100%;
      background-position: 0% 100%;
      transition: background-position 0.7s, background-size 0.5s ease-in-out;
    }
  }
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  --tw-bg-opacity: 1;
  background-color: white;
  transition: all 0.5s;

  &:hover {
    background-color: black;
  }

  & button {
    width: 100%;
    color: black;
    background-color: white;
    padding: 0.8rem;
    border: 4px solid black;
    margin: 2px;
    text-shadow: 0.5px 0.5px 1px black;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.3rem;
    font-family: var(--font-fraunces);
    font-weight: 800;
    transition: all 0.5s;

    &:hover {
      background-color: black;
      color: white;
      border: 4px solid white;
      text-shadow: 0.5px 0.5px 1px white;
    }
  }
`;

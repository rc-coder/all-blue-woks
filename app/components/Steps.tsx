'use client';

import styled from 'styled-components';

export const Steps = styled.section`
  border: 6px double red;
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & .numberL {
    color: aqua;
    position: absolute;
    left: -25px;
    top: -25px;
  }

  & .numberR {
    color: aqua;
    position: absolute;
    right: -25px;
    top: -25px;
  }
`;

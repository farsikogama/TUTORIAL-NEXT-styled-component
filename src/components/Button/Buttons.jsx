import styled, { css } from 'styled-components';

export default styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid white;

  // cara 1 menggunakan theme
  // background: ${(props) => props.theme[props.color]};

  // cara 2 menggunakan theme
  ${(props) =>
    props.color
      ? css`
          background: ${props.theme[props.color]};
        `
      : css`
          background: yellow;
        `}

  ${(props) =>
    props.label
      ? css`
          color: ${props.theme[props.label]};
        `
      : css`
          color: white;
        `}
`;

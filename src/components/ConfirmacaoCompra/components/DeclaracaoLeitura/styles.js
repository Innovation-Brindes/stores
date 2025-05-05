import styled from 'styled-components';

export const Checkbox = styled.input`
    width: 1.7em;
    height: 1.7em;
    background-color: white;
    border-radius: 5px;
    vertical-align: middle;
    border: 3px solid gray;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: 0.2s;


  &:checked {
    background-color: transparent;
    border: 3px solid #9FCD42;

    &:after {
      content: '✓';
      display: block;
      text-align: center;
      font-size: 1rem;
      color: #9FCD42;

      font-weight: bold;

      outline: none;
    }
  }

`;

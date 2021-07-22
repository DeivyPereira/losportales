import styled from "styled-components";

export const Selects = styled.select`
  background: url("data:image/svg+xml,<svg height='15px' width='15px' viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>")
    no-repeat;
  background-position: calc(100% - 0.5rem) center !important;
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
  padding-right: 1.5rem !important;
  text-transform: uppercase;
  width: 6rem;
  padding: 0.5rem;
  margin-right: 1rem;
  color: white;
  border-color: white;
  border-radius: 3px;
  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    margin:5px;
    width: 100%;
    font-size:1rem;
    font-family: 'Roboto';
  }
`;

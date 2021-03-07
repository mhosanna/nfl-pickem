import styled from "styled-components";

const TableStyles = styled.table`
  border-spacing: 0;
  width: 100%;
  border: 1px solid var(--offWhite);
  thead {
    font-size: 10px;
    background-color: var(--blue);
    color: white;
    text-align: left;
  }
  td,
  th {
    border-bottom: 1px solid var(--offWhite);
    border-right: 1px solid var(--offWhite);
    padding: 10px 5px;
    position: relative;
    &:last-child {
      border-right: none;
      width: 150px;
    }
  }
`;

export default TableStyles;

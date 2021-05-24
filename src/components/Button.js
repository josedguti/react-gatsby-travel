import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#F26A2E' : '#077BF1')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
`
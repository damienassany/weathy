import * as React from 'react';
import { Column } from '../Column';
import styled from 'styled-components';

type Props = {
    min: string;
    max: string;
}

const Temperature = styled.p`
    margin: 5px;
`;

export const TempsOfTheDay: React.FC<Props> = ({ min, max }) => (
    <Column>
        <Temperature>min: {min}</Temperature>
        <Temperature>max: {max}</Temperature>
    </Column>
)
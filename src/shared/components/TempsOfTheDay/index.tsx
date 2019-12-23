import * as React from 'react';
import { Column } from '../Column';
import styled from 'styled-components';

type Props = {
    min: number;
    max: number;
}

const Temperature = styled.p`
    margin: 5px;
`;

export const TempsOfTheDay: React.FC<Props> = ({ min, max }) => (
    <Column>
        <Temperature>min: {`${min.toFixed(1)}°`}</Temperature>
        <Temperature>max: {`${max.toFixed(1)}°`}</Temperature>
    </Column>
)
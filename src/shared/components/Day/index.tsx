import * as React from 'react';
import { Icons, Icon } from '../Icon';
import styled from 'styled-components';
import { Column } from '../Column';
import { TempsOfTheDay } from '../TempsOfTheDay';

type Props = {
    label: string;
    icon: Icons;
    temperatures: {
        min: string;
        max: string;
    };
    selected?: boolean;
}

const StyledColumn = styled(Column)<{ selected: boolean; }>`
    padding: 10px;
    background-color: #F9F9F9;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    border: 5px solid ${props => props.selected ? '#75A4FF' : 'transparent'};
`;

const Label = styled.p`
  font-weight: 700;  
`;

export const Day: React.FC<Props> = ({ label, icon, temperatures, selected = false }) => (
    <StyledColumn selected={selected}>
        <Label>{label}</Label>
        <Icon name={icon} size={80} />
        <TempsOfTheDay {...temperatures} />
    </StyledColumn>
);
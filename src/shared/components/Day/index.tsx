import * as React from 'react';
import { Icons, Icon } from '../Icon';
import styled from 'styled-components';
import { Column } from '../Column';
import { TempsOfTheDay } from '../TempsOfTheDay';

type Props = {
    label: string;
    icon: Icons;
    temperatures: {
        min: number;
        max: number;
    };
    selected?: boolean;
    onClick(): void;
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

const StyledButton = styled.button<{ selected: boolean; }>`
    width: 100%;
    background: none;
    border: none;
    font-size: 18px;

    &:focus {
        outline: ${props => props.selected ? 'none': '1px solid #75A4FF'};
    }
`;

export const Day: React.FC<Props> = ({ label, icon, temperatures, selected = false, onClick }) => (
    <StyledButton onClick={onClick} selected={selected}>
        <StyledColumn selected={selected}>
            <Label>{label}</Label>
            <Icon name={icon} size={80} />
            <TempsOfTheDay {...temperatures} />
        </StyledColumn>
    </StyledButton>
);
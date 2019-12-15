import * as React from 'react';
import styled from 'styled-components';

type Props = {
    selected: boolean;
    label: string;
    onClick(): void;
}

const Wrapper = styled.button<{ selected: boolean; }>`
    padding: 8px;
    background-color: ${props => props.selected ? "#E7E7E7" : "white"};
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: none;
    font-size: 16px;
`;

const Label = styled.p`
    margin: 0;
`;

export const Timeslice: React.FC<Props> = ({ selected, label, onClick }) => (
    <Wrapper selected={selected} onClick={onClick}>
        <Label>{label}</Label>
    </Wrapper>
);
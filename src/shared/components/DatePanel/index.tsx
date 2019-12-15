import * as React from 'react';
import styled from 'styled-components';
import { Column } from '../Column';

const Date = styled.p`
    font-size: 30px;
    font-weight: 700;
    color: black;
    margin: 0;
`;

const Time = styled.p`
    font-size: 30px;
    font-weight: 300;
    color: black;
    margin: 0;
`;

const Wrapper = styled(Column)<{ outline: boolean; }>`
    align-items: flex-end;
    text-align: right;
    background-color: #F9F9F9;
    border-radius: 10px;
    border: 5px solid ${props => props.outline ? "#75A4FF" : 'transparent'}
    width: 100%;
    padding: 10px;
`;

type Props = {
    date: string;
    time: string;
    outline?: boolean;
}

export const DatePanel: React.FC<Props> = ({ date, time, outline = false }) => (
    <Wrapper outline={outline}>
        <Date>{date}</Date>
        <Time>{time}</Time>
    </Wrapper>
);
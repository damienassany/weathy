import * as React from 'react';
import styled from 'styled-components';
import { Column } from '../Column';
import moment from 'moment';

const Date = styled.p`
    font-size: 22px;
    font-weight: 700;
    color: black;
    margin: 0;
`;

const Time = styled.p`
    font-size: 22px;
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
    outline?: boolean;
    onClick(): void;
}

export const DatePanel: React.FC<Props> = ({ outline = false, onClick }) => {
    const [date, setDate] = React.useState(moment().format('ddd, DD, MMM.'))
    const [time, setTime] = React.useState(moment().format('HH:mm'))

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            const momentDate = moment();

            setDate(momentDate.format('ddd, DD, MMM.'))
            setTime(momentDate.format('HH:mm'))
        }, 1000);

        return clearInterval(intervalId);
    }, []);

    return (
        <Wrapper outline={outline} onClick={onClick}>
            <Date>{date}</Date>
            <Time>{time}</Time>
        </Wrapper>
    )
};
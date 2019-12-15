import * as React from 'react';
import styled from 'styled-components';
import { Row } from '../../../shared/components/Row';
import { Title } from '../../../shared/components/Title';
import { DatePanel } from '../../../shared/components/DatePanel';
import { TempWithIcon } from '../../../shared/components/TempWithIcon';
import { Icons } from '../../../shared/components/Icon';
import { TempsOfTheDay } from '../../../shared/components/TempsOfTheDay';
import { Timeslice } from '../../../shared/components/Timeslice';
import { Day } from '../../../shared/components/Day';
import { Column } from '../../../shared/components/Column';

const Logo = styled.p`
    width: 140px;
`;

const Wrapper = styled(Column)`
    flex: 1;
`;

const DatePanelWrapper = styled.div`
    width: 140px;
`;

const TempWithIconWrapper = styled(Row)`
    max-width: 300px;
    align-self: center;
`;

const TimesliceWrapper = styled.div`
    margin-right: 20px;
`;

const TimeslicesWrapper = styled(Row)`
    max-width: 760px;
    align-self: center;
    overflow: scroll;
`;

const DayWrapper = styled.div`
    width: 20%;
`;

const DaysWrapper = styled(Row)`
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`;

export class Weather extends React.PureComponent {
    public timeslices = ["00:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00", "21:00"];
    public render() {
        return (
            <Wrapper>
                <Row>
                    <Logo>Weathy</Logo>
                    <Title>Edinburgh</Title>
                    <DatePanelWrapper>
                        <DatePanel
                            outline={true}
                            date={"Sun, 15 Dec."}
                            time={"11:32 am"}
                        />
                    </DatePanelWrapper>
                </Row>

                <TempWithIconWrapper>
                    <TempWithIcon
                        icon={Icons["02d"]}
                        value="9°"
                    />
                    <TempsOfTheDay min={"2°"} max={"10°"} />
                </TempWithIconWrapper>
                
                <TimeslicesWrapper>
                    { this.timeslices.map((timeslice, index) => (
                        <TimesliceWrapper>
                            <Timeslice label={timeslice} selected={index === 2} onClick={() => null} />
                        </TimesliceWrapper>
                    ))}
                </TimeslicesWrapper>

                <DaysWrapper>
                    { new Array(4).fill(1).map(day => (
                        <DayWrapper>
                            <Day
                                label={"Mon. 16"}
                                icon={Icons["02d"]}
                                temperatures={{
                                    min: '1°',
                                    max: '5°'
                                }}
                            />
                        </DayWrapper>
                    )) }
                </DaysWrapper>
            </Wrapper>
        );
    }
}
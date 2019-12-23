import * as React from "react";
import styled from "styled-components";
import { Row } from "../../../shared/components/Row";
import { Title } from "../../../shared/components/Title";
import { DatePanel } from "../../../shared/components/DatePanel";
import { TempWithIcon } from "../../../shared/components/TempWithIcon";
import { Icons } from "../../../shared/components/Icon";
import { TempsOfTheDay } from "../../../shared/components/TempsOfTheDay";
import { Timeslice } from "../../../shared/components/Timeslice";
import { Day } from "../../../shared/components/Day";
import { Column } from "../../../shared/components/Column";
import { WeatherProps } from "../containers/Weather.container";
import { observer } from "mobx-react";
import moment from "moment";

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
  width: 18%;
`;

const DaysWrapper = styled(Row)`
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`;

@observer
export class Weather extends React.PureComponent {
  public get _props() {
    return this.props as WeatherProps;
  }

  public render() {
    const {
      currentDate,
      currentSelectedTimesliceIndex,
      currentTimeslice,
      forecast,
      updateDate,
      updateTimesliceIndex,
      error
    } = this._props;
    const date = moment();
    
    return (
      <Wrapper>
        <Row>
          <Logo>Weathy</Logo>
          <Title onClick={() => updateDate(date.format("DD-MM-YYYY"))}>Edinburgh</Title>
          <DatePanelWrapper>
            <DatePanel onClick={() => updateDate(date.format("DD-MM-YYYY"))} outline={currentDate === date.format("DD-MM-YYYY")} />
          </DatePanelWrapper>
        </Row>

        {
          error 
          ? (
            <div>
              We couldn't load the weather in your city : {error}.
            </div>
          )
          : (
            <Column>
              {currentTimeslice && (
                <TempWithIconWrapper>
                  <TempWithIcon
                    icon={Icons[currentTimeslice.weather[0].icon]}
                    value={`${currentTimeslice.main.temp.toFixed(1)}°`}
                  />
                  <TempsOfTheDay min={'1°'} max={'10°'} />
                </TempWithIconWrapper>
              )}
      
              {currentTimeslice && (
                <TimeslicesWrapper>
                  {forecast[currentDate].map((timeslice, index) => (
                    <TimesliceWrapper>
                      <Timeslice
                        label={moment(timeslice.dt_txt).format("HH:mm")}
                        selected={index === currentSelectedTimesliceIndex}
                        onClick={() => updateTimesliceIndex(index)}
                      />
                    </TimesliceWrapper>
                  ))}
                </TimeslicesWrapper>
              )}
      
              <DaysWrapper>
                {Object.keys(forecast).filter(_date => _date !== date.format('DD-MM-YYYY'))
                  .map((date: string) => (
                    <DayWrapper key={date}>
                      <Day
                        selected={currentDate === date}
                        onClick={() => updateDate(date)}
                        label={moment(date, "DD-MM-YYYY").format("ddd. DD")}
                        icon={Icons[forecast[date][0].weather[0].icon]}
                        temperatures={{
                          min: "1°",
                          max: "5°"
                        }}
                      />
                    </DayWrapper>
                  ))}
              </DaysWrapper>
            </Column>
          )
        }
      </Wrapper>
    );
  }

  public componentDidMount = () => {
    const { fetchForecast } = this._props;

    fetchForecast();
  };
}

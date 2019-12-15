import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Timeslice } from '.';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 75px;
`;

storiesOf('Timeslice', module)
    .add('Default', () => <Timeslice label={"12:00"} onClick={() => null} selected={false} />)
    .add('Selected', () => <Timeslice label={"12:00"} onClick={() => null} selected={true} />)
    .add('Sized', () => (
        <Wrapper>
            <Timeslice label={"12:00"} onClick={() => null} selected={true} />
        </Wrapper>
    ));
import * as React from 'react';
import { DatePanel } from '.';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 200px;
`;

storiesOf('DatePanel', module)
    .add('Default', () => <DatePanel date="Sun, 15 Dec." time="11:32 am" />)
    .add('Outlined', () => <DatePanel outline={true} date="Sun, 15 Dec." time="11:32 am" />)
    .add('Sized', () => (
        <Wrapper>
            <DatePanel outline={true} date="Sun, 15 Dec." time="11:32 am" />
        </Wrapper>
    ));
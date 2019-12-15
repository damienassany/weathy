import * as React from 'react';
import { DatePanel } from '.';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 200px;
`;

storiesOf('DatePanel', module)
    .add('Default', () => <DatePanel onClick={() => null} />)
    .add('Outlined', () => <DatePanel onClick={() => null} outline={true} />)
    .add('Sized', () => (
        <Wrapper>
            <DatePanel onClick={() => null} outline={true} />
        </Wrapper>
    ));
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TempWithIcon } from '.';
import { Icons } from '../Icon';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100px;
`;

storiesOf('TempWithIcon', module)
    .add('Default', () => <TempWithIcon icon={Icons["02d"]} value={"9°"} />)
    .add('Sized', () => (
        <Wrapper>
            <TempWithIcon icon={Icons["02d"]} value={"9°"} />
        </Wrapper>
    ));
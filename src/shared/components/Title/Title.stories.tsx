import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Title } from '.';

storiesOf('Title', module)
    .add('Default', () => <Title>Edinburgh</Title>);
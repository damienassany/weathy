import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TempsOfTheDay } from '.';

storiesOf('TempsOfTheDay', module)
    .add('Default', () => <TempsOfTheDay min={2} max={10} />)
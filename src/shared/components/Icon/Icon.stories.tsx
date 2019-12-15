import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon, Icons } from '.';

storiesOf('Icon', module)
    .add('Clear sky day', () => <Icon name={Icons["01d"]} size={60} />)
    .add('Clear sky night', () => <Icon name={Icons["01n"]} size={60} />)
    .add('Few clouds day', () => <Icon name={Icons["02d"]} size={60} />)
    .add('Few clouds night', () => <Icon name={Icons["02n"]} size={60} />)
    .add('Scattered clouds day', () => <Icon name={Icons["03d"]} size={60} />)
    .add('Scattered clouds night', () => <Icon name={Icons["03n"]} size={60} />)
    .add('Broken clouds day', () => <Icon name={Icons["04d"]} size={60} />)
    .add('Broken clouds night', () => <Icon name={Icons["04n"]} size={60} />)
    .add('Shower rain day', () => <Icon name={Icons["09d"]} size={60} />)
    .add('Shower rain night', () => <Icon name={Icons["09n"]} size={60} />)
    .add('Rain day', () => <Icon name={Icons["10d"]} size={60} />)
    .add('Rain night', () => <Icon name={Icons["10n"]} size={60} />)
    .add('Thunderstorm day', () => <Icon name={Icons["11d"]} size={60} />)
    .add('Thunderstorm night', () => <Icon name={Icons["11n"]} size={60} />)
    .add('Snow day', () => <Icon name={Icons["13d"]} size={60} />)
    .add('Snow night', () => <Icon name={Icons["13n"]} size={60} />)
    .add('Mist day', () => <Icon name={Icons["50d"]} size={60} />)
    .add('Mist night', () => <Icon name={Icons["50n"]} size={60} />)
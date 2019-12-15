import * as React from 'react';
import styled from 'styled-components';
import { Icons, Icon } from '../Icon';
import { Row } from '../Row';

const Temperature = styled.p`
    font-size: 50px;
    font-weight: light;
`;

type Props = {
    icon: Icons;
    value: string;
}

export const TempWithIcon: React.FC<Props> = ({ icon, value }) => (
    <Row>
        <Icon size={80} name={icon} />
        <Temperature>{value}</Temperature>
    </Row>
);
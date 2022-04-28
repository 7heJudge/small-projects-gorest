import React from 'react';
import styled from 'styled-components';

import theme from 'theme/theme';
import { Card } from 'antd';

interface UserCardProps {
  name: string;
  email: string;
}

const UserCard = ({ name, email }: UserCardProps) => {
  return (
    <Container>
      <CardWrapper title={name} bordered={false}>
        <p>{email}</p>
      </CardWrapper>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px 0;
`;

const CardWrapper = styled(Card)`
  background-color: ${theme.colors.gray};
  width: 300px;
`;

export default UserCard;

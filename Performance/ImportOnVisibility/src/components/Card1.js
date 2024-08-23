import React from 'react';
import { Card } from './Card';

const Card1 = () => {
  return (
    <Card>
      Statically imported <code>Card1</code> rendered at:{' '}
      {new Date(Date.now()).toLocaleTimeString()}
    </Card>
  );
};

export default Card1;

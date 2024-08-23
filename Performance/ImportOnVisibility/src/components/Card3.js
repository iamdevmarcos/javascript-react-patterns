import React from 'react';
import { Card } from './Card';

const Card3 = () => {
  return (
    <Card>
      Dynamically imported <code>Card3</code> rendered at:{' '}
      {new Date(Date.now()).toLocaleTimeString()}
    </Card>
  );
};

export default Card3;

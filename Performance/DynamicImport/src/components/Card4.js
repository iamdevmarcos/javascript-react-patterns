import React from 'react';
import { Card } from './Card';

const Card4 = () => {
  return (
    <Card>
      Dynamically imported <code>Card4</code> rendered at:{' '}
      {new Date(Date.now()).toLocaleTimeString()}
    </Card>
  );
};

export default Card4;

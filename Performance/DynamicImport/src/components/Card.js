import React from 'react';

export const Card = ({ children, rendered = true, ...args }) => (
  <div
    className="card"
    style={{
      border: rendered ? 'none' : '2px dotted #FF42A1',
      cursor: rendered ? 'default' : 'pointer',
    }}
    {...args}
  >
    <div>
      <p>{children}</p>
    </div>
  </div>
);

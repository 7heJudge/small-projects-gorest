import React from 'react';

type SpacerProps = {
  height: number;
};

const Spacer: React.FC<SpacerProps> = ({ height }) => {
  return <div style={{ width: '100%', height }} />;
};

export default Spacer;

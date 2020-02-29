import React, { useState } from 'react';

interface CardBlockProps {
  title: string;
  borderWidth: 'unset' | 'thin' | 'thick';
}

export function CardBlock({
  children,
  title,
  borderWidth = 'unset',
}: React.PropsWithChildren<CardBlockProps>) {
  const [testFeatureFlag, setTestFeatureFlag] = useState(false);
  return (
    <div
      data-testid="ui-block-card"
      style={{ border: `${borderWidth} solid red` }}
    >
      <h3>{title}</h3>
      {!testFeatureFlag && (
        <button onClick={() => setTestFeatureFlag(true)}>Show more</button>
      )}
      {testFeatureFlag && children}
    </div>
  );
}

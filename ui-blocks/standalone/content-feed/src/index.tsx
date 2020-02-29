import * as React from 'react';
import { CardBlock } from '@ui-blocks/core';

interface ContentFeedBlockProps {
  items?: ContentFeedItem[];
}

export interface ContentFeedItem {
  name: string;
  url: string;
}

export function ContentFeedBlock({ items = [] }: ContentFeedBlockProps) {
  return items.length === 0 ? (
    <p>No items available in this content feed</p>
  ) : (
    <>
      {items.map((item, idx) => (
        <CardBlock
          borderWidth={idx % 2 === 0 ? 'thick' : 'thin'}
          title={item.name}
          key={idx + item.name}
        >
          Read some extra content and <a href={item.url}>go to {item.url}</a>
        </CardBlock>
      ))}
    </>
  );
}

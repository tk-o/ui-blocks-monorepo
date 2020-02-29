import React from 'react';
import {
  ContentFeedBlock,
  ContentFeedItem,
} from '@ui-blocks-standalone/content-feed';

export default function IndexPage() {
  const items = [
    {
      name: 'This time all works just fine',
      url: '/😎',
    },
    {
      name: 'Trying mutliple entries',
      url: '/🏝',
    },
    {
      name: 'To show things are',
      url: '/🧗',
    },
    {
      name: 'Well configured',
      url: '/🔥',
    },
  ] as ContentFeedItem[];

  return (
      <ContentFeedBlock items={items} />
  );
}

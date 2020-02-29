import React from 'react';
import { ContentFeedBlock, ContentFeedItem } from '@ui-blocks-standalone/content-feed';

export default { title: 'Content feeds' };

export const withNoItems = () => <ContentFeedBlock />;

export const withItems = () => {
  const contentFeedItems = [
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
  return <ContentFeedBlock items={contentFeedItems} />;
};

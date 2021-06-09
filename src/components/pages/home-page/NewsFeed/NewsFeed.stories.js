import React from 'react';

import NewsFeed from './NewsFeed';
import ARTICLES from 'mock-data/articles.json';

export default {
  component: NewsFeed,
  title: 'NewsFeed'
};

const Template = args => <section style={{ width: '500px' }}><NewsFeed {...args} /></section>;

export const DefaultFeeds = Template.bind({});
DefaultFeeds.args = {
  data: ARTICLES,
  isClientSide: true
};

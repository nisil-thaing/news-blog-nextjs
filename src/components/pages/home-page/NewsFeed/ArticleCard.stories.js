import React from 'react';

import ArticleCard from './ArticleCard';
import ARTICLES from 'mock-data/articles.json';

export default {
  component: ArticleCard,
  title: 'News feed\'s ArticleCard'
};

const ARTICLE_DATA = ARTICLES[0];

const Template = args => <section style={{ width: '500px' }}><ArticleCard {...args} /></section>;

export const DefaultCardWithData = Template.bind({});
DefaultCardWithData.args = {
  data: ARTICLE_DATA,
  coverImageRatio: 16 / 9,
  isRenderHighResolutionImage: true
};

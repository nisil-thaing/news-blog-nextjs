import React from 'react';

import ArticleCard from './ArticleCard';
import ARTICLES from 'mock-data/articles.json';

export default {
  component: ArticleCard,
  title: 'Landing Featured Slider ArticleCard'
};

const ARTICLE_DATA = ARTICLES[0];

const Template = args => <section style={{ width: '500px' }}><ArticleCard {...args} /></section>;

export const DefaultCardWithData = Template.bind({});
DefaultCardWithData.args = {
  data: ARTICLE_DATA
};

export const DefaultCardDataWithHighResolutionCover = Template.bind({});
DefaultCardDataWithHighResolutionCover.args = {
  data: ARTICLE_DATA,
  isRenderHighResolutionImage: true
};

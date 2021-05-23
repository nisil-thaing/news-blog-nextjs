import React from 'react';

import LazyImage from './LazyImage';

export default {
  component: LazyImage,
  title: 'LazyImage'
};

const Template = args => <div style={{ width: '500px' }}><LazyImage {...args} /></div>;

export const DefaultWithoutImage = Template.bind({});
DefaultWithoutImage.args = {
  src: '',
  ratio: 16 / 9
};

export const DefaultSquareImage = Template.bind({});
DefaultSquareImage.args = {
  src: 'https://i.pinimg.com/736x/94/26/33/9426330b9cc93cfab0c060046f24ae47--choices-quotes-badass-quotes.jpg',
  ratio: 1
};

export const DefaultRoundedImage = Template.bind({});
DefaultRoundedImage.args = {
  src: 'https://i.pinimg.com/736x/94/26/33/9426330b9cc93cfab0c060046f24ae47--choices-quotes-badass-quotes.jpg',
  ratio: 1,
  isRounded: true
};

export const ArticleItemImage = Template.bind({});
ArticleItemImage.args = {
  src: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/42872933_1871916762904621_8392319564708315136_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=WRdbHTLltPkAX-Vp8_V&_nc_ht=scontent-hkg4-1.xx&oh=f24bbe6504b76455f96e311b895c4a1e&oe=60C86BA1',
  ratio: 16 / 9
};

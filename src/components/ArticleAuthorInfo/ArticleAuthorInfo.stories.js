import React from 'react';

import ArticleAuthorInfo from './ArticleAuthorInfo';

export default {
  component: ArticleAuthorInfo,
  title: 'ArticleAuthorInfo'
};

const Template = args => <ArticleAuthorInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    id: 'this_is_a_sample_id',
    avatarUrl: 'https://alyadarinariestyadi46.files.wordpress.com/2015/02/motohira-hata-stand-by-me.jpg',
    slug: 'this-is-a-sample-slug',
    displayName: 'Motohiro Hata'
  },
  updatedAt: (new Date()).toUTCString(),
  timeToReadInMinutes: 10
};

export const WithoutUpdatedAtInfo = Template.bind({});
WithoutUpdatedAtInfo.args = {
  data: {
    id: 'this_is_a_sample_id',
    avatarUrl: 'https://alyadarinariestyadi46.files.wordpress.com/2015/02/motohira-hata-stand-by-me.jpg',
    slug: 'this-is-a-sample-slug',
    displayName: 'Motohiro Hata'
  },
  timeToReadInMinutes: 10
};

export const WithoutTimeToReadInfo = Template.bind({});
WithoutTimeToReadInfo.args = {
  data: {
    id: 'this_is_a_sample_id',
    avatarUrl: 'https://alyadarinariestyadi46.files.wordpress.com/2015/02/motohira-hata-stand-by-me.jpg',
    slug: 'this-is-a-sample-slug',
    displayName: 'Motohiro Hata'
  },
  updatedAt: (new Date()).toUTCString()
};

export const OnlyFulfilledAuthorInfo = Template.bind({});
OnlyFulfilledAuthorInfo.args = {
  data: {
    id: 'this_is_a_sample_id',
    avatarUrl: 'https://alyadarinariestyadi46.files.wordpress.com/2015/02/motohira-hata-stand-by-me.jpg',
    slug: 'this-is-a-sample-slug',
    displayName: 'Motohiro Hata'
  }
};

export const MissingAuthorAvatar = Template.bind({});
MissingAuthorAvatar.args = {
  data: {
    id: 'this_is_a_sample_id',
    avatarUrl: '',
    slug: 'this-is-a-sample-slug',
    displayName: 'Motohiro Hata'
  },
  updatedAt: (new Date()).toUTCString(),
  timeToReadInMinutes: 10
};

export const MissingAuthorName = Template.bind({});
MissingAuthorName.args = {
  data: {
    id: 'this_is_a_sample_id',
    avatarUrl: 'https://alyadarinariestyadi46.files.wordpress.com/2015/02/motohira-hata-stand-by-me.jpg',
    slug: 'this-is-a-sample-slug',
    displayName: ''
  },
  updatedAt: (new Date()).toUTCString(),
  timeToReadInMinutes: 10
};

import React from 'react';

import MainLayout from './MainLayout';

export default {
  component: MainLayout,
  title: 'MainLayout'
};

const Template = args => <div style={{ width: '1000px' }}><MainLayout {...args} /></div>;

export const DefaultWithOnlyBody = Template.bind({});
DefaultWithOnlyBody.args = {
  children: <>This is Page body</>
};

export const MainLayoutWithHeader = Template.bind({});
MainLayoutWithHeader.args = {
  // eslint-disable-next-line react/display-name
  header: () => <header>This is Page header</header>,
  children: <section>This is Page body</section>
};

export const MainLayoutWithFooter = Template.bind({});
MainLayoutWithFooter.args = {
  children: <section>This is Page body</section>,
  // eslint-disable-next-line react/display-name
  footer: () => <footer>This is Page footer</footer>
};

export const MainLayoutWithHeaderAndFooter = Template.bind({});
MainLayoutWithHeaderAndFooter.args = {
  // eslint-disable-next-line react/display-name
  header: () => <header>This is Page header</header>,
  children: <section>This is Page body</section>,
  // eslint-disable-next-line react/display-name
  footer: () => <footer>This is Page footer</footer>
};

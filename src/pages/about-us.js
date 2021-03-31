import React from 'react';

import MainLayout from 'containers/MainLayout/MainLayout';
import MainHeader from 'components/MainHeader/MainHeader';
import MainFooter from 'components/MainFooter/MainFooter';

function AboutUsPage () {
  return <div>
    <MainLayout header={ MainHeader } footer={ MainFooter }>
      This is AboutUsPage
    </MainLayout>
  </div>;
}

export default AboutUsPage;
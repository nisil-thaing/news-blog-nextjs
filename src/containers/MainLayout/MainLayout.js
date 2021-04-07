import React from 'react';
import { func, node, oneOfType, string } from 'prop-types';

import withAuthenticationPopup from 'hocs/withAuthenticationPopup';

function MainLayout ({ children, ...restProps }) {
  return <>
    { restProps.header ? <restProps.header /> : null }
    { children }
    { restProps.footer ? <restProps.footer /> : null }
  </>;
}

MainLayout.propTypes = {
  header: oneOfType([ func, string ]),
  children: node.isRequired,
  footer: oneOfType([ func, string ])
};

export default withAuthenticationPopup(MainLayout);
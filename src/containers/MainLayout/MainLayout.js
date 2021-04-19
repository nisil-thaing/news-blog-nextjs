import React from 'react';
import { func, node, oneOfType, string } from 'prop-types';

import { Container } from './MainLayout.style';
import withAuthenticationPopup from 'hocs/withAuthenticationPopup';

function MainLayout ({ children, ...restProps }) {
  return <Container className="d-flex flex-column justify-content-center align-items-center">
    { restProps.header ? <restProps.header /> : null }
    { children }
    { restProps.footer ? <restProps.footer /> : null }
  </Container>;
}

MainLayout.propTypes = {
  header: oneOfType([ func, string ]),
  children: node.isRequired,
  footer: oneOfType([ func, string ])
};

export default withAuthenticationPopup(MainLayout);
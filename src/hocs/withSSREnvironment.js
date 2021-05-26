import React, { useEffect, useState } from 'react';

function withSSREnvironment (WrapperComponent) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    const [ isClientSide, updateWhetherClientSide ] = useState(false);

    useEffect(function () {
      updateWhetherClientSide(true);
      
      return null;
    }, []);

    return <WrapperComponent { ...props } isClientSide={ isClientSide } />;
  };
}

export default withSSREnvironment;

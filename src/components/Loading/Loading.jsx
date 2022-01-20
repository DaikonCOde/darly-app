import React from 'react';

import { ContentLoader } from './LoadingStyles';

const Loading = () => {
  return (
    <ContentLoader>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </ContentLoader>
  )
};

export default Loading;

import React from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'dva';

function IndexPage() {
  return (
    <DocumentTitle title='Hello'>
    <div>
      <h1>Hello world! Welcome to kqd!</h1>
    </div>
    </DocumentTitle>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

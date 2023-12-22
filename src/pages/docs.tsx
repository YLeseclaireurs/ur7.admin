import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';


const DocsPage = () => {

  return (
      <>
          <Editor
              previewStyle="vertical"
              height="400px"
              initialEditType="markdown"
              initialValue="hello"

          />
      </>
  );
};

export default DocsPage;

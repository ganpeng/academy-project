import React, { Component, PropTypes } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { Button } from 'antd';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



class MyEditor extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      editorContent: EditorState.createEmpty()
    }

    this.handleSave = this.handleSave.bind(this);
  }

  onEditorStateChange(editorContent) {
    this.setState({editorContent});
  }

  handleSave() {
    const { editorContent } = this.state;
    if (editorContent) {
      console.log(draftToHtml(convertToRaw(editorContent.getCurrentContent())));
    }
  }


  render() {
    const { editorContent } = this.state;
    return (
      <div className="my-editor">
        <Editor
          toolbarClassName="home-toolbar"
          wrapperClassName="home-wrapper"
          wrapperStyle={{height:'300px'}}
          editorClassName="home-editor"
          placeholder="hello"
          hashtag={{}}
          editorState={editorContent}
          onEditorStateChange={this.onEditorStateChange.bind(this)}
        />
        <Button type="primary" style={{marginTop: '100px'}} onClick={this.handleSave}>保存</Button>
      </div>
    );
  }
}

export default MyEditor;

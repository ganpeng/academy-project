import React, { Component, PropTypes } from 'react';
import { convertToRaw, EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Button, message } from 'antd';
import { connect } from 'react-redux';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


import { createConstitutionRequest } from '../../../actions/constitution';

class MyCreateEditor extends Component {
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
      const htmlStr = draftToHtml(convertToRaw(editorContent.getCurrentContent()));
      this.props.createConstitutionRequest({content: htmlStr})
        .then((data) => {
          if (data.success === 'ok') {
            message.success('创建成功');
          }
        })
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


function mapStatesToProps(state) {
  return {
    constitution: state.constitution
  }
}




export default connect(mapStatesToProps, {createConstitutionRequest})(MyCreateEditor);

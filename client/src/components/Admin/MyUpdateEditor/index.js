import React, { Component, PropTypes } from 'react';
import { convertToRaw, EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Button, message } from 'antd';
import { connect } from 'react-redux';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


import { getConstitution, updateConstitutionRequest } from '../../../actions/constitution';

class MyUpdateEditor extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      editorContent: EditorState.createEmpty()
    }

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.props.getConstitution();
  }

  onEditorStateChange(editorContent) {
    this.setState({editorContent});
  }


  handleUpdate() {
    const { editorContent } = this.state;
    const { _id } = this.props.constitution;
    if (editorContent) {
      const htmlStr = draftToHtml(convertToRaw(editorContent.getCurrentContent()));
      this.props.updateConstitutionRequest(_id, {content: htmlStr})
        .then((data) => {
          if (data.success === 'ok') {
            message.success('修改成功');
          }
        })
    }
  }


  componentWillReceiveProps(nextProps) {
    const { constitution } = nextProps;
    if (constitution) {
      const { content } = constitution;
      const blocksFromHtml = htmlToDraft(content);
      const contentBlocks = blocksFromHtml.contentBlocks;
      const contentState = ContentState.createFromBlockArray(contentBlocks);
      const editorState = EditorState.createWithContent(contentState);

      this.setState({
        editorContent: editorState
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
        <Button type="primary" style={{marginTop: '100px'}} onClick={this.handleUpdate}>修改</Button>
      </div>
    );
  }
}


function mapStatesToProps(state) {
  return {
    constitution: state.constitution
  }
}




export default connect(mapStatesToProps, {getConstitution, updateConstitutionRequest})(MyUpdateEditor);

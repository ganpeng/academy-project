
import { Editor, EditorState } from 'draft-js';

import React, { Component, PropTypes } from 'react';

class MyEditor extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState) {
    this.setState({editorState});
  }



  render() {
    const { editorState } = this.state;
    return (
      <div className="admin-editor">
        <Editor editorState={editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export default MyEditor;

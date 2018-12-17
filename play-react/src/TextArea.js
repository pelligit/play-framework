import React, { Component } from 'react';

class TextArea extends Component {
  constructor(){
    super();

    this.state = {
      textarea_content: '文本域内容',
      textarea_change_count: 0
    };

    this.textAreaChange = this.textAreaChange.bind(this);
  }

  render() {
    return (
      <div className="App">
          <p>文本域表单</p>
          <div style={{whiteSpace: 'pre-line'}}>文本域内容: { this.state.textarea_content }</div>
          <textarea value={this.state.textarea_content} onChange={this.textAreaChange} placeholder="这里是文本域"></textarea>
          <div>文本域数据变化次数：{ this.state.textarea_change_count }</div>
      </div>
    );
  }

  textAreaChange(e){
    this.setState({
      textarea_content: e.target.value,
      textarea_change_count: this.state.textarea_change_count + 1
    });
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillUpdate(){
    console.log('componentWillUpdate');
  }

  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentBeforeUnmount');
  }
}

export default TextArea;

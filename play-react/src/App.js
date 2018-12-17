import React, { Component } from 'react';
import logo from './logo.svg';
import ajax from './ajax';
import './App.css';

import Another from './Another';

import map from './assets/map.png';

import list_data from './list-data';

import TextArea from './TextArea';

class App extends Component {
  constructor(){
    super();

    this.state = {
      click_msg: '没有被点击',
      click_count: 0,
      is_show: true,
      input_content: '表单数据',
      input_click_count: 0,
      textarea_content: '文本域内容',
      textarea_change_count: 0,
      ajax_data: '这是ajax初始的数据'
    };

    this.clickBtn = this.clickBtn.bind(this);
    this.showOrHide = this.showOrHide.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.textAreaChange = this.textAreaChange.bind(this);

    console.log('constructor');
  }

  render() {
    console.log('render');
    const message = 'Hello World!';

    const show_or_hide = this.state.is_show ? (
              <div className="show-or-hide" v-if="is_show">
                显示或者隐藏的元素
              </div>
            ) : null;

    return (
      <div className="App">
        <div>第一句话：{ message }</div>
        <hr />
        <div>
          <img src={map} />
        </div>
        <hr />
        <button onClick={this.clickBtn}>点击一下</button>
        <p>{ this.state.click_msg }</p><span>点击次数：{ this.state.click_count }</span>
        <hr />
        <ul>
          {
            list_data.map((item, index) => {
              return (<li key={index}><span>姓名：{item.name}</span><span>年龄：{item.age}</span></li>)
            })
          }
        </ul>
        <hr />
        <div>
          <button onClick={this.showOrHide}>显示或者隐藏</button>

          {
            show_or_hide
          }
        </div>
        <hr />
        <div>
          <p>表单</p>
          <div>输入内容：{ this.state.input_content }</div>
          <input onChange={ this.inputChange } value={ this.state.input_content } type="text" />
          <div>数据变化了{this.state.input_click_count}次</div>

          <hr />
          <TextArea />
        </div>
        <hr />
        <div>
          { this.state.ajax_data }
        </div>

        <hr />
        
        <div>
          <Another content="这是另一个组件的内容" />
        </div>
      </div>
    );
  }

  clickBtn(){
    this.setState({
      click_msg: '被点击了',
      click_count: this.state.click_count + 1
    });
  }

  showOrHide(){
    this.setState({
      is_show: !this.state.is_show
    });
  }

  inputChange(e){
    this.setState({
      input_content: e.target.value,
      input_click_count: this.state.input_click_count + 1
    });
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
    const $this = this;

    ajax.get('http://127.0.0.1:8989/user').then((response) => {
      const data = response.data;

      $this.setState({
        ajax_data: JSON.stringify(data)
      });
    }).catch((error) => {
      console.log(error);
    });
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

console.log(new App());

export default App;

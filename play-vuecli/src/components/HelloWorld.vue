<template>
  <div id="app">
    <div>来自使用vue-cli初始化时的props：{{ msg }}</div>
    <hr />
		<div>第一句话：{{ message }}</div>

		<hr />

		<div>
			<img src="../assets/map.png" />
		</div>

		<hr />

		<div>
			<button v-on:click="clickBtn">点击一下</button>
			<p>{{ click_msg }}</p><span>点击次数：{{ click_count }}</span>
		</div>
		<hr />

		<ul>
			<li v-for="(item, index) of list_data" v-bind:key="index">
				<span>姓名：{{item.name}}</span><span>年龄：{{item.age}}</span>
			</li>
		</ul>

		<hr />

		<div>
			<button @click="showOrHide">显示或者隐藏</button>

			<div class="show-or-hide" v-if="is_show">
				显示或者隐藏的元素
			</div>
		</div>
		
		<hr />
		
		<div>
			<p>表单</p>
			<div>输入内容：{{ input_content }}</div>
			<input v-model="input_content" @input="inputChange" type="text" >
			<div>数据变化了{{input_click_count}}次</div>
			<hr>
			<p>文本域表单</p>
			<div style="white-space: pre-line;">文本域内容: {{ textarea_content }}</div>
			<textarea v-model="textarea_content" @input="textAreaChange" placeholder="这里是文本域"></textarea>
			<div>文本域数据变化次数：{{ textarea_change_count }}</div>
        </div>
		<hr />
        <div>
        	{{ ajax_data }}
		</div>
		<hr />
		<AppAnother content="这是另一个组件的内容"></AppAnother>
	</div>
</template>

<script>
import list_data from './list-data';
import AppAnother from './AppAnother';

import ajax from '../ajax';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    'AppAnother': AppAnother
  },
  data: function(){
    return {
      message: 'Hello World!',
      click_msg: '没有被点击',
      click_count: 0,
      list_data: list_data,
      is_show: true,
      input_content: '表单数据',
      input_click_count: 0,
      textarea_content: '文本域内容',
      textarea_change_count: 0,
      ajax_data: '这是ajax初始的数据'
    }
  },
  methods: {
		clickBtn: function(){
			this.click_msg = '点击了之后';
			this.click_count++;
		},
		showOrHide: function(){
			this.is_show = !this.is_show;
		},
		inputChange: function(evt){
			this.input_click_count++;
		},
		textAreaChange: function(){
			this.textarea_change_count++;
		}
  },
  
  computed: {
		// 计算属性的this指向实例
		reverseMsg: function(){
			console.log(this);
			return this.message.split('').reverse().join('');
		},
		username: function(){
			return this.$route.params.username;
		}
	},
	watch: {
		// 侦听属性
		fullName: function(){
			return this.firstName + ' ' + this.lastName;
		},
	},
	beforeCreate: function(a, b, c){
		console.log('----------');
		console.log(a, b, c);
		console.log(this);
		console.log('在创建之前');
		console.log('---------------');
	},
	created: function(a, b, c){
		console.log('----------');
		console.log(a, b, c);
		console.log(this);
		console.log('组件刚创建, intro的值是：' + this.intro);
		console.log('---------------');
	},
	beforeMount: function(a, b, c){
		console.log('----------');
		console.log(a, b, c);
		console.log(this);
		console.log('在挂载之前');
		console.log('---------------');
	},
	mounted: function(a, b, c){
		console.log('----------');
		console.log(a, b, c);
		console.log(this);
		console.log('组件挂载了');
		console.log('---------------');

		ajax.get('http://127.0.0.1:8989/user').then((res) => {
			const data = res.data;

			this.ajax_data = JSON.stringify(data);
		}).catch((err) => {
			console.log(err);
		});
	},
	beforeUpdate: function(a, b, c){
		console.log('----------');
		console.log(a, b, c);
		console.log(this);
		console.log('在更新之前');
		console.log('---------------');
	},
	updated: function(a, b, c){
		console.log('----------');
		console.log(a, b, c);
		console.log(this);
		console.log('组件更新了');
		console.log('---------------');
	},
	beforeDestroy: function(a, b, c){
		console.log('----------');
		console.log(a, b, c);
		console.log(this);
		console.log('在销毁之前');
		console.log('---------------');
	},
	destroyed: function(a, b, c){
		console.log('----------');
		console.log(a, b, c);
		console.log(this);
		console.log('组件卸载了');
		console.log('---------------');
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show-or-hide{
	width: 100px;
	height: 100px;
	text-align: center;
	box-shadow: 0 0 15px #ccc;
	margin: 20px;
}
</style>

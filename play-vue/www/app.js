// ========================
Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
});

// Vue.component('text-area', {
// 	template: `
// 		<p>文本域表单</p>
// 		<div style="white-space: pre-line;">文本域内容: {{ textarea_content }}</div>
// 		<textarea v-model="textarea_content" @input="textAreaChange" placeholder="这里是文本域"></textarea>
// 		<div>文本域数据变化次数：{{ textarea_change_count }}</div>
// 	`,
	
// });

Vue.component('app-another', {
	template: `<div>{{ content }}</div>`,
	props: ['content']
});

var app = new Vue({
	el: '#app',
	data: {
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

		axios.get('http://127.0.0.1:8989/user').then((res) => {
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
});

setTimeout(function(){
	app.intro = '更新这个属性值'
}, 2000);

// 卸载组件
// setTimeout(function(){
// 	app.$destroy();
// }, 4000);

// 计算属性和方法有什么区别？
// 计算属性是可以缓存的，
// 方法只要每次视图渲染，则都会执行
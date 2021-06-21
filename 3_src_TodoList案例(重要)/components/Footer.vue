<template>
	<div class="todo-footer">
		<label>
			<input type="checkbox" v-model="isAll"/>
		</label>
		<span>
			<span>已完成{{doneCount}}</span> / 全部{{total}}
		</span>
		<button class="btn btn-danger" @click="clearAllD">清除已完成任务</button>
	</div>
</template>

<script>
	export default {
		name:'Footer',
		props:['todos','updateAll','clearAllDone'],
		methods:{
			updateA(e){
                //
				this.updateAll(e.target.checked)
			},
			//清除已完成任务
			clearAllD(){
				this.clearAllDone()
			}
		},
		computed:{
            //已勾选任务的计数
			doneCount(){
		//todo reduce() 方法对数组中的每个元素执行一个由您提供
		// 的reducer函数(升序执行)，将其结果汇总为单个返回值。
		//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
				/*reduce4个参数
				Accumulator (acc) (累计器)
				Current Value (cur) (当前值)
				Current Index (idx) (当前索引)
				Source Array (src) (源数组)
				您的 reducer 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，
				并最后成为最终的单个结果值。
语法arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
*/
				//todo 这里注意箭头函数省略大括号有自动return功能 不省略大括号得加return
				return this.todos.reduce((pre,current)=> pre + (current.done ? 1 : 0),0)
			},
			//todo 没有set只有get的简写方式
			total(){
				return this.todos.length
			},

			isAll:{
				get(){
				    //全部勾选时，全选框也要为true
					return this.doneCount === this.total && this.total > 0
				},
				set(value){
					this.updateAll(value)
				}
			}
		}
	}
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>
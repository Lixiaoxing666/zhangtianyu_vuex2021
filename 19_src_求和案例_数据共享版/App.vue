<template>
	<div>
		<Count/>
		<br/>
		<br/>
		<School/>
		<br/>
		<br/>
		<Person/>
	</div>
</template>

<script>
	import Count from './components/Count'
	import School from './components/School'
	import Person from './components/Person'

	export default {
		name:'App',
		components:{Count,School,Person},
	}
</script>

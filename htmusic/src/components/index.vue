<template>
	<div>
		<Head></Head>
		<RotationChart></RotationChart>
		<div>
			<HomeContent></HomeContent>
			<Sidebar></Sidebar>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
import Head from "../page/head.vue"
import Foot from "../page/foot.vue"
import HomeContent from "../page/homeContent.vue"
import RotationChart from "../page/rotationChart.vue"
import Sidebar from "../page/sidebar.vue"
export default{
	components:{Head,Foot,HomeContent,RotationChart,Sidebar}
}
</script>

<style>
</style>
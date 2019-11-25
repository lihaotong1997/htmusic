<template>
	<div>
		<Head></Head>
		<RotationChart></RotationChart>
		<div class="layout">
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

<style scoped>
	.layout{
		width: 980px;
	    margin: 0 auto;
	    background-color: #fff;
	    border: 1px solid #d3d3d3;
	    overflow: hidden;
	}
</style>
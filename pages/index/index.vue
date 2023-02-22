<template>
	<view class="content">
		<view class="text-area">
			<text class="text">去吃{{item}}</text>
		</view>
		<view class="operator">
			<button class="btn" style="color: #222222;" @click="start">{{choosing?'换一个':'随机选一样'}}</button>
		</view>
	</view>
</template>

<script>
	import indexVue from './index.vue';
	export default {
		data() {
			return {
				item: '啥',
				list: ['白粥', '烧烤', '火锅', '猪脚饭', '沙拉', '肯德基', '麦当劳', '出门看到的第一家店', '饭堂', '肠粉', '披萨', '寿司', '鸡煲', '饺子',
					'兰州拉面', '白面馒头', '泡面'
				],
				choosing: false
			}
		},
		methods: {
			start() {
				this.choosing = true
				const total = this.list.length; //数据长度
				const randomIndex = Math.floor(Math.random() * (total - 0))
				this.item = this.list[randomIndex]
				console.log(randomIndex)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 16px;
	}

	.text-area {
		display: flex;
		justify-content: center;
		height: 72vh;
		font-size: 72rpx;
		font-weight: 600;
		color: #222222;
	}

	.text {
		margin-top: 24vh;
	}

	.operator {}

	.btn {
		background: #ffd103;
		font-size: 48rpx;
		border-radius: 25cm 25cm 25cm 25cm;
		width: 600rpx;
	}
</style>

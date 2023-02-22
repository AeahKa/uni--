<template>
	<view class="content">
		<view class="text-area">
			<text class="main">今天吃{{item}}</text>
		</view>
		<view class="operator">
			<button>开始</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item: '啥'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

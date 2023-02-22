<template>
	<view class="content">
		<view class="text-area">
			<text class="main">今天吃{{item}}</text>
		</view>
		<view class="operator">
			<button class="btn" style="color: #222222;">{{buttonText}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item: '啥',
				buttonText: "随机选一样"
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

	.text-area {
		display: flex;
		justify-content: center;
		border: red 1px solid;
		margin-top: 20vh;
		font-size: 72rpx;
		font-weight: 600;
	}

	.operator {
		border: red 1px solid;
		margin-top: 30vh;
	}

	.btn {
		background: #ffd103;
		font-size: 48rpx;
		color: #8f8f94;
		border-radius: 25cm 25cm 25cm 25cm;
		width: 600rpx;
	}
</style>

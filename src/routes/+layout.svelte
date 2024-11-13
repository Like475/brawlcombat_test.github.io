<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import coin from '$lib/imgs/coin.png';
	import missions from '$lib/imgs/missions.png';
	import shop from '$lib/imgs/shop.png';
	import friends from '$lib/imgs/friends.png';
	import boosts from '$lib/imgs/boosts.png';

	let { children } = $props();
	let scale = $state(1);

	onMount(() => {
		scale = window.innerWidth / 428;
	});
</script>

<svelte:head>
	<script src="https://telegram.org/js/telegram-web-app.js"></script>
</svelte:head>

<div
	class="no-scrollbar relative h-[926px] w-[428px] overflow-x-hidden bg-[#1c1f24]"
	style="transform-origin: top left; transform: scale({scale});"
>
	<div
		class="absolute left-0 top-0 h-[245px] w-[428px] bg-gradient-to-b from-black to-[#ffbd20]"
	></div>
	<div
		class="absolute left-[18px] top-[145px] h-[703.61px] w-[392px] rounded-[50px] bg-[#ffbd20]"
	></div>
	<div
		class="absolute left-0 top-[150px] h-[776px] w-[428px] rounded-tl-[45px] rounded-tr-[45px] bg-black"
	></div>
	<div class="absolute left-[30px] top-[822px] h-[76px] w-[368px]">
		<div class="absolute top-[9px] h-[67px] w-[368px] rounded-[15px] bg-[#111111]"></div>
		<a href="/">
			<div class="absolute left-[160px] top-0 h-[65px] w-12">
				<img
					class="absolute left-0 top-0 h-12 w-12 rounded-[256px] object-cover"
					alt="coin menu button"
					src={coin}
				/>
				<div
					class="absolute left-[2px] top-[56px] font-['Roboto'] text-[9px] font-medium leading-[9px] text-white"
				>
					Добывать
				</div>
			</div>
		</a>
		<a href="missions">
			<div class="absolute left-[233px] top-[19px] h-[46px] w-[37px]">
				<div
					class="absolute left-0 top-[37px] font-['Roboto'] text-[9px] font-medium leading-[9px] text-white"
				>
					Задания
				</div>
				<img
					class="absolute left-[1px] top-0 h-[34px] w-[34px] object-cover"
					alt="missions"
					src={missions}
				/>
			</div>
		</a>
		<a href="/boosts">
			<div class="absolute left-[30px] top-[19px] h-[46px] w-[34px]">
				<div
					class="absolute left-[4px] top-[37px] font-['Roboto'] text-[9px] font-medium leading-[9px] text-white"
				>
					Бусты
				</div>
				<img
					class="absolute left-0 top-0 h-[34px] w-[34px] object-cover"
					alt="boosts"
					src={boosts}
				/>
			</div>
		</a>
		<a href="/shop">
			<div class="absolute left-[302px] top-[19px] h-[46px] w-[37px]">
				<div
					class="absolute left-0 top-[37px] font-['Roboto'] text-[9px] font-medium leading-[9px] text-white"
				>
					Магазин
				</div>
				<img
					class="absolute left-[1px] top-0 h-[34px] w-[34px] object-cover"
					alt="shop"
					src={shop}
				/>
			</div>
		</a>
		<a href="/friends">
			<div class="absolute left-[99px] top-[19px] h-[46px] w-[34px]">
				<div
					class="absolute left-[2px] top-[37px] font-['Roboto'] text-[9px] font-medium leading-[9px] text-white"
				>
					Друзья
				</div>
				<img
					class="absolute left-0 top-0 h-[34px] w-[34px] object-cover"
					alt="friends"
					src={friends}
				/>
			</div>
		</a>
	</div>

	{@render children()}
</div>

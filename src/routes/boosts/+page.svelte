<script>
	import { onMount } from 'svelte';
	import { getMe } from '$lib/api/modules/users';
	import { getBoostsList, buyBoost } from '$lib/api/modules/boosts';
	import coin from '$lib/imgs/coin.png';

	let me = $state({
		balance: 0
	});
	let boosts = $state([]);

	const buy = (id) => {
		buyBoost(id).then((data) => {
			console.log(data);
			getBoostsList().then((data) => {
				boosts = data;
			});
		});
	};

	onMount(() => {
		getMe().then((data) => {
			me = data;
		});
		getBoostsList().then((data) => {
			boosts = data;
		});
	});
</script>

<div class="absolute left-[115px] top-[180px] inline-flex items-center justify-center gap-2">
	<img class="h-[42px] w-[42px] rounded-[256px] object-cover" alt="coin icon" src={coin} />
	<div class="font-['Roboto'] text-[40px] font-bold leading-[44px] text-[#fffefc]">
		{me.balance}
	</div>
</div>
<div
	class="no-scrollbar absolute left-[30px] top-[254px] h-[585px] w-[368px] overflow-x-hidden overflow-y-scroll"
>
	<div class="mb-[-10px]"></div>
	{#each boosts as boost}
		<div class="relative left-0 top-0 mt-[10px] h-[75px] w-[368px] rounded-[20px] bg-[#101010]">
			<div class="absolute left-[86px] top-[17px] h-[43px] w-[257px]">
				<div class="absolute left-0 top-0 font-['Roboto'] text-sm font-semibold text-white">
					{boost.name}
				</div>
				<div
					class="absolute left-0 top-[29px] font-['Roboto'] text-xs font-medium leading-3 text-[#ffbd20]"
				>
					Ур. {boost.level}
				</div>
				<div
					class="absolute left-[205px] top-[33px] text-right font-['Roboto'] text-[10px] font-medium leading-[10px] text-white"
				>
					{boost.reward} в час
				</div>
				<button
					class="absolute left-[201px] top-0 h-[22px] w-14"
					onclick={() => {
						buy(boost.id);
					}}
				>
					<div class="absolute left-0 top-0 h-[22px] w-14 rounded-md bg-[#ffbd20]"></div>
					<div class="absolute left-[8px] top-[5px] h-3 w-10">
						<img
							class="absolute left-0 top-0 h-3 w-3 rounded-[178.79px] object-cover"
							alt="coin icon"
							src={coin}
						/>
						<div
							class="absolute left-[14px] top-[1px] font-['Roboto'] text-[9.78px] font-semibold leading-[9.78px] text-black"
						>
							{boost.price}
						</div>
					</div>
				</button>
			</div>
			<img
				class="absolute left-[13px] top-[13px] h-[50px] w-[50px] object-contain"
				alt="colt"
				src={boost.image_url}
			/>
		</div>
	{/each}
</div>

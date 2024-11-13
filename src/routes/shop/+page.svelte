<script>
	import { getItemsList, buyItem } from '$lib/api/modules/shop';
	import { onMount } from 'svelte';
	import coin from '$lib/imgs/coin.png';

	let items = $state([]);

	const buy = (id) => {
		buyItem(id).then((data) => {
			console.log(data);
			getItemsList().then((data) => {
				items = data;
			});
		});
	};

	onMount(() => {
		getItemsList().then((data) => {
			items = data;
		});
	});
</script>

<div
	class="absolute left-[74px] top-[180px] text-center font-['Roboto'] text-3xl font-bold text-[#fffefc]"
>
	Обменяй Brawl Coin
</div>
<div class="absolute left-[154px] top-[225px] font-['Roboto'] text-sm font-medium text-[#fffefc]">
	На подарки в игру
</div>
<div class="absolute left-[30px] top-[271px] h-[75px] w-[368px]">
	{#each items as item}
		<div class="relative mt-[10px] h-[75px] w-[368px]">
			<div class="absolute left-0 top-0 h-[75px] w-[368px] rounded-[20px] bg-[#101010]"></div>
			<div class="absolute left-[99px] top-[12px] h-[51px] w-[74px]">
				<div class="absolute left-0 top-0 font-['Roboto'] text-sm font-semibold text-white">
					{item.name}
				</div>
				<div class="absolute left-0 top-[25px] h-[26px] w-[73px]">
					<div class="absolute left-0 top-0 h-[9px] w-[64px]">
						<div class="absolute left-0 top-0 h-[9px] w-[64px] rounded-full bg-[#232323]"></div>
						<div
							class="absolute left-0 top-0 h-[9px] rounded-full bg-[#ffbd20]"
							style="width: {Math.ceil((64 / item.total_quantity) * item.quantity)}px;"
						></div>
					</div>
					<div
						class="absolute left-0 top-[14px] w-[300px] font-['Roboto'] text-[10px] font-medium text-[#ffbd20]"
					>
						Осталось {item.quantity} / {item.total_quantity}
					</div>
				</div>
			</div>
			<button
				class="absolute left-[285px] top-[22px] h-[31px] w-[63px]"
				onclick={() => buy(item.id)}
			>
				<div class="absolute left-0 top-0 h-[31px] w-[63px] rounded-lg bg-[#ffbd20]"></div>
				<div class="absolute left-[11px] top-[7px] h-[17px] w-[41px]">
					<img
						class="absolute left-0 top-0 h-[17px] w-[17px] rounded-[256px] object-cover"
						alt="coin icon"
						src={coin}
					/>
					<div
						class="absolute left-[20px] top-[2px] font-['Roboto'] text-sm font-semibold leading-[14px] text-black"
					>
						{item.price}
					</div>
				</div>
			</button>
			<img
				class="absolute left-[12px] top-0 h-[75px] w-[75px] object-cover"
				alt="pass"
				src={item.image_url}
			/>
		</div>
	{/each}
</div>

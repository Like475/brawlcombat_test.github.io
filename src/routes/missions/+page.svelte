<script>
	import { getMissionsList, checkMission } from '$lib/api/modules/missions';
	import { onMount } from 'svelte';
	import tg from '$lib/imgs/tg.png';
	import coin from '$lib/imgs/coin.png';
	import arrow from '$lib/imgs/arrow.svg';

	let missions = $state([]);
	let popupMission = $state({});
	let showPopup = $state(false);

	onMount(() => {
		getMissionsList().then((data) => {
			missions = data;
		});
	});

	const popup = (mission) => {
		popupMission = mission;
		console.log(popupMission);
		showPopup = true;
	};

	const check = () => {
		checkMission(popupMission.id).then((data) => {
			if (data) {
				showPopup = false;
				getMissionsList().then((data) => {
					missions = data;
				});
			}
		});
	};
</script>

<div
	class="absolute
    left-[61px] top-[180px] text-center font-['Roboto'] text-3xl font-bold text-[#fffefc]"
>
	Зарабатывай больше<br />Brawl Coin
</div>
<div
	class="absolute left-[30px] top-[280px] font-['Roboto'] text-sm font-semibold leading-[14px] text-white"
>
	Ежедневные заданий
</div>
<div
	class="no-scrollbar absolute left-[30px] top-[309px] h-[245px] w-[368px] overflow-x-hidden overflow-y-scroll"
>
	<div class="mt-[-10px]"></div>
	{#each missions as mission}
		{#if !mission.completed && mission.is_daily}
			<button
				class="relative mt-[10px] h-[75px] w-[368px] rounded-[20px] bg-[#101010]"
				onclick={() => popup(mission)}
			>
				<div class="absolute left-[20px] top-[15px] h-[45px] w-[297px]">
					<div
						class="absolute left-[55px] top-[2px] w-[250px] text-left font-['Roboto'] text-xs font-medium text-white"
					>
						{mission.description}
					</div>
					<img
						class="absolute left-[55px] top-[21px] h-[22px] w-[22px] rounded-[256px] object-cover"
						alt="coin icon"
						src={coin}
					/>
					<div
						class="absolute left-[82px] top-[25px] font-['Roboto'] text-sm font-semibold leading-[14px] text-[#ffbd20]"
					>
						+{mission.reward}
					</div>
					<img class="absolute left-0 top-0 h-[45px] w-[45px] object-cover" alt="tg" src={tg} />
					<img class="absolute right-[-30px] top-[17px]" src={arrow} alt="arrow" />
				</div>
			</button>
		{/if}
	{/each}
</div>
<div
	class="absolute left-[30px] top-[584px] font-['Roboto'] text-sm font-semibold leading-[14px] text-white"
>
	Список заданий
</div>
<div
	class="no-scrollbar absolute left-[30px] top-[613px] h-[160px] w-[368px] overflow-x-hidden overflow-y-scroll"
>
	<div class="mt-[-10px]"></div>
	{#each missions as mission}
		{#if !mission.completed && !mission.is_daily}
			<button
				class="relative mt-[10px] h-[75px] w-[368px] rounded-[20px] bg-[#101010]"
				onclick={() => popup(mission)}
			>
				<div class="absolute left-[20px] top-[15px] h-[45px] w-[297px]">
					<div
						class="absolute left-[55px] top-[2px] w-[250px] text-left font-['Roboto'] text-xs font-medium text-white"
					>
						{mission.description}
					</div>
					<img
						class="absolute left-[55px] top-[21px] h-[22px] w-[22px] rounded-[256px] object-cover"
						alt="coin icon"
						src={coin}
					/>
					<div
						class="absolute left-[82px] top-[25px] font-['Roboto'] text-sm font-semibold leading-[14px] text-[#ffbd20]"
					>
						+{mission.reward}
					</div>
					<img class="absolute left-0 top-0 h-[45px] w-[45px] object-cover" alt="tg" src={tg} />
					<img class="absolute right-[-30px] top-[17px]" src={arrow} alt="arrow" />
				</div>
			</button>
		{/if}
	{/each}
</div>

{#if showPopup}
	<div class="absolute left-0 top-0 h-[926px] w-[428px] bg-black opacity-50"></div>
	<div class="absolute left-[30px] top-[612px] h-[286px] w-[368px]">
		<div class="absolute left-0 top-0 h-[286px] w-[368px] rounded-[20px] bg-[#101010]"></div>
		<button
			class="absolute left-[51px] top-[166px] h-10 w-[266px]"
			onclick={() => {
				window.Telegram.WebApp.openTelegramLink(popupMission.task_link);
			}}
		>
			<div class="absolute left-0 top-0 h-10 w-[266px] rounded-[20px] bg-[#ffbd20]"></div>
			<div
				class="absolute left-[89px] top-[12px] text-center font-['Roboto'] text-sm font-medium text-black"
			>
				Подписаться
			</div>
		</button>
		<button class="absolute left-[51px] top-[216px] h-10 w-[266px]" onclick={check}>
			<div class="absolute left-0 top-0 h-10 w-[266px] rounded-[20px] bg-[#222222]"></div>
			<div
				class="absolute left-[97px] top-[12px] text-center font-['Roboto'] text-sm font-medium text-white opacity-20"
			>
				Проверить
			</div>
		</button>
		<div class="absolute left-[162px] top-[124px] h-[22px] w-[43px]">
			<img
				class="absolute left-0 top-0 h-[22px] w-[22px] rounded-[256px] object-cover"
				alt="coin icon"
				src={coin}
			/>
			<div
				class="absolute left-[27px] top-[4px] font-['Roboto'] text-sm font-semibold leading-[14px] text-[#ffbd20]"
			>
				+{popupMission.reward}
			</div>
		</div>
		<img
			class="absolute left-[161px] top-[30px] h-[45px] w-[45px] object-cover"
			alt="tg"
			src={tg}
		/>
		<div
			class="absolute left-[60px] right-[60px] top-[85px] text-center font-['Roboto'] text-[25px] font-bold text-white"
		>
			{popupMission.title}
		</div>
	</div>
{/if}

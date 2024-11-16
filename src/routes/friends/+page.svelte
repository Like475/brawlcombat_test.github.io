<script>
	import { onMount } from 'svelte';
	import { getMe, getInvited, getUser } from '$lib/api/modules/users';
	import yellowGift from '$lib/imgs/yellow_gift.png';
	import purpleGift from '$lib/imgs/purple_gift.png';
	import coin from '$lib/imgs/coin.png';
	import refresh from '$lib/imgs/refresh.png';
	import invite from '$lib/imgs/invite.png';
	import copy from '$lib/imgs/copy.png';

	let inviteLink = $state('');
	let sendLink = $derived(
		`https://t.me/share/url?url=${inviteLink}&text=Привет!+Не+хочешь+по+тапать+со+мной?`
	);
	let invitedFirstName = $state('');
	let invited = $state([]);

	const copyLink = async () => {
		await navigator.clipboard.writeText(inviteLink);
	};

	const refresh_invited = () => {
		getInvited().then((data) => {
			invited = data;
			console.log(invited);
		});
	};

	onMount(() => {
		getMe().then((data) => {
			inviteLink = `https://t.me/brawlcombat_test_bot?startapp=friend_${data.id}`;
			sendLink;
			getUser(data.invited).then((data) => {
				invitedFirstName = data.first_name;
			});
		});
		refresh_invited();
	});
</script>

<div class="absolute left-[75px] top-[180px]">
	<div class="absolute left-0 top-0 w-[279px] font-['Roboto'] text-3xl font-bold text-[#fffefc]">
		Пригласите друзей!
	</div>
	<div
		class="absolute left-[32px] top-[45px] w-[279px] font-['Roboto'] text-sm font-medium text-[#fffefc]"
	>
		Вы и ваш друг получите бонусы!
	</div>
</div>
<div class="absolute left-[30px] top-[271px] h-[218px]">
	<div class="absolute left-0 top-0 h-[75px] w-[368px]">
		<div class="absolute left-0 top-0 h-[75px] w-[368px] rounded-[20px] bg-[#101010]"></div>
		<div class="absolute left-[20px] top-[13px] h-[49px] w-[236px]">
			<div class="absolute left-[64px] top-[4px] font-['Roboto'] text-xs font-medium text-white">
				Пригласить друга
			</div>
			<img
				class="absolute left-[64px] top-[23px] h-[22px] w-[22px] rounded-[256px] object-cover"
				alt="coin icon"
				src={coin}
			/>
			<div
				class="absolute left-[91px] top-[27px] font-['Roboto'] text-sm font-semibold leading-[14px] text-[#ffbd20]"
			>
				+0.1
			</div>
			<div
				class="absolute left-[124px] top-[31px] font-['Roboto'] text-[10px] font-normal leading-[10px] text-white"
			>
				Для вас и вашего друга
			</div>
			<img
				class="absolute left-0 top-0 h-[49px] w-[49px] object-cover"
				alt="gift"
				src={yellowGift}
			/>
		</div>
	</div>
	<div class="absolute left-0 top-[85px] h-[75px] w-[368px]">
		<div class="absolute left-0 top-0 h-[75px] w-[368px] rounded-[20px] bg-[#101010]"></div>
		<div class="absolute left-[20px] top-[13px] h-[49px] w-[300px]">
			<div class="absolute left-[64px] top-[4px] font-['Roboto'] text-xs font-medium text-white">
				Пригласить друга с Telegram Premium
			</div>
			<img
				class="absolute left-[64px] top-[23px] h-[22px] w-[22px] rounded-[256px] object-cover"
				alt="coin icon"
				src={coin}
			/>
			<div
				class="absolute left-[91px] top-[27px] font-['Roboto'] text-sm font-semibold leading-[14px] text-[#ffbd20]"
			>
				+0.3
			</div>
			<div
				class="absolute left-[124px] top-[31px] font-['Roboto'] text-[10px] font-normal leading-[10px] text-white"
			>
				Для вас и вашего друга
			</div>
			<img
				class="absolute left-0 top-0 h-[49px] w-[49px] object-cover"
				alt="gift"
				src={purpleGift}
			/>
		</div>
	</div>
	<div class="absolute left-0 top-[170px] h-12 w-[368px]">
		<div class="absolute left-0 top-0 h-12 w-[368px] rounded-[15px] bg-[#101010]"></div>
		<div class="absolute left-[33px] top-[10px] w-[302px] text-center">
			{#if invitedFirstName}
				<span class="w-full text-center">
					<span class="font-['Roboto'] text-xs font-normal text-white">
						Вы уже являетесь рефералом, приглашенным&nbsp;
					</span>
					<span class="font-['Roboto'] text-xs font-normal text-[#ffbd20]">
						{invitedFirstName}
					</span>
				</span>
			{:else}
				<span class="w-full text-center font-['Roboto'] text-xs font-normal text-white">
					Вы не являетесь рефералом
				</span>
			{/if}
		</div>
	</div>
</div>
<div class="absolute left-[30px] top-[519px] h-[265px] w-[368px]">
	<div class="absolute left-0 top-0 h-3.5 w-[368px]">
		<div
			class="absolute left-0 top-0 font-['Roboto'] text-sm font-semibold leading-[14px] text-[#fffefc]"
		>
			Список ваших друзей
		</div>
		<div class="absolute left-[352px] top-0 h-3.5 w-4">
			<button class="absolute left-0 top-0 h-3.5 w-4 object-cover" onclick={refresh_invited}>
				<img class="absolute left-0 top-0 h-0 w-0 object-cover" alt="refresh" src={refresh} />
			</button>
		</div>
	</div>
	{#if invited.length == 0}
		<div class="absolute left-0 top-[29px] h-[72px] w-[368px]">
			<div class="absolute left-0 top-0 h-[72px] w-[368px] rounded-[20px] bg-[#101010]"></div>
			<div
				class="absolute left-[83px] top-[28px] text-center font-['Roboto'] text-sm font-medium text-white opacity-25"
			>
				Вы ещё никого не пригласили!
			</div>
		</div>
	{:else}
		<div
			class="no-scrollbar absolute left-0 top-[29px] h-[234px] w-[368px] overflow-x-hidden overflow-y-scroll"
		>
			<div class="mb-[-10px]"></div>
			{#each invited as user}
				<div class="relative mt-[10px] h-[72px] w-[368px] rounded-[20px] bg-[#101010]">
					<img
						class="absolute left-[20px] top-[19px] h-[33px] w-[33px] rounded-[7px] object-cover"
						alt="avatar"
						src={user.photo_url}
					/>
					<div
						class="absolute left-[63px] top-[29px] font-['Roboto'] text-sm font-semibold leading-[14px] text-white"
					>
						{user.first_name}
					</div>
				</div>
			{/each}
			<div class="h-[41px]"></div>
		</div>
	{/if}
</div>
<div class="absolute left-[30px] top-[753px] h-[54px] w-[368px]">
	<button class="absolute left-[313px] top-[1px] h-[53px] w-[55px]" onclick={copyLink}>
		<div class="absolute left-0 top-0 h-[53px] w-[55px] rounded-[15px] bg-[#ffbd20]"></div>
		<div
			class="absolute left-[15px] top-[13px] inline-flex h-7 w-6 flex-col items-center justify-center"
		>
			<img class="h-7 w-6 object-cover" alt="copy" src={copy} />
		</div>
	</button>
	<button
		class="absolute left-0 top-0 h-[54px] w-[305px]"
		onclick={() => {
			window.Telegram.WebApp.openTelegramLink(sendLink);
		}}
	>
		<div class="absolute left-0 top-0 h-[54px] w-[305px] rounded-[15px] bg-[#ffbd20]"></div>
		<div class="absolute left-[80px] top-[19px] h-4 w-36">
			<div class="absolute left-0 top-0 text-center font-['Roboto'] text-sm font-medium text-black">
				Пригласить друга
			</div>
			<div class="absolute left-[128px] top-0 inline-flex h-4 w-4 items-center justify-center">
				<div class="relative h-4 w-4">
					<img
						class="absolute left-0 top-0 h-4 w-4 object-cover"
						alt="invite friend"
						src={invite}
					/>
				</div>
			</div>
		</div>
	</button>
</div>

<script>
	import avatar from '$lib/avatar.jpg';
	import coin from '$lib/coin.png';
	import energy from '$lib/energy.png';
</script>

<div>
	<img
		class="absolute left-[30px] top-[97px] h-[33px] w-[33px] rounded-[7px] object-cover"
		alt="avatar"
		src={avatar}
	/>
	<div
		class="absolute left-[73px] top-[107px] font-['Roboto'] text-sm font-semibold leading-[14px] text-white"
	>
		surgeon.design
	</div>
	<div class="absolute left-[115px] top-[310px] inline-flex items-center justify-center gap-2">
		<img class="h-[42px] w-[42px] rounded-[256px] object-cover" alt="coin icon" src={coin} />
		<div class="font-['Roboto'] text-[40px] font-bold leading-[44px] text-[#fffefc]">507,981</div>
	</div>
	<div
		class="absolute left-[70px] top-[413px] h-[289px] w-[289px] rounded-full bg-[#ffbd20] opacity-60 blur-[100px]"
	></div>
	<img
		class="absolute left-[55px] top-[399px] h-[318px] w-[318px] rounded-[256px] object-cover"
		alt="big coin"
		src={coin}
	/>
	<div
		class="absolute left-[30px] top-[180px] h-[65px] w-[368px] rounded-[15px] bg-[#101010]"
	></div>
	<div class="absolute left-[272px] top-[195px] h-9 w-[101px] rounded-[11px] bg-[#ffbd20]"></div>
	<div class="absolute left-[55px] top-[192px] font-['Roboto'] text-xs font-medium text-white">
		Прибыль в час
	</div>
	<div class="absolute left-[287px] top-[205px] font-['Roboto'] text-sm font-medium text-black">
		Увеличить
	</div>
	<img
		class="absolute left-[55px] top-[211px] h-[22px] w-[22px] rounded-[256px] object-cover"
		alt="coin icon"
		src={coin}
	/>
	<div
		class="absolute left-[82px] top-[215px] font-['Roboto'] text-sm font-semibold leading-none text-white"
	>
		500k
	</div>
	<div class="absolute left-[30px] top-[787px] h-[27px] w-[368px]">
		<div class="absolute left-[18px] top-[2px] font-['Roboto'] text-sm font-semibold text-white">
			400/500
		</div>
		<div class="absolute left-[313px] top-[2px] font-['Roboto'] text-sm font-semibold text-white">
			Энергия
		</div>
		<div class="absolute left-0 top-0 h-[27px] w-3.5">
			<img class="absolute left-0 top-0 h-[27px] object-cover" alt="energy" src={energy} />
		</div>
		<div class="absolute left-0 top-[1px] h-[26px] w-[13px]"></div>
	</div>
</div>

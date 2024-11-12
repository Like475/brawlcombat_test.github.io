<script>
	import tg from '$lib/imgs/tg.png';
	import coin from '$lib/imgs/coin.png';
</script>

<div class="absolute left-0 top-0 h-[926px] w-[428px] bg-black opacity-50"></div>
<div class="absolute left-[30px] top-[612px] h-[286px] w-[368px]">
	<div class="absolute left-0 top-0 h-[286px] w-[368px] rounded-[20px] bg-[#101010]"></div>
	<div class="absolute left-[51px] top-[166px] h-10 w-[266px]">
		<div class="absolute left-0 top-0 h-10 w-[266px] rounded-[20px] bg-[#ffbd20]"></div>
		<div
			class="absolute left-[89px] top-[12px] text-center font-['Roboto'] text-sm font-medium text-black"
		>
			Подписаться
		</div>
	</div>
	<div class="absolute left-[51px] top-[216px] h-10 w-[266px]">
		<div class="absolute left-0 top-0 h-10 w-[266px] rounded-[20px] bg-[#222222]"></div>
		<div
			class="absolute left-[97px] top-[12px] text-center font-['Roboto'] text-sm font-medium text-white opacity-20"
		>
			Проверить
		</div>
	</div>
	<div class="absolute left-[162px] top-[124px] h-[22px] w-[43px]">
		<img
			class="absolute left-0 top-0 h-[22px] w-[22px] rounded-[256px] object-cover"
			alt="coin icon"
			src={coin}
		/>
		<div
			class="absolute left-[27px] top-[4px] font-['Roboto'] text-sm font-semibold leading-[14px] text-[#ffbd20]"
		>
			+1
		</div>
	</div>
	<img class="absolute left-[161px] top-[30px] h-[45px] w-[45px] object-cover" alt="tg" src={tg} />
	<div class="absolute left-[60px] top-[85px] font-['Roboto'] text-[25px] font-bold text-white">
		Подпишись на канал
	</div>
</div>

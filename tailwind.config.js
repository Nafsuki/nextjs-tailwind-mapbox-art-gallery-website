module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			bigShoulder: ['Big Shoulders Display'],
			outfit: ['Outfit', 'sans-serif'],
		},
		extend: {
			backgroundColor: {
				'custom-stone': '#151515',
				'shine': '#bb0546'
			},
			dropShadow: {
				'3xl': '0 5px 2px rgba(0, 0, 0, 0.9)',
			},
			backgroundImage: {
				mobileMap: "url('/mobile/image-map.png')",
				tabletMap: "url('/tablet/image-map.png')",
				desktopMap: "url('/desktop/image-map.png')",
				desktopHero: "url('/desktop/image-hero.jpg')",
			},
			colors: {
				gold: '#D5966C',
				almostBlack: '#151515',
				darkGray: '#444444',
			},
			width: {
				btn: '260px',
				350: '350px',
			},
			maxWidth: {
				540: '540px',
			},
			height: {
				btn: '72px',
				mobile: '336px',
				tablet: '218px',
				550: '550px',
				600: '600px',
			},
			content: {
				mobileLink: 'url("/mobile/image-hero@2x.jpg")',
			},
			fontSize: {
				headingXL: [
					'96px',
					{
						lineHeight: '88px',
					},
				],
				headingL: [
					'70px',
					{
						lineHeight: '70px',
					},
				],
				headingXM: [
					'60px',
					{
						lineHeight: '60px',
					},
				],
				headingMM: [
					'55px',
					{
						lineHeight: '50px',
					},
				],
				headingM: [
					'50px',
					{
						lineHeight: '45px',
					},
				],
				headingS: [
					'36px',
					{
						lineHeight: '36px',
					},
				],
				headingXS: [
					'32px',
					{
						lineHeight: '32px',
					},
				],
				bodyM: [
					'22px',
					{
						lineHeight: '32px',
					},
				],

				bodyS: [
					'18px',
					{
						lineHeight: '28px',
					},
				],
				button: [
					'20px',
					{
						letterSpacing: '3.64px',
					},
				],
				bodyXS: [
					'16px',
					{
						lineHeight: '26px',
					},
				],
			},
		},
	},
	plugins: [],
};

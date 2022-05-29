module.exports = {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	theme: {
		extend: {
			colors: {
				customRed: '#ff3850',
				customBlack: '#111012',
			},
			borderRadius: {
				layout: '1rem',
			},
			keyframes: {
				fade: {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.8)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade 0.5s ease-in-out',
				scaleIn: 'scaleIn 0.35s ease-in-out',
			},
		},
	},
	plugins: [],
}

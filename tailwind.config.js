/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				text: {
					50: '#f8f8f8',
					100: '#ebebeb',
					200: '#dcdcdc',
					300: '#bdbdbd',
					400: '#989898',
					500: '#7c7c7c',
					600: '#656565',
					700: '#525252',
					800: '#464646',
					900: '#3d3d3d',
					950: '#292929'
				},
				background: {
					50: '#f7f7f8',
					100: '#eeeef0',
					200: '#d9d9de',
					300: '#b7b7c2',
					400: '#9091a0',
					500: '#737584',
					600: '#5d5e6c',
					700: '#4c4d58',
					800: '#41424b',
					900: '#393941',
					950: '#161619'
				},
				primary: {
					50: '#f3f3ff',
					100: '#eae9fe',
					200: '#d8d6fe',
					300: '#bbb6fc',
					400: '#998cf9',
					500: '#785df5',
					600: '#6a42ec',
					700: '#562ad7',
					800: '#4722b5',
					900: '#3c1e94',
					950: '#231164'
				},
				secondary: {
					50: '#f6f4fe',
					100: '#eeebfc',
					200: '#e0dafa',
					300: '#c8bdf5',
					400: '#a791ed',
					500: '#8f6de5',
					600: '#7f4dda',
					700: '#6f3bc6',
					800: '#5d31a6',
					900: '#4e2a88',
					950: '#30195c'
				},
				accent: {
					50: '#edf5ff',
					100: '#dfebff',
					200: '#c4d9ff',
					300: '#a1bfff',
					400: '#7b9bfe',
					500: '#5c76f8',
					600: '#4252ed',
					700: '#313dd1',
					800: '#2a35a9',
					900: '#2a3585',
					950: '#191e4d'
				}
			}
		}
	},
	plugins: []
};
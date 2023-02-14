/* eslint-disable camelcase */
const theme = {
	color: {
		background: {
			primary: '#3155dc',
			secondary: '#17a974',
			ternary: '#231c42',
			bg: '#ffffff',
			bgLight: '#f7f7f7'
		},
		border: {
			brand: 'rgb(1, 33, 105)',
		},
		font: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
			solid: 'rgb(0, 0, 0)',
		},
		icon: {
			interactive: '#fff',
			primary: 'rgba(0, 0, 0, 0.54)',
			interactive_active: 'rgb(0, 52, 155)',
		},
		shared: {
			brand_500: 'rgb(1, 33, 105)',
			midnight_400: 'rgb(51, 61, 85)',
			midnight_500: 'rgb(0, 13, 42)',
			white_500: 'rgb(255, 255, 255)',
		},
		scaffold: {
			text: {
				primary: '#ffffff',
				secondary: '#222426',
			},
			greyscale: {
				black: 'rgb(0, 0, 0)',
				dark_mid_grey: '#ffffffb3',
				grey: 'rgb(204, 204, 204)',
				darker_grey: 'rgb(51, 51, 51)',
			},
		}
	},
	border: {
		radius: {
			lg: '0.5rem',
			sm: '0.25rem',
			circle: '100rem',
		},
		width: {
			xl: '0.5rem',
			lg: '0.25rem',
			md: '0.125rem',
			sm: '0.0625rem',
		},
		box_shadow: {
			shadow_1: '0px 2px 4px 0px rgba(0, 0, 0, 0.16)',
			shadow_2: '0px 6px 10px 0px rgba(0, 0, 0, 0.24)',
			shadow_3: '0px 12px 18px 0px rgba(0, 0, 0, 0.28)',
		},
	},
	layout: {
		media_query: {
			xl_min: '64.5625rem',
			md_min: '36rem',
			sm_min: '18.75rem',
			lg_min: '48rem',
			xl_max: '84.75rem',
			md_max: '48rem',
			sm_max: '36rem',
			lg_max: '64.5rem',
		},
		container: {
			max: '100rem',
		},
		gutter: {
			xl: '1rem',
			md: '0.5rem',
			sm: '0.25rem',
			lg: '0.75rem',
		},
	},
	sizing: {
		size_0: '0rem',
		size_1: '0.0625rem',
		size_2: '0.125rem',
		size_4: '0.25rem',
		size_5: '0.3125rem',
		size_8: '0.5rem',
		size_10: '0.625rem',
		size_12: '0.75rem',
		size_14: '0.875rem',
		size_16: '1rem',
		size_18: '1.125rem',
		size_20: '1.25rem',
		size_24: '1.5rem',
		size_28: '1.75rem',
		size_32: '2rem',
		size_36: '2.25rem',
		size_40: '2.5rem',
		size_44: '2.75rem',
		size_48: '3rem',
		size_52: '3.25rem',
		size_56: '3.5rem',
		size_68: '4.25rem',
		size_80: '5rem',
		size_84: '5.25rem',
		size_60: '3.75rem',
		size_64: '4rem',
		size_72: '4.5rem',
		size_76: '4.75rem',
		size_88: '5.5rem',
		size_92: '5.75rem',
		size_96: '6rem',
		size_112: '7rem',
		size_128: '8rem',
		size_300: '18.75rem',
		size_500: '31.25rem',
		size_35vh: '35vh',
		size_45vh: '45vh',
		size_980: '61.25rem',
	},
	typography: {
		font_weight: {
			normal: '400',
			bold: '700',
		},
	},
	component: {
		heading: {
			h6: {
				line_height: {
					mobile: '1rem',
					desktop: '1.25rem',
				},
				font_size: {
					desktop: '0.875rem',
				},
				font_stack: 'Helvetica, sans-serif',
				font_weight: '700',
			},
			h3: {
				font_stack: 'Helvetica, sans-serif',
				line_height: {
					mobile: '1.5rem',
					desktop: '1.5rem',
				},
				font_size: {
					mobile: '1.25rem',
					desktop: '1.25rem',
				},
				font_weight: '700',
			},
			h5: {
				line_height: {
					mobile: '1.25rem',
					desktop: '1.5rem',
				},
				font_stack: 'Helvetica, sans-serif',
				font_size: {
					mobile: '0.875rem',
					desktop: '1rem',
				},
				font_weight: '700',
			},
			h4: {
				font_stack: 'Helvetica, sans-serif',
				line_height: {
					mobile: '1.5rem',
					desktop: '1.5rem',
				},
				font_size: {
					mobile: '1rem',
					desktop: '1.125rem',
				},
				font_weight: '700',
			},
			h2: {
				line_height: {
					mobile: '1.75rem',
					desktop: '1.75rem',
				},
				font_size: {
					mobile: '1.5rem',
					desktop: '1.5rem',
				},
				font_weight: '700',
				font_stack: 'Helvetica, sans-serif',
			},
			h1: {
				line_height: {
					mobile: '2rem',
					desktop: '2.75rem',
				},
				font_size: {
					mobile: '1.75rem',
					desktop: '2.5rem',
				},
				font_weight: '700',
				font_stack: 'Helvetica, sans-serif',
			},
		},
		button: {
			base: {
				border_radius: '0rem',
				padding: {
					top: '0.75rem',
					right: '2rem',
					left: '2rem',
					bottom: '0.75rem',
				},
				font_weight: '700',
				font_size: {
					sm: '0.875rem',
					lg: '1rem',
				},
				line_height: '1.25rem',
				icon: {
					margin: '1rem',
				},
				font_family: 'Helvetica, sans-serif',
				border_width: '0.0625rem',
			},
			large: {
				padding: {
					bottom: '1rem',
					top: '1rem',
				},
			},
			icon: {
				large: {
					padding: '1rem',
				},
				base: {
					padding: '0.75rem',
				},
			},
		},
		chip: {
			default: {
				line_height: '1.25rem',
				icon: {
					margin: '0.5rem',
				},
				font_family: 'Helvetica, sans-serif',
				padding: {
					left: '1rem',
					bottom: '0.5rem',
					top: '0.5rem',
					right: '1rem',
				},
				font_weight: '400',
				font_size: {
					sm: '0.875rem',
					lg: '1rem',
				},
			},
		},
		input: {
			padding: {
				right: {
					sm: '1rem',
					lg: '4rem',
					md: '3rem',
				},
				top: {
					md: '1.5rem',
					sm: '0.5rem',
				},
				bottom: {
					md: '0.75rem',
					sm: '0.5rem',
				},
				left: {
					md: '3rem',
					sm: '1rem',
				},
			},
			border_radius: '0.25rem',
			line_height: {
				md: '1.25rem',
				sm: '1.25rem',
			},
			font_size: {
				md: '0.875rem',
				sm: '0.75rem',
				lg: '1rem',
			},
		},
	},
};

export const darkTheme = {
	...theme,
	color: {
		...theme.color,
		background: {
			primary: '#3155dc',
			secondary: '#17a974',
			ternary: '#231c42',
			bg: '#1f2028',
			bgLight: '#2e3039'
			
		},
		scaffold: {
			...theme.color.scaffold,
			text: {
				primary: '#000000',
				secondary: '#ffffff',
			}
		}
	}
}

export const lightTheme = {
	...theme,
	color: {
		...theme.color,
		background: {
			primary: '#3155dc',
			secondary: '#17a974',
			ternary: '#231c42',
			bg: '#ffffff',
			bgLight: '#f7f7f7'
		},
		scaffold: {
			...theme.color.scaffold,
			text: {
				primary: '#ffffff',
				secondary: '#222426',
			}
		}
	}
}
export default theme;

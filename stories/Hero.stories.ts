import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Hero from '../app/components/Hero/Hero';

const mockHeroData = {
	type: "hero" as const,
	heading: "Experience Innovation with Bondi",
	subheading: "Powering digital transformation through creativity and technology.",
	image: "/images/hero-banner.jpg",
	cta: {
		text: "Get Started",
		link: "/contact"
	}
};

const meta = {
	title: 'Components/Hero',
	component: Hero,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {
		data: {
			control: 'object',
			description: 'Hero component data object containing all content',
		},
	},
	args: {
		data: mockHeroData,
	},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		data: {
			"type": "hero",
			"heading": "Experience Innovation with Bondi",
			"subheading": "Powering digital transformation through creativity and technology.",
			"image": "/images/hero-banner.jpg",

			"cta": {
				"text": "Get Started",
				"link": "/contact"
			}
		}
	}
};

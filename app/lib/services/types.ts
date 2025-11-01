
export interface HeroSection {
	type: 'hero';
	heading: string;
	subheading: string;
	image: string;
	cta: {
		text: string;
		link: string;
	};
}

export interface TextBlockSection {
	type: 'textBlock';
	heading: string;
	body: string;
}

export interface FeatureGridSection {
	type: 'featureGrid';
	heading: string;
	features: Array<{
		icon: string;
		title: string;
		description: string;
	}>;
}

export interface TestimonialSection {
	type: 'testimonial';
	heading: string;
	testimonials: Array<{
		name: string;
		company: string;
		quote: string;
	}>;
}

export interface CTABannerSection {
	type: 'ctaBanner';
	heading: string;
	buttonText: string;
	link: string;
}

export type Section = HeroSection | TextBlockSection | FeatureGridSection | TestimonialSection | CTABannerSection;

export interface pageDataTypes {
	title: string;
	slug: string;
	sections: Section[];
}

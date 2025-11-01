
import { pageDataTypes } from '../lib/services/types';

export const pageData: pageDataTypes = {
	"title": "Bondi Marketing Homepage",
	"slug": "home",
	"sections": [
		{
			"type": "hero",
			"heading": "Experience Innovation with Bondi",
			"subheading": "Powering digital transformation through creativity and technology.",
			"image": "/images/hero-banner.jpg",
			"cta": {
				"text": "Get Started",
				"link": "/contact"
			}
		},
		{
			"type": "textBlock",
			"heading": "About Bondi",
			"body": "Bondi is a leading provider of digital marketing solutions. We help brands unlock their potential."
		},
		{
			"type": "featureGrid",
			"heading": "Why Choose Us",
			"features": [
				{
					"icon": "🚀",
					"title": "Performance Driven",
					"description": "Data-backed strategies that deliver measurable growth."
				},
				{
					"icon": "💡",
					"title": "Innovative Thinking",
					"description": "Creative solutions powered by technology and insight."
				},
				{
					"icon": "🤝",
					"title": "Collaborative Approach",
					"description": "We partner closely with clients for shared success."
				}
			]
		},
		{
			"type": "testimonial",
			"heading": "What Our Clients Say",
			"testimonials": [
				{
					"name": "Sarah Lee",
					"company": "BrightWorks",
					"quote": "Bondi transformed our customer engagement strategy — results within weeks!"
				},
				{
					"name": "Tom Nguyen",
					"company": "RetailCo",
					"quote": "Smart, responsive, and genuinely invested in our success."
				}
			]
		},
		{
			"type": "ctaBanner",
			"heading": "Ready to Grow?",
			"buttonText": "Contact Us Today",
			"link": "/contact"
		}
	]
};
/************
 * API Service example to fetch page data from a real API endpoint
 ************/

import { pageDataTypes } from './types';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPageData(): Promise<pageDataTypes> {
	try {
		const response = await fetch(`${apiUrl}/example`, {
			next: { revalidate: 600 }
		});
		if (!response.ok) {
			throw new Error(`Failed to fetch page data: ${response.status} ${response.statusText}`);
		}
		const data: pageDataTypes = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching page data:', error);

		if (error instanceof Error) {
			throw new Error(`API Error: ${error.message}`);
		}
		throw new Error('Unknown error occurred while fetching page data');
	}
}

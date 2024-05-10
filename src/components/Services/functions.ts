interface Service {
	id: string;
	name: string;
	price: number;
	specie: string;
	size: string;
}

const BASE_URL = process.env.BASE_URL;

export const getServices = async (): Promise<Service[]> => {
	const response = await fetch(`${BASE_URL}/services`, {
		cache: 'no-cache',
	});
	const data = await response.json();
	return data;
};
export const getServiceSpecie = async ({ id }: { id: string }) => {
	const response = await fetch(`${BASE_URL}/species/${id}`, {
		cache: 'no-cache',
	});
	const data = await response.json();
	return data;
};
export const getServiceSize = async ({ id }: { id: string }) => {
	const response = await fetch(`${BASE_URL}/pet_sizes/${id}`, {
		cache: 'no-cache',
	});
	const data = await response.json();
	return data;
};
export const getServiceName = async ({ id }: { id: string }) => {
	const response = await fetch(`${BASE_URL}/services_names/${id}`, {
		cache: 'no-cache',
	});
	const data = await response.json();
	return data;
};

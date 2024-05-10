import axios from 'axios';

export interface Clients {
	dni: string;
	name: string;
	lastname: string;
	phone: string;
	email: string;
	address: string;
	district: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getClients = async (): Promise<Clients[]> => {
	const res = await fetch(`${BASE_URL}/clients/`, {
		cache: 'no-cache',
	});

	const data = await res.json();
	return data;
};

export const createClient = async (client: Clients) => {
	axios.post(`${BASE_URL}/clients/`, client);
};
export const getClient = async (dni: string): Promise<Clients> => {
	const res = await fetch(`${BASE_URL}/clients/${dni}`);
	const data = await res.json();
	return data;
};

export const checkifClientExists = async (dni: string): Promise<boolean> => {
	const res = await fetch(`${BASE_URL}/clients/${dni}`);
	const data = await res.json();
	if (data.detail === 'No Client matches the given query.') {
		return false;
	}
	return true;
};

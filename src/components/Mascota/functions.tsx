import axios from 'axios';

export interface Pets {
	id: number;
	name: string;
	owner: string;
	age: number;
	specie: number;
	breed: number;
}

const BASE_URL = 'http://localhost:8000';

export const getPets = async (): Promise<Pets[]> => {
	const res = await fetch(`${BASE_URL}/pets/`, {
		cache: 'no-cache',
	});
	const data = await res.json();
	return data;
};

export const createPet = async (pet: Pets) => {
	axios.post(`${BASE_URL}/pets/`, pet);
};

// export const getSpecie = async ({ id }: { id: number }) => {
// 	const res = await fetch(`${BASE_URL}/species/${id}`);
// 	const data = await res.json();
// 	return data;
// };

// export const getBreed = async ({ id }: { id: number }) => {
// 	const res = await fetch(`${BASE_URL}/breeds/${id}`);
// 	const data = await res.json();
// 	return data;
// };
// export const getPet = async (dni: string): Promise<Pets> => {
// 	const res = await fetch(`${BASE_URL}/clients/${dni}`);
// 	const data = await res.json();
// 	return data;
// };

// export const checkifClientExists = async (dni: string): Promise<boolean> => {
// 	const res = await fetch(`${BASE_URL}/clients/${dni}`);
// 	const data = await res.json();
// 	if (data.detail === 'No Client matches the given query.') {
// 		return false;
// 	}
// 	return true;
// };

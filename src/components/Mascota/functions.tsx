import axios from 'axios';

export interface Pets {
	id: string;
	name: string;
	owner: string;
	age: number;
	specie: string;
	breed: string;
	size: string;
	gender: string;
}
export interface Breeds {
	id: string;
	name: string;
	specie: string;
}
export interface Species {
	id: string;
	name: string;
}
export interface Sizes {
	id: string;
	size: string;
}
export interface PetGenders {
	id: string;
	gender: string;
}

const BASE_URL = process.env.BASE_URL;

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

export const getSpecies = async (): Promise<Species[]> => {
	const res = await fetch(`${BASE_URL}/species/`, {
		cache: 'no-cache',
	});
	const data = await res.json();
	return data;
};
export const getBreeds = async (): Promise<Breeds[]> => {
	const res = await fetch(`${BASE_URL}/breeds/`, {
		cache: 'no-cache',
	});
	const data = await res.json();
	return data;
};
export const getSizes = async (): Promise<Sizes[]> => {
	const res = await fetch(`${BASE_URL}/pet_sizes/`, {
		cache: 'no-cache',
	});
	const data = await res.json();
	return data;
};
export const getPetGenders = async () => {
	const res = await fetch(`${BASE_URL}/pet_gender/`, {
		cache: 'no-cache',
	});
	const data = await res.json();
	return data;
};

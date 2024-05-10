import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

import { getPets } from './functions';

const BASE_URL = process.env.BASE_URL;

const getPetSpecie = async ({ id }: { id: string }) => {
	const res = await fetch(`${BASE_URL}/species/${id}`);
	const data = await res.json();
	return data;
};
const getPetBreed = async ({ id }: { id: string }) => {
	const res = await fetch(`${BASE_URL}/breeds/${id}`);
	const data = await res.json();
	return data;
};

const getPetGender = async ({ id }: { id: string }) => {
	const res = await fetch(`${BASE_URL}/pet_gender/${id}`);
	const data = await res.json();
	return data;
};

export async function MascotaTable() {
	const pets = await getPets();

	return (
		<Table>
			<TableCaption>Una lista de las mascotas registradas.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Nombre</TableHead>

					<TableHead>DNI del dueño</TableHead>
					<TableHead>Edad</TableHead>
					<TableHead>Especie</TableHead>
					<TableHead>Raza</TableHead>
					<TableHead>Sexo</TableHead>

					<TableHead className="text-right" />
				</TableRow>
			</TableHeader>
			<TableBody>
				{pets.map((pet) => (
					<TableRow key={pet.id}>
						<TableCell className="font-medium">{pet.name}</TableCell>

						<TableCell>{pet.owner}</TableCell>
						<TableCell>{pet.age}</TableCell>
						<TableCell>
							{getPetSpecie({ id: pet.specie }).then((specie) => specie.name)}
						</TableCell>
						<TableCell>
							{getPetBreed({ id: pet.breed }).then((breed) => breed.name)}
						</TableCell>
						<TableCell>
							{getPetGender({ id: pet.gender }).then((gender) => gender.gender)}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			{/* <TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">$2,500.00</TableCell>
				</TableRow>
			</TableFooter> */}
		</Table>
	);
}

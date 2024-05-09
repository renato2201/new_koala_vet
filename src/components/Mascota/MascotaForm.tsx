'use client';

// import del form
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

import { Button } from '../ui/button';
import { SearchClient } from './SearchClient';
import { Select, SelectTrigger, SelectValue } from '../ui/select';
import { BreedSelect } from './BreedSelect';
import { SpecieSelect } from './SpecieSelect';

import { useEffect, useState } from 'react';
import {
	createPet,
	getBreeds,
	getPetGenders,
	getPets,
	getSizes,
	getSpecies,
} from './functions';
import { SizesSelect } from './SizesSelect';
import { toast } from '../ui/use-toast';
import { GenderSelect } from './GenderSelect';

const FormSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.',
	}),
	age: z.string().min(1, {
		message: 'Age must be at least 1 characters.',
	}),
	breed: z.string().min(1, {
		message: 'Breed must be at least 1 characters.',
	}),
	owner: z.string().min(8, {
		message: 'Owner must be at least 8 characters.',
	}),
	size: z.string().min(1, {
		message: 'Size must be at least 1 characters.',
	}),
	specie: z.string(),
	gender: z.string(),
});

export function PetForm() {
	const router = useRouter();
	const [pets, setPets] = useState([
		{
			id: '1',
			name: 'Miau',
			owner: '12345678',
			age: 2,
			specie: '1',
			breed: '1',
			size: '1',
		},
	]);
	const [species, setSpecies] = useState([
		{
			id: '1',
			name: 'Gato',
		},
	]);
	const [breeds, setBreeds] = useState([
		{
			id: '1',
			name: 'Gato Egipcio',
			specie: '1',
		},
	]);
	const [sizes, setSizes] = useState([
		{
			id: '1',
			size: 'Pequeño',
		},
	]);
	const [petGenders, setPetGenders] = useState([
		{
			id: '1',
			gender: 'Macho',
		},
	]);
	const [selectedSpecie, setSelectedSpecie] = useState<string | null>(null);

	useEffect(() => {
		getSpecies().then((data) => {
			setSpecies(data);
		});
		getBreeds().then((data) => {
			setBreeds(data);
		});
		getSizes().then((data) => {
			setSizes(data);
		});
		getPets().then((data) => {
			setPets(data);
		});
		getPetGenders().then((data) => {
			setPetGenders(data);
		});
	}, []);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: '',
			age: '1',
			breed: '',
			owner: '',
			size: '',
			specie: '',
			gender: '',
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		const newData = {
			...data,
			age: Number(data.age),
			id: (pets.length + 1).toString(),
		};
		console.log(newData);
		try {
			await createPet(newData);
			toast({
				title: 'Pet created',
				description: 'The pet has been created successfully',
			});
			router.push('/dashboard/mascotas');
		} catch (error) {
			console.error(error);
			toast({
				title: 'Error',
				description: 'An error occurred',
			});
		}
	}
	return (
		<div className="flex flex-col items-center gap-4">
			<div>
				<div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col gap-4">
					<h2 className="text-lg text-gray-800">Buscar cliente</h2>
					<SearchClient />
				</div>
			</div>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-2/3 space-y-6 pl-4  border border-gray-200 rounded-lg shadow-md p-6"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nombre</FormLabel>
								<FormControl>
									<Input placeholder="Nombre" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="owner"
						render={({ field }) => (
							<FormItem>
								<FormLabel>DNI del Dueño</FormLabel>
								<FormControl>
									<Input placeholder="DNI del Dueño" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="specie"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Especie</FormLabel>
								<Select
									onValueChange={(value) => {
										field.onChange(value);
										setSelectedSpecie(value);
									}}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Especie" />
										</SelectTrigger>
									</FormControl>

									<SpecieSelect species={species} />
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="breed"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Raza</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Raza" />
										</SelectTrigger>
									</FormControl>

									<BreedSelect
										breeds={breeds.filter(
											(breed) => breed.specie === selectedSpecie
										)}
									/>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="size"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Tamaño</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Tamaño" />
										</SelectTrigger>
									</FormControl>

									<SizesSelect sizes={sizes} />
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="age"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Edad</FormLabel>
								<FormControl>
									<Input placeholder="Edad" {...field} type="number" />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="gender"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Sexo</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Sexo" />
										</SelectTrigger>
									</FormControl>

									<GenderSelect genders={petGenders} />
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
}

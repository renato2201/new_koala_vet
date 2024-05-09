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
import { toast } from '@/components/ui/use-toast';
import {} from './functions';
import { useRouter } from 'next/navigation';
import { checkifClientExists, getClient } from '../Client/functions';
import { Button } from '../ui/button';

const FormSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.',
	}),
	age: z.number().int().positive(),
	breed: z.string().min(2, {
		message: 'Breed must be at least 2 characters.',
	}),
	owner: z.string().min(8, {
		message: 'Owner must be at least 8 characters.',
	}),
	size: z.string().min(2, {
		message: 'Size must be at least 2 characters.',
	}),
	specie: z.string().min(2, {
		message: 'Specie must be at least 2 characters.',
	}),
});

const ClientSchema = z.object({
	dni: z.string().min(8, {
		message: 'DNI must be at least 8 characters',
	}),
});

export function PetForm() {
	const router = useRouter();

	const clienteForm = useForm<z.infer<typeof ClientSchema>>({
		resolver: zodResolver(ClientSchema),
		defaultValues: {
			dni: '',
		},
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: '',
			age: 0,
			breed: '',
			owner: '',
			size: '',
			specie: '',
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: 'Pet created',
			description: 'The pet has been created successfully',
		});
	}

	async function search(data: z.infer<typeof ClientSchema>) {
		const response = await checkifClientExists(data.dni);
		if (response === false) {
			toast({
				title: 'Error',
				description: 'Cliente no encontrado',
			});
		} else {
			const cliente = await getClient(data.dni);
			toast({
				title: 'Cliente encontrado',
				description: `Nombre: ${cliente.name} ${cliente.lastname}`,
			});
		}
	}

	return (
		<div className="flex flex-col items-center gap-4">
			<div>
				<div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col gap-4">
					<h2 className="text-lg text-gray-800">Buscar cliente</h2>
					<Form {...clienteForm}>
						<form
							onSubmit={clienteForm.handleSubmit(search)}
							className="flex flex-col gap-3"
						>
							<FormField
								control={clienteForm.control}
								name="dni"
								render={({ field }) => (
									<FormItem>
										<FormLabel>DNI</FormLabel>
										<FormControl>
											<Input placeholder="DNI" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit">Buscar</Button>
						</form>
					</Form>
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
								<FormLabel>Dueño</FormLabel>
								<FormControl>
									<Input placeholder="Dueño" {...field} />
								</FormControl>

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
								<FormControl>
									<Input placeholder="Raza" {...field} />
								</FormControl>

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
								<FormControl>
									<Input placeholder="Tamaño" {...field} />
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
								<FormControl>
									<Input placeholder="Especie" {...field} />
								</FormControl>

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

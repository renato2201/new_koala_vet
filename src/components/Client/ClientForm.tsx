'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
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
import { checkifClientExists, createClient } from './functions';
import { useRouter } from 'next/navigation';

const FormSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.',
	}),
	lastname: z.string().min(2, {
		message: 'Lastname must be at least 2 characters.',
	}),
	email: z.string().email({
		message: 'Invalid email address.',
	}),
	phone: z.string().min(9, {
		message: 'Phone number must be at least 9 characters.',
	}),
	address: z.string().min(5, {
		message: 'Address must be at least 5 characters.',
	}),
	district: z.string().min(2, {
		message: 'District must be at least 2 characters.',
	}),
	dni: z.string().min(8, {
		message: 'DNI must be at least 8 characters.',
	}),
});

export function ClientForm() {
	const router = useRouter();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: '',
			lastname: '',
			email: '',
			phone: '',
			address: '',
			district: '',
			dni: '',
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		const response = await checkifClientExists(data.dni);
		if (response === false) {
			try {
				createClient(data);
				toast({
					title: 'Success',
					description: 'Cliente creado',
				});
				router.push('/dashboard/clientes');
			} catch (error) {
				toast({
					title: 'Error',
					description: 'Error al crear el cliente',
				});
				console.log(error);
			}
		} else {
			toast({
				title: 'Error',
				description: 'El cliente ya existe',
			});
		}
	}

	return (
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
					name="lastname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Apellido</FormLabel>
							<FormControl>
								<Input placeholder="Apellido" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="Email" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Telefono</FormLabel>
							<FormControl>
								<Input placeholder="Telefono" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="address"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Direccion</FormLabel>
							<FormControl>
								<Input placeholder="Direccion" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="district"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Distrito</FormLabel>
							<FormControl>
								<Input placeholder="Distrito" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
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
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}

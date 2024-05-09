import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { checkifClientExists, getClient } from '../Client/functions';
import { toast } from '../ui/use-toast';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const SearchClient = () => {
	const ClientSchema = z.object({
		dni: z.string().min(8, {
			message: 'DNI must be at least 8 characters',
		}),
	});

	const clienteForm = useForm<z.infer<typeof ClientSchema>>({
		resolver: zodResolver(ClientSchema),
		defaultValues: {
			dni: '',
		},
	});
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
			clienteForm.reset();
		}
	}

	return (
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
	);
};

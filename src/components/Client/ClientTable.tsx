import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

import { getClients } from './functions';

export async function ClientTable() {
	const clients = await getClients();

	return (
		<Table>
			<TableCaption>Una lista de tus clientes.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">DNI</TableHead>
					<TableHead>Nombre</TableHead>
					<TableHead>Apellido</TableHead>
					<TableHead className="">Telefono</TableHead>
					<TableHead className="">Email</TableHead>
					<TableHead className="">Direccion</TableHead>
					<TableHead className="">Distrito</TableHead>
					<TableHead className="text-right" />
				</TableRow>
			</TableHeader>
			<TableBody>
				{clients.map((client) => (
					<TableRow key={client.dni}>
						<TableCell className="font-medium">{client.dni}</TableCell>
						<TableCell>{client.name}</TableCell>
						<TableCell>{client.lastname}</TableCell>
						<TableCell>{client.phone}</TableCell>
						<TableCell>{client.email}</TableCell>
						<TableCell>{client.address}</TableCell>
						<TableCell>{client.district}</TableCell>
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

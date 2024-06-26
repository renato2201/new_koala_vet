import { ClienteBreadCrumb } from '@/components/Client';
import { Button } from '@/components/ui/button';
import {
	Table,
	TableCaption,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

export default function Loading() {
	return (
		<div className="px-6 py-5 flex flex-col gap-8">
			<ClienteBreadCrumb />
			<div className="flex justify-between px-2">
				<h1 className="text-2xl font-semibold text-gray-800 dark:text-muted-foreground">
					Clientes
				</h1>
				<Button asChild className="">
					<Link href={'/dashboard/crearCliente'}>Nuevo</Link>
				</Button>
			</div>

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

				{/* <TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">$2,500.00</TableCell>
				</TableRow>
			</TableFooter> */}
			</Table>
		</div>
	);
}

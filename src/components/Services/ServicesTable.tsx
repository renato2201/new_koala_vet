import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import {
	getServiceName,
	getServiceSize,
	getServiceSpecie,
	getServices,
} from '@/components/Services';

const BASE_URL = process.env.BASE_URL;

export async function ServicesTable() {
	const services = await getServices();
	return (
		<Table>
			<TableCaption>Una lista de tus servicios.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="">Nombre de Servicio</TableHead>

					<TableHead>Especie</TableHead>
					<TableHead>Tamaño</TableHead>
					<TableHead>Precio</TableHead>
					<TableHead className="text-right" />
				</TableRow>
			</TableHeader>
			<TableBody>
				{services.map((service) => (
					<TableRow key={service.id}>
						<TableCell className="font-medium">
							{getServiceName({ id: service.name }).then((name) => name.name)}
						</TableCell>
						<TableCell>
							{getServiceSpecie({ id: service.specie }).then(
								(specie) => specie.name
							)}
						</TableCell>
						<TableCell>
							{getServiceSize({ id: service.size }).then((size) => size.size)}
						</TableCell>
						<TableCell>S/.{service.price}</TableCell>
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

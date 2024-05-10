import { MascotaBreadCrumb } from '@/components/Mascota';
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
			<MascotaBreadCrumb />
			<div className="flex justify-between px-2">
				<h1 className="text-2xl font-semibold text-gray-800 dark:text-muted-foreground">
					Mascotas
				</h1>
				<Button asChild className="">
					<Link href={'/dashboard/crearMascota'}>Nuevo</Link>
				</Button>
			</div>

			<Table>
				<TableCaption>Una lista de tus clientes.</TableCaption>
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
			</Table>
		</div>
	);
}

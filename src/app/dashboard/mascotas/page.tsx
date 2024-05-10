import Loading from '@/app/dashboard/mascotas/loading';
import { MascotaBreadCrumb, MascotaTable } from '@/components/Mascota';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata = {
	title: 'Mascotas',
	description: 'Lista de Mascotas',
};

export default function NamePage() {
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
			<Suspense fallback={<Loading />}>
				<MascotaTable />
			</Suspense>
		</div>
	);
}

import { ClientTable, ClienteBreadCrumb } from '@/components/Client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/app/dashboard/clientes/loading';

export const metadata = {
	title: 'Clientes',
	description: 'Lista de Clientes',
};

export default function ClientePage() {
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
			<Suspense fallback={<Loading />}>
				<ClientTable />
			</Suspense>
		</div>
	);
}

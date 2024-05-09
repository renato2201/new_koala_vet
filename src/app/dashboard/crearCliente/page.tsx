import { ClientForm, CrearClienteBreadCrumb } from '@/components/Client';

export default function CrearClientePage() {
	return (
		<div className="px-6 py-5 flex flex-col gap-8">
			<CrearClienteBreadCrumb />
			<div className="flex justify-between px-2">
				<h1 className="text-2xl font-semibold text-gray-800 dark:text-muted-foreground">
					Crear Cliente
				</h1>
			</div>
			<div className="flex justify-center  p-8 rounded-lg">
				<ClientForm />
			</div>
		</div>
	);
}

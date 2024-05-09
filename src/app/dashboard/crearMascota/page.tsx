import { CrearMascotaBreadCrumb, PetForm } from '@/components/Mascota';

export default function CrearMascotaPage() {
	return (
		<div className="px-6 py-5 flex flex-col gap-8">
			<CrearMascotaBreadCrumb />
			<div className="flex justify-between px-2">
				<h1 className="text-2xl font-semibold text-gray-800 dark:text-muted-foreground">
					Crear Mascota
				</h1>
			</div>

			<div className="p-8 rounded-lg">
				<PetForm />
			</div>
		</div>
	);
}

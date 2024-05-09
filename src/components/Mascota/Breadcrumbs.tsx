import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export const MascotaBreadCrumb = () => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem className="text-xl text-gray-800">
					<BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem className="text-xl text-gray-800">
					<BreadcrumbLink href="/dashboard/mascotas">Mascotas</BreadcrumbLink>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export const CrearMascotaBreadCrumb = () => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem className="text-xl text-gray-800">
					<BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem className="text-xl text-gray-800">
					<BreadcrumbLink href="/dashboard/mascotas">Mascotas</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem className="text-xl text-gray-800">
					<BreadcrumbLink href="/dashboard/crearMascota">
						Crear Mascota
					</BreadcrumbLink>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};

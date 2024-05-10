import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export const ServicesBreadCrumb = () => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem className="text-xl text-gray-800">
					<BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem className="text-xl text-gray-800">
					<BreadcrumbLink href="/dashboard/servicios">Servicios</BreadcrumbLink>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export const BreadCrumb = () => {
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

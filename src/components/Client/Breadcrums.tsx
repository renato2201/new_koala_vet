import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export const ClienteBreadCrumb = () => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem className="text-xl text-gray-800">
					<BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem className="text-xl text-gray-800">
					<BreadcrumbLink href="/dashboard/clientes">Clientes</BreadcrumbLink>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export const CrearClienteBreadCrumb = () => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem className="text-xl text-gray-800">
					<BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem className="text-xl text-gray-800">
					<BreadcrumbLink href="/dashboard/clientes">Clientes</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem className="text-xl text-gray-800">
					<BreadcrumbLink href="/dashboard/crearCliente">
						Crear Cliente
					</BreadcrumbLink>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};

import { ServicesBreadCrumb, ServicesTable } from '@/components/Services';

export default function ServiciosPage() {
	return (
		<div className="px-6 py-5 flex flex-col gap-8">
			<ServicesBreadCrumb />
			<div className="flex justify-between px-2">
				<h1 className="text-2xl font-semibold text-gray-800 dark:text-muted-foreground">
					Servicios
				</h1>
				{/* <Button asChild className="">
					<Link href={'/dashboard/crearMascota'}>Nuevo</Link>
				</Button> */}
			</div>
			<ServicesTable />
		</div>
	);
}

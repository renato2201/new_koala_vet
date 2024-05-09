import { Coins, FileSearch2, HandCoins, PawPrint, User } from 'lucide-react';

export const userItems = {
	title: 'Usuario',
	items: [
		{
			label: 'Cliente',
			icon: User,
			href: '/dashboard/clientes',
		},
		{
			label: 'Mascotas',
			icon: PawPrint,
			href: '/dashboard/mascotas',
		},
	],
};

export const enterpriseItems = {
	title: 'Empresa',
	items: [
		{
			label: 'Consultar servicios',
			icon: FileSearch2,
			href: '/dashboard/servicios',
		},
		{
			label: 'Registrar atención',
			icon: PawPrint,
			href: '/dashboard/atencion',
		},
		{
			label: 'Boletas de pago',
			icon: FileSearch2,
			href: '/dashboard/boletas',
		},
	],
};
export const paymentItems = {
	title: 'Gestion de Pagos',
	items: [
		{
			label: 'Cuadre del día',
			icon: Coins,
			href: '/dashboard/cuadre',
		},
		{
			label: 'Facturas',
			icon: HandCoins,
			href: '/dashboard/facturas',
		},
	],
};

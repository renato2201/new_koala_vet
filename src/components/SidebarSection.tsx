'use client';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { SidebarButton } from './SidebarButton';
import { usePathname } from 'next/navigation';

interface Props {
	title: string;
	items: {
		label: string;
		icon: LucideIcon;
		href: string;
	}[];
}

export const SidebarSection = ({ title, items }: Props) => {
	const path = usePathname();
	return (
		<div className="flex flex-col gap-8 w-full mb-12">
			<h2 className="text-xl font-semibold pl-2">{title}</h2>
			{items.map((item) => (
				<Link href={item.href} key={item.href}>
					<SidebarButton
						icon={item.icon}
						variant={path === item.href ? 'default' : 'ghost'}
					>
						{item.label}
					</SidebarButton>
				</Link>
			))}
		</div>
	);
};

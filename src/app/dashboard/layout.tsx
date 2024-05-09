import { SideBar } from '@/components/SideBar';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex divide-x">
			<SideBar />
			<main className="w-full p-4">{children}</main>
		</div>
	);
}

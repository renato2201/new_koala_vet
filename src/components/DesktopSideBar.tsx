import {} from 'lucide-react';
import { enterpriseItems, paymentItems, userItems } from '@/sidebarItems';
import { SidebarSection } from './SidebarSection';
import logo from '../../public/logo_koala_Vet.png';
import Image from 'next/image';
import { ModeToggle } from './ModeToggle';
const sections = [userItems, enterpriseItems, paymentItems];

export const DesktopSideBar = () => {
	return (
		<aside className="w-[270px] max-w-xs h-screen">
			<div className="h-full">
				<div className="flex items-center gap-5 bg-[#233242] py-5 px-3 h-20">
					<Image src={logo} alt="Koala Vet" width={50} height={0} />
					<h1 className="max-3 text-3xl font-semibold text-foreground text-white">
						Koala Vet
					</h1>
				</div>
				<div className="mt-5 px-3">
					{sections.map((section) => (
						<SidebarSection
							items={section.items}
							title={section.title}
							key={section.title}
						/>
					))}
					<ModeToggle />
				</div>
			</div>
		</aside>
	);
};

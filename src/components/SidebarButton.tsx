import { Button } from './ui/button';
import type { LucideIcon } from 'lucide-react';
import type { ButtonProps } from './ui/button';
import { cn } from '@/lib/utils';

interface SidebarButtonProps extends ButtonProps {
	icon?: LucideIcon;
}

export const SidebarButton = ({
	icon: Icon,
	className,
	children,
	...props
}: SidebarButtonProps) => {
	return (
		<Button
			className={cn('gap-2 justify-start text-xl w-full', className)}
			{...props}
		>
			{Icon && <Icon size={25} />}
			<span>{children}</span>
		</Button>
	);
};

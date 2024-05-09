import { SelectContent, SelectItem } from '../ui/select';
import type { Sizes } from './functions';
interface Props {
	sizes: Sizes[];
}

export const SizesSelect = ({ sizes }: Props) => {
	return (
		<SelectContent>
			{sizes.map((size) => (
				<SelectItem value={size.id} key={size.size}>
					{size.size}
				</SelectItem>
			))}
		</SelectContent>
	);
};

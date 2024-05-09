import { SelectContent, SelectItem } from '../ui/select';
import type { Species } from './functions';
interface Props {
	species: Species[];
}

export const SpecieSelect = ({ species }: Props) => {
	return (
		<SelectContent>
			{species.map((specie) => (
				<SelectItem value={specie.id} key={specie.name}>
					{specie.name}
				</SelectItem>
			))}
		</SelectContent>
	);
};

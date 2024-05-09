import {} from 'react';
import type { Breeds } from './functions';
import { SelectContent, SelectItem } from '../ui/select';

interface Props {
	breeds: Breeds[];
}

export const BreedSelect = ({ breeds }: Props) => {
	return (
		<SelectContent>
			{breeds.map((breed) => (
				<SelectItem value={breed.id} key={breed.name}>
					{breed.name}
				</SelectItem>
			))}
		</SelectContent>
	);
};

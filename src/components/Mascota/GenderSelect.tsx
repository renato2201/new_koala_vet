import { SelectContent, SelectItem } from '../ui/select';
import type { PetGenders } from './functions';
interface Props {
	genders: PetGenders[];
}

export const GenderSelect = ({ genders }: Props) => {
	return (
		<SelectContent>
			{genders.map((gender) => (
				<SelectItem value={gender.id} key={gender.gender}>
					{gender.gender}
				</SelectItem>
			))}
		</SelectContent>
	);
};

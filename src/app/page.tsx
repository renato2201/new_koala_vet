import { redirect } from 'next/navigation';

export default function NamePage() {
	redirect('/dashboard/main');
	return (
		<div>
			<h1>Hello Page</h1>
		</div>
	);
}

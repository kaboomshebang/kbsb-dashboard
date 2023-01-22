import { Container } from '@mui/material';
import { ExternalLink } from '@/components/utils/ExternalLink';

export const Footer = () => {
	const date = new Date();

	return (
		<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
			<ExternalLink src="Test">&#169; {date.getFullYear()} KBSB</ExternalLink>
		</Container>
	);
};

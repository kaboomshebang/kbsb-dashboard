import { Container } from '@mui/material';
import { ExternalLink } from '@/components/utils/ExternalLink';

export const Footer = () => {
	return (
		<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
			<ExternalLink src="Test">KBSB</ExternalLink>
		</Container>
	);
};

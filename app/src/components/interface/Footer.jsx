import { ExternalLink } from '@/components/utils/ExternalLink';

export const Footer = () => {
	return (
		<footer className="container mx-auto p-5">
			<ExternalLink src="Test">Kaboom Shebang</ExternalLink>
			<img
				className="fixed w-20 bottom-5 right-0"
				src="https://assets.kbsb.app/svg/shebang_3d_for_web.svg"
				alt="Shebang"
			/>
		</footer>
	);
};

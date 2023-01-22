import { ExternalLink } from '@/components/utils/ExternalLink';

export const NavMenu = (props) => {
	const currentYear = new Date().getFullYear();

	const clickHandler = () => {
		props.menuHandler(!props.menuState);
	};

	return (
		<>
			<div id="menu" className={props.menuState ? 'show-menu' : 'hide-menu'}>
				<div className="bar">
					<button onClick={clickHandler}>CLOSE BUTTON</button>
				</div>
				<div>
					<h3>Menu</h3>
					<ul>
						<li>Link</li>
						<li>Link</li>
					</ul>
					<ExternalLink>External link</ExternalLink>
				</div>
				<p>Copyright {currentYear}</p>
			</div>
		</>
	);
};

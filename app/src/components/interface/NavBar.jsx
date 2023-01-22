import { useState } from 'react';

// TODO: add dropdown menu
// import { NavMenu } from '@/components/interface/NavMenu';
// import { ExternalLink } from '@/components/utils/ExternalLink';

// MUI components
import { Box } from '@mui/material';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { Typography } from '@mui/material';

// MUI icons
import MenuIcon from '@mui/icons-material/Menu';

// assets
import logoKaboom from '@/assets/kaboom_shebang_logo_white.svg';

export const NavBar = () => {
	const [menu, setMenu] = useState(false);

	const handleClick = () => {
		setMenu(!menu);
		console.log('Clicked');
	};

	return (
		<>
			<AppBar>
				<Toolbar>
					<Box
						component="img"
						sx={{
							marginRight: '1rem',
							maxWidth: { xs: 200, md: 250 },
						}}
						alt="Kaboom"
						src={logoKaboom}
					/>
					<Typography
						component="h1"
						variant="h6"
						color="inherit"
						noWrap
						sx={{ flexGrow: 1 }}
					>
						Data Dashboard
					</Typography>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleClick}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	);
};

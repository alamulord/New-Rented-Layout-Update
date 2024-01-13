import '@styles/globals.css';
import Nav from '@components/Nav/Nav';
import Footer from '@components/Footer/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export const metadata = {
	title: 'Rentend',
	description: 'Explore and Buy your favorable Lands and Houses',
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<main>
					<Nav />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
};

export default RootLayout;

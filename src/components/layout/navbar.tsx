import { Navbar } from 'nextra-theme-docs';
import Image from 'next/image';
import { Github, LinkdinDarkIcon, LogoIcon } from '../svg';

const Logo = () => {
	return (
		<>
			<LogoIcon className="h-6 w-6" />
			<span style={{ marginLeft: '.4em', fontWeight: 800 }}>Chirag K.</span>
		</>
	);
};

const ExtraContent = () => {
	return (
		<a href="https://www.buymeacoffee.com/chiragkalsariya" target="_blank" rel="noopener noreferrer" className="nx-p-1">
			<Image
				src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
				alt="Buy Me A Coffee"
				width={120}
				height={28}
				style={{
					borderRadius: '6px',
				}}
			/>
		</a>
	);
};

export default function NavbarComponent() {
	return (
		<Navbar
			logo={<Logo />}
			projectLink="https://www.linkedin.com/in/chirag-kalsariya"
			projectIcon={<LinkdinDarkIcon className="h-7 w-7" />}
			chatLink="https://github.com/Chirag-kalsariya"
			chatIcon={<Github className="h-7 w-7" />}
		>
			<ExtraContent />
		</Navbar>
	);
}

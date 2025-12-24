import { Navbar } from "nextra-theme-docs";
import { Github, LinkdinDarkIcon, LogoIcon } from "../svg";

const Logo = () => {
    return (
        <>
            <LogoIcon className="h-6 w-6" />
            <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
                Chirag K.
            </span>
        </>
    );
};

const ExtraContent = () => {
    return (
        <a
            href="https://www.buymeacoffee.com/chiragkalsariya"
            target="_blank"
            rel="noopener noreferrer"
            className="nx-p-1"
        >
            <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
                alt="Buy Me A Coffee"
                style={{
                    height: '28px',
                    width: 'auto',
                    maxWidth: '120px',
                    borderRadius: '6px'
                }}
            />
        </a>
    );
}

export default function NavbarComponent() {
    return (
        <Navbar
            logo={<Logo />}
            projectLink="https://www.linkedin.com/in/chirag-kalsariya"
            projectIcon={<LinkdinDarkIcon className="h-7 w-7" />}
            chatLink="https://github.com/Chirag-kalsariya"
            chatIcon={<Github className="h-7 w-7" />}
            children={<ExtraContent />}
        />
    );
};
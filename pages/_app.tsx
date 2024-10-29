import '../src/css/global.module.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
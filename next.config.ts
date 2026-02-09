import nextra from 'nextra';

const withNextra = nextra({
	// ... Add Nextra-specific options here
	latex: true,
});

export default withNextra({
	// Next.js config options here
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.buymeacoffee.com',
			},
		],
	},
});

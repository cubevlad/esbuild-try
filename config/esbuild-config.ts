import { BuildOptions } from 'esbuild';
import path from 'path';

const mode = process.env.NODE_ENV || 'development';
const isDev = mode === 'development';
const isProd = mode === 'production';

const mainConfig: BuildOptions = {
	outdir: path.resolve(__dirname, '..', 'build'),
	entryPoints: [path.resolve(__dirname, '..', 'src', 'index.tsx')],
	entryNames: 'bundle',
	bundle: true,
	minify: isProd,
	sourcemap: isDev,
	tsconfig: path.resolve(__dirname, '..', 'tsconfig.json'),
};

export default mainConfig;

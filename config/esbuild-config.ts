import { BuildOptions } from 'esbuild';
import { CleanBuildFolderPlugin } from './build/plugins/clean-build-folder';
import { HTMLPlugin } from './build/plugins/html';
import path from 'path';

const mode = process.env.NODE_ENV || 'development';
const isDev = mode === 'development';
const isProd = mode === 'production';

const mainConfig: BuildOptions = {
	outdir: path.resolve(__dirname, '..', 'build'),
	entryPoints: [path.resolve(__dirname, '..', 'src', 'index.tsx')],
	entryNames: '[dir]/bundle.[name]-[hash]',
	allowOverwrite: true,
	bundle: true,
	minify: isProd,
	sourcemap: isDev,
	tsconfig: path.resolve(__dirname, '..', 'tsconfig.json'),
	metafile: true,
	loader: {
		'.png': 'file',
		'.svg': 'file',
		'.jpg': 'file',
	},
	plugins: [CleanBuildFolderPlugin, HTMLPlugin()],
};

export default mainConfig;

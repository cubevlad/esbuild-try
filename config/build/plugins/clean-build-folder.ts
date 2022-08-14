import { Plugin } from 'esbuild';
import { rm } from 'fs/promises';

export const CleanBuildFolderPlugin: Plugin = {
	name: 'CleanBuildFolderPlugin',
	setup(build) {
		build.onStart(async () => {
			try {
				const buildFolder = build.initialOptions.outdir;
				if (buildFolder) {
					await rm(buildFolder, { recursive: true });
				}
			} catch (error) {
				console.error(error, 'Не удалось очистить папку');
			}
		});
	},
};

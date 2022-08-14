import { Plugin } from 'esbuild';
import { rm, writeFile } from 'fs/promises';
import path from 'path';

interface HTMLPluginOptions {
	jsPaths?: string[];
	cssPaths?: string[];
}

const preparePaths = (paths: string[]) => {
	return paths.reduce<string[][]>(
		(acc, path) => {
			const [js, css] = acc;
			const splittedFileName = path.split('/').pop();

			if (splittedFileName?.endsWith('.js')) js.push(splittedFileName);
			else if (splittedFileName?.endsWith('.css')) css.push(splittedFileName);

			return acc;
		},
		[[], []],
	);
};

const renderHTMLTemplate = (options: HTMLPluginOptions): string => {
	return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            ${options.cssPaths
							?.map((path) => `<link href=${path} rel="stylesheet"></link>`)
							.join(' ')}
          </head>
          <body>
            <div id="root"></div>
            ${options.jsPaths?.map((path) => `<script src=${path}></script>`).join(' ')}
          </body>
        </html>
      `;
};

export const HTMLPlugin = (): Plugin => {
	return {
		name: 'HTMLPlugin',
		setup(build) {
			build.onEnd(async (res) => {
				const buildFolder = build.initialOptions.outdir;
				const outputs = res.metafile?.outputs;
				const [jsPaths, cssPaths] = preparePaths(Object.keys(outputs || {}));

				if (buildFolder) {
					await writeFile(
						path.resolve(buildFolder, 'index.html'),
						renderHTMLTemplate({ jsPaths, cssPaths }),
					);
				}
			});

			build.onEnd(() => {});
		},
	};
};

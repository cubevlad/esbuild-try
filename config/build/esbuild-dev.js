const EsBuildConfig = require('esbuild');
const mainConfig = require('../esbuild-config');
const PORT = process.env.PORT || 3000;

EsBuildConfig.serve(
	{
		servedir: mainConfig.outdir,
		port: PORT,
	},
	{
		...mainConfig,
	},
).then(() => console.log('server started on http://localhost:' + PORT));

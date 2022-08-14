import EsBuildConfig from 'esbuild';
import mainConfig from '../esbuild-config';
const PORT = Number(process.env.PORT || 3000);

EsBuildConfig.serve(
	{
		servedir: mainConfig.outdir,
		port: PORT,
	},
	{
		...mainConfig,
	},
).then(() => console.log('server started on http://localhost:' + PORT));

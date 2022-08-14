import EsBuildConfig from 'esbuild';
import mainConfig from '../esbuild-config';

EsBuildConfig.build(mainConfig).catch((e) => console.log(e));

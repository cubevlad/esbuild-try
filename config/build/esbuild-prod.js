const EsBuildConfig = require('esbuild');
const mainConfig = require('../esbuild-config');

EsBuildConfig.build(mainConfig).catch((e) => console.log(e));

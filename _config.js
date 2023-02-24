import lume from "lume/mod.ts";

const site = lume({
	dest: "./_distribution",
	src: "./source"
});

site.copy("favicon.ico")
	.copy("manifest.webmanifest")
	.copy([".png", ".svg"])
	.loadPages([".html"])
	.loadAssets([".css", ".js"])
;

export default site;

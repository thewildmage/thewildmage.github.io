import lume from "lume/mod.ts";

import anchorHeadings from "plugins/anchor_headings.ts";
import { formatWithPrettier } from "plugins/format.js";

const site = lume({
	dest: "./_distribution",
	src: "./source",
});

site.copy("favicon.ico")
	.copy("manifest.webmanifest")
	.copy([".png", ".svg"])
	.loadPages([".html"])
	.loadAssets([".css", ".js"])
	.use(anchorHeadings)
	.process([".css", ".html", ".js"], formatWithPrettier);

export default site;

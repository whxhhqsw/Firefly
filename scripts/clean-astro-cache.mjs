import { rmSync } from "node:fs";

for (const cachePath of [".astro", "node_modules/.astro"]) {
	rmSync(cachePath, { recursive: true, force: true });
}

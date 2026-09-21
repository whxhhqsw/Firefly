import { rmSync } from "node:fs";

rmSync(".astro", { recursive: true, force: true });

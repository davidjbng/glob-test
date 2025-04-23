import { glob } from "glob";
import fastGlob from "fast-glob";

const testGlob = await glob("*.txt", { cwd: "./test" });
console.log("`glob`", testGlob);

const testFastGlob = await fastGlob("*.txt", { cwd: "./test" });
console.log("`fast-glob`", testFastGlob);

const sortedGlob = testGlob.sort((a, b) => a.localeCompare(b));
console.log("`glob` (sorted)", sortedGlob);

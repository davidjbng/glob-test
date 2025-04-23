import { glob } from "glob";
import fastGlob from "fast-glob";

const testGlob = await glob("*.txt", { cwd: "./test" });
console.log("testGlob", testGlob);

const sortedGlob = testGlob.sort((a, b) => a.localeCompare(b));
console.log("sortedGlob", sortedGlob);

const testFastGlob = await fastGlob("*.txt", { cwd: "./test" });
console.log("testFastGlob", testFastGlob);

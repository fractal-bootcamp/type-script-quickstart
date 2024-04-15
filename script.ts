/** my-script.ts **/
import arg from "arg";

const argument = arg({
    '--location': String,
});

const location = argument["--location"];

if (!location) {
    throw new Error("Please provide a location with --location");
}

console.log(`There's a bun in the ${location}!`);
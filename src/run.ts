#!/usr/bin/env node

import { program } from "commander";
import init from "./commands/init.js";
import initShowcase from "./commands/showcase.js";

program
  .description("Init LamanHub for Development")
  .argument("<destination>", "Destination/App name")
  .option("-s, --showcase <REPOSITORY>", "Showcase repository");

program.parse();

const options = program.opts();
if (options.showcase) {
  initShowcase(options.showcase, program.args[0]);
} else {
  init(program.args[0]);
}

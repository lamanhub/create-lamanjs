#!/usr/bin/env node

import { program } from "commander";
import init from "./commands/init.js";

program
  .description("Init LamanHub for Development")
  .argument("<destination>", "Destination/App name");

program.parse();

init(program.args[0]);

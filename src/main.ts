import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";

await new Command()
  .name("Hello Cliffy")
  .version("0.1.0")
  .description("Hello Cliffy と出力するだけのCLIツールです")
  .arguments("<args>")
  .action((_option, ..._args) => {
    console.log("Hello Cliffy!!");
  })
  .parse(Deno.args);

/**
 * @author Kaiz Offical - Code Curi
 * @title Code Curi Judge for Scratch 3
 * @description A judge to auto check whether user complete the exercises' requirements or not using code by Scratch 3
 * @version 1.0.0
 * @license MIT
 */

Scratch.translate.setup({});

let io = { input: null, output: null };

function setInput(input) {
  io.input = input;
}

function setOutput(output) {
  io.output = output;
}
class CuriScratch {
  getInfo() {
    return {
      id: "curiscratch",
      name: Scratch.translate("Curi Scratch"),
      docsURI:
        "https://github.com/Code-Curi/Scratch-Judge/blob/main/extension/",
      blocks: [
        {
          opcode: "ask_input",
          blockType: Scratch.BlockType.COMMAND,
          text: Scratch.translate("ask for user input [data]"),
          arguments: {
            data: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: Scratch.translate("User Data"),
            },
          },
        },
        {
          opcode: "print_output",
          blockType: Scratch.BlockType.COMMAND,
          text: Scratch.translate("print out output [data]"),
          arguments: {
            data: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: Scratch.translate("User Data"),
            },
          },
        },
        {
          opcode: "get_input",
          blockType: Scratch.BlockType.REPORTER,
          text: Scratch.translate("get input"),
        },
      ],
    };
  }
  ask_input({ data }) {
    setInput(data);
  }
  print_output({ data }) {
    setOutput(data);
  }
  get_input() {
    return io.input;
  }
}
Scratch.extensions.register(new CuriScratch());

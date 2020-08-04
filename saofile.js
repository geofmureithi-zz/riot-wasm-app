module.exports = {
    prompts: [
      {
        name: "name",
        message: `What's the name of your new project`,
      },
      {
        name: "description",
        message: "How would your describe your project",
        default: `My Riot Wasm project`,
      },
      {
        name: "framework",
        message: "What framework would you like to use?",
        type: "list",
        choices: ["riot"],
      },
    ],
    actions: function () {
      if (this._answers.framework === "riot") {
        return [
          {
            type: "add",
            files: "**",
          },
          {
            type: "move",
            patterns: {
              "_package.riot.json": "package.json",
              riot_src: "src",
            },
          },
          {
            type: "remove",
            files: ["_*.json", "_*.*.config.js", "*_src"],
          },
        ];
      }
    },
    async completed() {
      this.gitInit();
      await this.npmInstall();
    },
  };
"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
var fs = require("fs");
var pageTemplate_1 = require("./templates/pages/pageTemplate");
var blockTemplate_1 = require("./templates/blocks/blockTemplate");
var indexTemplate_1 = require("./templates/containers/indexTemplate");
var pageViewTemplate_1 = require("./templates/containers/pageViewTemplate");
var usePageTemplate_1 = require("./templates/containers/usePageTemplate");
inquirer_1["default"]
    .prompt([
    {
        type: 'list',
        message: 'What do you want to do: ',
        name: 'todo',
        choices: ['Generate complete page', 'Exit'],
        "default": 'Yes'
    },
    {
        message: 'Enter page name: ',
        name: 'pageName',
        when: function (answers) {
            return answers.todo === 'Generate complete page';
        }
    }
])
    .then(function (answers) {
    var todo = answers.todo, pageName = answers.pageName;
    if (todo === 'Exit') {
        return;
    }
    if (todo === 'Generate complete page') {
        fs.mkdir("./src/containers/" + pageName + "Page", function (err) {
            if (err)
                throw err;
        });
        fs.writeFile("./src/containers/" + pageName + "Page/index.tsx", indexTemplate_1["default"](pageName), function (err) {
            if (err)
                throw err;
        });
        fs.writeFile("./src/containers/" + pageName + "Page/" + pageName + "PageView.tsx", pageViewTemplate_1["default"](pageName), function (err) {
            if (err)
                throw err;
        });
        fs.writeFile("./src/containers/" + pageName + "Page/use" + pageName + "Page.ts", usePageTemplate_1["default"](pageName), function (err) {
            if (err)
                throw err;
            console.log('Containers finished.');
        });
        fs.mkdir("./src/components/blocks/" + pageName + "Page", function (err) {
            if (err)
                throw err;
        });
        fs.writeFile("./src/components/blocks/" + pageName + "Page/index.ts", blockTemplate_1["default"](pageName), function (err) {
            if (err)
                throw err;
            console.log('Blocks finished.');
        });
        fs.writeFile("./src/pages/" + pageName.toLowerCase() + ".tsx", pageTemplate_1["default"](pageName), function (err) {
            if (err)
                throw err;
            console.log('Success!');
        });
    }
})["catch"](function (error) {
    if (error.isTtyError) {
        console.error('Prompt could not be rendered in the current environment');
    }
    else {
        console.error('Something went wrong', error);
    }
});

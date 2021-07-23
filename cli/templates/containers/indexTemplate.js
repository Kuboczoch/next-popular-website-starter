"use strict";
exports.__esModule = true;
var indexTemplate = function (pageName) {
    return "import React from 'react'\n\nimport { I" + pageName + "PageProps } from '../../pages/" + pageName.toLowerCase() + "'\n\nimport use" + pageName + "Page from './use" + pageName + "Page'\nimport " + pageName + "PageView from './" + pageName + "PageView'\n\nconst " + pageName + "Page = (props: I" + pageName + "PageProps) => {\n  const state = use" + pageName + "Page(props)\n  return <" + pageName + "PageView {...props} {...state} />\n}\n\nexport default " + pageName + "Page\n";
};
exports["default"] = indexTemplate;

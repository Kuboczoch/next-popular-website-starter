"use strict";
exports.__esModule = true;
var pageViewTemplate = function (pageName) {
    return "import React from 'react'\n\nimport { I" + pageName + "PageProps } from '../../pages'\nimport { I" + pageName + "PageStateProps } from './use" + pageName + "Page'\n\nimport " + pageName + "Page from '../../components/blocks/" + pageName + "Page'\n\ninterface I" + pageName + "PageViewProps extends I" + pageName + "PageProps, I" + pageName + "PageStateProps {}\n\nconst " + pageName + "PageView = ({}: I" + pageName + "PageViewProps) => (\n  <" + pageName + "Page>\n    <h1>next-popular-website-starter</h1>\n  </" + pageName + "Page>\n)\n\nexport default " + pageName + "PageView\n";
};
exports["default"] = pageViewTemplate;

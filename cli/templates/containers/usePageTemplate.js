"use strict";
exports.__esModule = true;
var usePageTemplate = function (pageName) {
    return "import { I" + pageName + "PageProps } from '../../pages'\n\nexport interface I" + pageName + "PageStateProps {}\n\nconst use" + pageName + "Page = ({}: I" + pageName + "PageProps): I" + pageName + "PageStateProps => {\n  return {}\n}\n\nexport default use" + pageName + "Page\n";
};
exports["default"] = usePageTemplate;

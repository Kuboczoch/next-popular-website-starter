"use strict";
exports.__esModule = true;
var blockTemplate = function (pageName) {
    return "import styled from '@emotion/styled'\n\nconst " + pageName + "Page = styled('div')``\n\nexport default " + pageName + "Page\n";
};
exports["default"] = blockTemplate;

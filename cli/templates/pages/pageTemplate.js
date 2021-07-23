"use strict";
exports.__esModule = true;
var pageTemplate = function (pageName) {
    return "import React from 'react'\n\nimport Layout from '../components/elements/Layout'\nimport " + pageName + "Page from '../containers/" + pageName + "Page'\nimport getLayoutData, { ILayoutData } from '../utils/contentful/models/getLayoutData'\n\nexport interface I" + pageName + "PageProps extends ILayoutData {}\n\nconst " + pageName + " = (props: I" + pageName + "PageProps) => (\n  <Layout {...props}>\n    <" + pageName + "Page {...props} />\n  </Layout>\n)\n\nexport const getStaticProps = async (): Promise<I" + pageName + "PageProps> => {\n  const layout = await getLayoutData()\n\n  return {\n    props: {\n      layout\n    }\n  }\n}\n\nexport default " + pageName + "\n";
};
exports["default"] = pageTemplate;

import { visit } from "unist-util-visit";

export function remarkBaseUrl(base) {
  return function (tree) {
    visit(tree, ["image", "link"], (node) => {
      if (node.url && node.url.startsWith("/") && !node.url.startsWith("//")) {
        node.url = `${base}${node.url}`;
      }
    });
  };
}

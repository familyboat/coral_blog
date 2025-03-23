import lume from "lume/mod.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import blog from "blog/mod.ts";
import { zhCN } from "date-fns/locale";

const site = lume();

site.ignore("./posts/instructions.md");
// 为了避免版权纠纷，移除下列内容
site.ignore((path) => {
  return path.includes("posts/translation_methods")
})

site.use(blog({
  date: {
    locales: {
      zhCN,
    },
  },
}));

site.use(lightningCss());

site.copy("/font-files");

export default site;

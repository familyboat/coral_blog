import lume from "lume/mod.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import blog from "blog/mod.ts";
import { zhCN } from "date-fns/locale";

const site = lume();

site.ignore("./posts/instructions.md");

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

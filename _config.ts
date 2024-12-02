import lume from "lume/mod.ts";
import blog from "blog/mod.ts";
import { zhCN } from "date-fns/locale";

const site = lume();

site.use(blog({
  date: {
    locales: {
      zhCN,
    },
  },
}));
site.ignore("./posts/instructions.md");
site.copy("/font-files");

export default site;

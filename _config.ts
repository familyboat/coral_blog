import lume from "lume/mod.ts";
import blog from "blog/mod.ts";

const site = lume();

site.use(blog());
site.ignore("./posts/instructions.md");

export default site;

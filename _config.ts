import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import anchor from "markdown-it-anchor";
import {slugify} from "@std/text/unstable-slugify";

const site = lume({
  src: "./src",
}, {
  "markdown": {
    plugins: [
      [
        anchor,
        {
          permalink: anchor.permalink.linkInsideHeader({
            symbol: `<span class="sr-only">Jump to heading</span><span aria-hidden="true">#</span>`
          }),
          slugify: (s: string) => slugify(s),
          level: 2,
        },
      ]
    ]
  }
});

site.use(jsx())

site.use(tailwindcss())
site.use(postcss())

export default site;

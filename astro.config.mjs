// Static export: `npm run build` writes plain files to dist/, which nginx
// serves (deploy/). Every page is a folder with an index.html, so URLs end
// in a slash (/download/), like silentsilo.com.
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://whereti.com",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  // No dev toolbar: the site loads nothing that is not its own.
  devToolbar: { enabled: false },
});

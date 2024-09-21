import degit from "degit";
import { resolve } from "path";
import { getShowcase } from "../api/showcase.js";

export default async function initShowcase(
  repository: string,
  dest: string = "my-laman-app"
) {
  const showcase = await getShowcase(repository);
  const destPath = resolve(dest);
  console.log(
    `Scaffolding ${showcase.attributes.name} project in ${destPath}\n`
  );

  const emitter = degit(showcase.attributes.repository, {});

  emitter.on("info", (info) => {
    console.log(info.message);
  });

  emitter.clone(destPath).then(() => {
    console.log(`✅ Done. Now run:\n`);
    console.log("cd " + dest);
    console.log("npm install");
    console.log("npm run dev");
  });
}

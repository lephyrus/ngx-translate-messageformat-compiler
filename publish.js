const distDir = "dist";
const pkg = require(`./${distDir}/package.json`);
const packageName = `${pkg.name}-${pkg.version}.tgz`;
const { spawn, spawnSync } = require("child_process");
const tar = require("tar");

const pack = async (dst, src) => {
  return await tar.c(
    {
      gzip: true,
      file: dst
    },
    src
  );
};

const publish = async package => {
  return new Promise((resolve, reject) => {
    const npm = spawn(
      "npm",
      ["publish", "--registry  https://registry.npmjs.org", package],
      {
        stdio: "inherit",
        shell: true
      }
    );
    npm.on("exit", code => (code > 0 ? reject(code) : resolve(code)));
    npm.on("error", error => reject(error));
  });
};

console.log(`[pack] ${distDir} to ${packageName}...`);
pack(packageName, [distDir])
  .then(() => {
    console.log("[pack] Done");
    console.log(`[publish] ${packageName}...`);
    return publish(packageName);
  })
  .then(console.log.bind(console, "[publish] Done"))
  .catch(error => console.error(`Failed with ${error}`));

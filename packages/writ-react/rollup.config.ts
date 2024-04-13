import createRollupConfig from "@exile-watch/rollup-config";

export default createRollupConfig({
  // required to recognize shared deps installed to workspace root
  sassIncludePaths: ["src", "node_modules", "../../node_modules"],
  externals: ["@mantine/core", "@mantine/hooks"],
  outputFormats: ["cjs", "module"],
});

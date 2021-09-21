import ejs from "ejs";

export default (config) => {
  const code = ejs.render(templateCode.toString(), {
    middleware: config.middleware,
    packageName: config.packageName,
  });

  return code;
};

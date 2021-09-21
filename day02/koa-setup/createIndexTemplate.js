import ejs from "ejs";

export default (config) => {
  const code = ejs.render(templateCode.toString(), {
    middleware: config.middleware,
    port: config.port,
  });

  return code;
};

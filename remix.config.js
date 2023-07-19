/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
  },
};

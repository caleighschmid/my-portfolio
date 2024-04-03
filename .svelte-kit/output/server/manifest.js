export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/particles.json","favicon.png","images/.DS_Store","images/profile.png","images/profile1.png","images/profile2.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cu6xItbv.js","app":"_app/immutable/entry/app.OI7HFF2K.js","imports":["_app/immutable/entry/start.Cu6xItbv.js","_app/immutable/chunks/entry.1vyW8DQG.js","_app/immutable/chunks/scheduler.DGpLaggK.js","_app/immutable/entry/app.OI7HFF2K.js","_app/immutable/chunks/scheduler.DGpLaggK.js","_app/immutable/chunks/index.CeTnxqAJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

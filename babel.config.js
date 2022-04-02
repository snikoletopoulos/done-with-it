module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					root: ["./app"],
					extentions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
				},
			],
		],
	};
};

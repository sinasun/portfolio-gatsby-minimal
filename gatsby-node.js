const path = require('path');
exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'@components': path.resolve(__dirname, 'src/components'),
				'@context': path.resolve(__dirname, 'src/context'),
				'@styles': path.resolve(__dirname, 'src/styles'),
				'@static': path.resolve(__dirname, 'static'),
				'@hooks': path.resolve(__dirname, 'src/hooks'),
				'@config': path.resolve(__dirname, 'config'),
				'@utils': path.resolve(__dirname, 'src/utils')
			}
		}
	});
};

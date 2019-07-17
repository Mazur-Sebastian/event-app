module.exports = {
	devServer: {
		host: 'localhost',
		public: '0.0.0.0:8080',
		watchOptions: {
			ignored: /node_modules/,
			aggregateTimeout: 300,
			poll: 1000,
		},
	},
};

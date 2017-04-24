const root = require('app-root-path').path;
module.exports = {
    entry: `${root}/bin/www.ts`,
    target: 'node',
    externals: [
        {
            "react": "React",
            "react-dom": "ReactDOM"
        },
        /^[a-z\-0-9]+$/ // Ignore node_modules folder
    ],
    output: {
        filename: 'bundle.js', // output file
        path: `${root}/dist`,
        libraryTarget: "commonjs"
    },
    resolve: {
        // Add in `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', ".json"],
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};
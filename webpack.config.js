const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
    entry: "./src/entry.js",
    mode: "development",
    devServer: {
        port: 3005,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]--[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "ExampleRemoteAuth0",
            filename: "remoteEntry.js",
            exposes: {
              "./LoginButton": "./src/components/loginButton",
              "./LogoutButton": "./src/components/logoutButton",
              "./Profile": "./src/components/profile",
            },
            shared: {
              ...dependencies,
              react: {
                singleton: true,
                requiredVersion: dependencies["react"],
              },
              "react-dom": {
                singleton: true,
                requiredVersion: dependencies["react-dom"],
              },
              "react-router-dom": {
                singleton: true,
                requiredVersion: dependencies["react-router-dom"],
              },
              lodash: {
                  singleton: true,
                  requiredVersion: dependencies["lodash"],
              },
              "@auth0/auth0-react": {
                singleton: true,
                requiredVersion: dependencies["@auth0/auth0-react"],
              },
            },
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    target: "web",
};
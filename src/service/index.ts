import express from "express";
import Webpack, { Configuration } from "webpack";
import webpackConfig from "../../webpack.config";
import WebpackDevMiddleware from "webpack-dev-middleware";
import { config } from "dotenv";

config();
const PORT = process.env.PORT;
const app = express();
const webpackCompiler = Webpack(webpackConfig as Configuration);

app.use(
  WebpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);

const router = express.Router();
router.get("/sample", (req, res) => res.send({ content: "Hello world" }));

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});

const express = require('express')
const style = require('stylus');
const [nodeName, programName, port, stylePath] = process.argv;


/* Middlewares */
const styleMiddleware = style.middleware(stylePath);
const staticMiddleware = express.static(stylePath || path.join(__dirname, 'public'));
/* end */

const app = express();
app.use(styleMiddleware);
app.use(staticMiddleware);
app.set('view engine', 'html');
app.set('views', stylePath);

const HomeController = (req, res) => {
	res.render('index');
};

app.get('/main.css', HomeController);
app.listen(port);

const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user')

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
});

models.db.authenticate().
then(() => {
  console.log('connected to the database');
});

const sync = async () => {
  await models.db.sync({ force: true });
  console.log("models have been synced with database. so they're now tables");
}
sync();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

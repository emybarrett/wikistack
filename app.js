const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const models = require('./models');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false }));

app.get('/', (rec, res) => {
  res.send(layout(''));
})

models.db.authenticate().
then(() => {
  console.log('connected to the database');
});

const sync = async () => {
  await models.db.sync({ force: true });
  console.log("models have been synced with database. so they're now tables");
}
sync();

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

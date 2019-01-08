const PORT = process.env.PORT || 8080;

const app = express();

connection.query('SELECT * FROM `burgers`', (err, results, field) => {
  console.table(results);
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
})
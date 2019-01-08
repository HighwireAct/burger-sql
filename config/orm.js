const connection = require("./connection.js");

// Creating orm object and methods
const orm = {
  /**
   * Selects and returns all rows from burgers table
   */
  selectAll: function() {
    connection.query('SELECT * FROM burgers', (err, results, fields) => {
      if (err) throw error;
      return results;
    })
  },
  /**
   * Adds a row to burgers table
   * @param {string} burgerName - Name of burger to be added
   */
  insertOne: function(burgerName) {
    connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [burgerName]);
  },
  /**
   * Toggles/updates 'devoured' boolean of a given burger entry
   * @param {string} burgerName - Name of burger entry to update
   */
  updateOne: function(burgerName) {
    connection.query('UPDATE burgers SET `devoured` = true WHERE `burger_name` = ?', [burgerName]);
  }
}

// Exporting orm
module.exports = orm;
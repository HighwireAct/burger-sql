const connection = require("./connection.js");

// Creating orm object and methods
const orm = {
  /**
   * Reads all entries in a given table and returns an array of objects
   * containing their data.
   * @argument {string} table - name of table to read from
   * @argument {array} keyNames - array of key names corresponding to the columns
   * @returns {array} - array of objects corresponding to entries
   */
  selectAll: function(table, keyNames) {
    // Array of objects representing entries
    let objects = [];

    let queryString = `SELECT * FROM ??`;
    connection.query(queryString, [table], (err, results) => {
      if (err) throw err;
      // Loops through entries in table
      for (entry of results) {
        // Create empty object
        let entryObj = {};
        // Index used to assign key names to entry object using keyNames arg
        let keyIndex = 0;
        // Loop through columns in each entry
        for (column in entry) {
          // Maps data in a given column to its corresponding obj property
          entryObj[keyNames[keyIndex]] = entry[column];
          keyIndex++;
        }

        // Push entry object into array
        objects.push(entryObj);
      }
      return objects;
    });
  },
  insertOne: function(obj, table) {

  },
  updateOne: function(obj, table) {

  }
}

// Orm tests
orm.selectAll('burgers', ['id', 'burgerName', 'devoured']);

// Exporting orm
module.exports = orm;


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('lists')
    .then(function () {
      // Inserts seed entries
      return knex('lists').insert([
        {title: 'Grocery list', },
        {title: 'Work out', },
        {title: 'ToDo', },
      ]);
    });
};

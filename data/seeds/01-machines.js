/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('machines').truncate()
  await knex('machines').insert([
    { name: "Toyota" },
    { name: "Mazak" },
    { name: "Haas" },
    { name: "Mitsibishi" },
  ]);
};

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CostInSchema extends Schema {
  up () {
    this.create('cost_ins', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cost_ins')
  }
}

module.exports = CostInSchema

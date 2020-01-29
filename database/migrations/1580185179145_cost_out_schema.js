'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CostOutSchema extends Schema {
  up () {
    this.create('cost_outs', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cost_outs')
  }
}

module.exports = CostOutSchema

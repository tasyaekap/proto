'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CostWhOutsSchema extends Schema {
  up () {
    this.create('cost_wh_outs', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cost_wh_outs')
  }
}

module.exports = CostWhOutsSchema

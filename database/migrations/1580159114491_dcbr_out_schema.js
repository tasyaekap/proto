'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DcbrOutSchema extends Schema {
    up() {
        this.create('dcbr_outs', (table) => {
            table.enu('loc', ['All', 'Dc', 'Branch', 'Customer'])
            table.string('SONumb', 32).primary()
            table.enu('STNumb', ['MRP', 'ARF', 'PRF'])
            table.enu('Dest', ['Customer', 'DC', 'Branch'])
            table.enu('ItGrp', ['Equipment', 'Accessoris', 'ClinicalDevices', 'DemoUnits'])
            table.integer('SKU/Part/item/Id', 4)
            table.text('itDesc')
            table.string('SrlNum', 32)
            table.string('BtchNum', 32)
            table.integer('OrdrdQty', 4)
            table.enu('orderStts', ['Open', 'Completed'])
            table.integer('qtyIssued', 4)
            table.date('orderCreated')
            table.date('picked')
            table.date('QcChecked')
            table.date('ETD')
            table.date('ATD')
            table.timestamps()
        })
    }

    down() {
        this.drop('dcbr_outs')
    }
}

module.exports = DcbrOutSchema
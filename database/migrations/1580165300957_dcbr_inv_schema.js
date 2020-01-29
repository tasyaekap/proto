'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DcbrInvSchema extends Schema {
    up() {
        this.create('dcbr_invs', (table) => {
            table.enu('loc', ['All', 'Dc', 'Branch', 'Customer'])
            table.enu('tyOfStrg', ['Stock', 'Consignment'])
            table.string('principle', 32)
            table.enu('itGrp', ['Equipment', 'Accessoris', 'ClinicalDevices', 'DemoUnits'])
            table.integer('SKU/Part/item/Id', 4)
            table.text('itDesc')
            table.string('SrlNum', 32).primary()
            table.string('BtchNum', 32)
            table.integer('TtlQty', 4)
            table.integer('QtyAvail', 4)
            table.integer('QtyRcpt', 4)
            table.integer('QtyAllwd', 4)
            table.integer('QtyDeffect', 4)
            table.integer('QtyDmgd', 4)
            table.integer('QtyExpired', 4)
            table.date('ExpDate')
            table.date('ReceivedDate')
            table.integer('AgingDays', 4)
            table.timestamps()
        })
    }

    down() {
        this.drop('dcbr_invs')
    }
}

module.exports = DcbrInvSchema
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DcbrInSchema extends Schema {
    up() {
        this.create('dcbr_ins', (table) => {
            table.enu('loc', ['DC', 'Branch'])
            table.string('PONumb', 20)
            table.string('principle', 32)
            table.enu('ItemGrp', ['Equipment', 'Accessories', 'Clinical Devices', 'Demo Units'])
            table.integer('SKU/Part/item/Id', 4)
            table.text('itDesc')
            table.string('SrlNum', 32).primary()
            table.string('BtchNum', 32)
            table.integer('QtyRcv', 4)
            table.date('arvAtDck')
            table.date('tallyShtCrtDt')
            table.date('GrCmpltd')
            table.enu('disc', ['Short', 'Excess', 'Damaged', 'Wrong'])
            table.test('sttsOfdisc')
            table.date('discClosing')
            table.timestamps()
        })
    }

    down() {
        this.drop('dcbr_ins')
    }
}

module.exports = DcbrInSchema
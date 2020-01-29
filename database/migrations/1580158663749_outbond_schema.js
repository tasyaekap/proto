'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OutbondSchema extends Schema {
    up() {
        this.create('outbonds', (table) => {
            table.string('org', 32)
            table.string('dst', 32)
            table.string('transport', 32)
            table.string('requestor', 32)
            table.string('SONumb', 32).primary()
            table.enu('STnumb', ['MRF', 'ARF', 'PRF'])
            table.string('SOMRef', 20)
            table.enu('MOT', ['Air', 'Sea', 'Land', 'Multi Modal'])
            table.string('transporter', 32)
            table.string('DNNumb', 20)
            table.string('itemGrp', 32)
            table.integer('grossWeight(Kg)', 10)
            table.integer('CBM/M3', 10)
            table.date('ETD')
            table.date('ATD')
            table.date('ETA')
            table.date('ATA')
            table.timestamps()
        })
    }

    down() {
        this.drop('outbonds')
    }
}

module.exports = OutbondSchema
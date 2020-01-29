'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InboundSchema extends Schema {
    up() {
        this.create('inbounds', (table) => {
            table.string('localSup', 32)
            table.string('PONumb', 20).primary()
            table.string('Origin', 32)
            table.enu('MOT', ['Air', 'Sea', 'Land'])
            table.string('freightFrwd', 32)
            table.string('HAWB/BL/DN', 32)
            table.string('CustBrkr', 32)
            table.string('itemGrp', 32)
            table.integer('grossWeight(Kg)', 10)
            table.integer('CBM/M3', 10)
            table.date('EtdOrg')
            table.date('AtdOrg')
            table.date('EtaDst')
            table.date('AtaDst')
            table.date('custClrnc')
            table.date('EtaDc')
            table.date('AtaDc')
            table.timestamps()
        })
    }

    down() {
        this.drop('inbounds')
    }
}

module.exports = InboundSchema
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 128).notNullable().unique()
        tbl.string('project_description', 128)
        tbl.boolean('project_completed').defaultTo(false);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
}
exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.boolean('task_completed').defaultTo(false);
        tbl.string('task_description', 128).notNullable()
        tbl.string('task_notes', 256)
        tbl.string('project_id')
            .notNullable()
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
}
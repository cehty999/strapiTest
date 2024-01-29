'use strict';

/**
 * todo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::todo.todo', ({ strapi }) => ({
    async create(ctx) {
        // let result = await strapi.service('api::todo.todo').cr.createTodo({
        //     ...ctx.request.body.data
        // });

        var users = await strapi.entityService.findMany('plugin::users-permissions.user');

        console.log(users)
        
        users.forEach(user => {
            console.log(user.fcm)
            strapi.notification.sendNotification(user.fcm, {
                notification: {
                    title: "Liked your quote",
                    body: "Liked your quote"
                }
            });
        });


        
        // ctx.body = result;
    }
}));


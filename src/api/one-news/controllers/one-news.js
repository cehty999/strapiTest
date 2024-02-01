'use strict';
/**
 *  one-news controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::one-news.one-news', ({ strapi }) => ({
    async create(ctx) {
        let users = await strapi.entityService.findMany('plugin::users-permissions.user');

        users.forEach(user => {
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

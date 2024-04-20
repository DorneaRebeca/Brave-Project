'use strict';

/**
 * copil service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::copil.copil');

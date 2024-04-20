'use strict';

/**
 * ppi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ppi.ppi');

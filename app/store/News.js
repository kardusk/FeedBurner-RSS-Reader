/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.store.News
 * @extends Ext.data.Store
 * Store which contains all the news related
 * to a single feed managed by the application.
 */
Ext.define('RSS.store.News', {
    extend: 'Ext.data.Store',
    requires: [
        'RSS.model.News',
        'Ext.tux.data.proxy.FeedBurner'
    ],
    config: {
        model: 'RSS.model.News',
        proxy: {
            type: 'feedburner',
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
    }    
});
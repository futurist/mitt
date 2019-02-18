/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
export default class mitt {
    constructor(all) {
        this.all = all || Object.create(null);
        this.removeListener = this.off;
    }
    /**
     * Register an event handler for the given type.
     *
     * @param  {String} type	Type of event to listen for, or `"*"` for all events
     * @param  {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on(type, handler) {
        (this.all[type] || (this.all[type] = [])).push(handler);
    }
    /**
     * Remove an event handler for the given type.
     *
     * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
     * @param  {Function} handler Handler function to remove
     * @memberOf mitt
     */
    off(type, handler) {
        if (this.all[type]) {
            this.all[type].splice(this.all[type].indexOf(handler) >>> 0, 1);
        }
    }
    /**
     * Invoke this.all handlers for the given type.
     * If present, `"*"` handlers are invoked after type-matched handlers.
     *
     * @param {String} type  The event type to invoke
     * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit(type, evt) {
        (this.all[type] || []).slice().map((handler) => {
            handler(evt);
        });
        (this.all['*'] || []).slice().map((handler) => {
            handler(type, evt);
        });
    }
}

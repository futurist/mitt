"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
class mitt {
    constructor(events) {
        this._events = events || Object.create(null);
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
        (this._events[type] || (this._events[type] = [])).push(handler);
    }
    /**
     * Remove an event handler for the given type.
     *
     * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
     * @param  {Function} handler Handler function to remove
     * @memberOf mitt
     */
    off(type, handler) {
        if (this._events[type]) {
            this._events[type].splice(this._events[type].indexOf(handler) >>> 0, 1);
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
        (this._events[type] || []).slice().map((handler) => {
            handler(evt);
        });
        (this._events['*'] || []).slice().map((handler) => {
            handler(type, evt);
        });
    }
}
exports.default = mitt;

// An event handler can take an optional event argument
// and should not return a value
type EventHandler = (event?: any) => void;
type WildCardEventHandler = (type: string, event?: any) => void

// An array of all currently registered event handlers for a type
type EventHandlerList = Array<EventHandler>;
type WildCardEventHandlerList = Array<WildCardEventHandler>;
// A map of event types and their corresponding event handlers.
type EventHandlerMap = {
	'*': WildCardEventHandlerList,
	[type: string]: EventHandlerList,
};

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
export default class mitt {
	_events: any;

	constructor(events: EventHandlerMap) {
		this._events = events || Object.create(null);
	}

	/**
	 * Register an event handler for the given type.
	 *
	 * @param  {String} type	Type of event to listen for, or `"*"` for all events
	 * @param  {Function} handler Function to call in response to given event
	 * @memberOf mitt
	 */
	on(type: string, handler: EventHandler) {
		(this._events[type] || (this._events[type] = [])).push(handler);
	}

	/**
	 * Remove an event handler for the given type.
	 *
	 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
	 * @param  {Function} handler Handler function to remove
	 * @memberOf mitt
	 */
	off(type: string, handler: EventHandler) {
		if (this._events[type]) {
			this._events[type].splice(this._events[type].indexOf(handler) >>> 0, 1);
		}
	}

	/**
	 * Invoke this.all handlers for the given type.
	 * If present, `"*"` handlers are invoked after type-matched handlers.
	 *
	 * Note: Manually firing "*" handlers is not supported.
	 *
	 * @param {String} type  The event type to invoke
	 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
	 * @memberOf mitt
	 */
	emit(type: string, evt: any) {
		(this._events[type] || []).slice().map((handler: EventHandler) => {
			handler(evt);
		});
		(this._events['*'] || []).slice().map((handler: WildCardEventHandler) => {
			handler(type, evt);
		});
	}
}

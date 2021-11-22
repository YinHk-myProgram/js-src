import EventEmitter from 'eventemitter2';

const eventEmitter = new EventEmitter();

const emitter2 = {
  on: (event, listener) => eventEmitter.on(event, listener),
  once: (event, listener) => eventEmitter.once(event, listener),
  onAny: (listener) => eventEmitter.onAny(listener),
  remove: (event, listener) => eventEmitter.removeListener(event, listener),
  removeAll: (event) => eventEmitter.removeAllListeners(event),
  emit: (event, ...param) => eventEmitter.emit(event, ...param),
  hasListener: (event) => eventEmitter.hasListener(event)
};

Object.freeze(emitter2);

export default emitter2;

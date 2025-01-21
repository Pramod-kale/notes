Node js notes
=============

MultiThread, process and threads
--------------------------------

Multithreading is a process of handling the multiple process running in different threads without affecting the process
of each other. suppose there are a several processes in queue to be executed and the each process may take some time to
execute so this kind of tasks might be blocking. so we need things to be in non-blocking manner and to be run
simultaneously so multi threading comes in picture.

whenever a new process needs to be executed a separate thread can be created and the thread will have shared memory
among other threads but will have private call stack. A thread can continue working on the tasks given to it and
complete it parallelly B thread is working on some task which is also needs to be done at the same time. we might get
into a situation where one thread is dependant on another thread to receive the data but the another thread is taking a
long time to complete the execution. this situation is known as Deadlocking

Javascript is a single threaded language, means that it runs on a single thread and any other tasks needs to execute
parallelly those will be handled asynchronously.

The observer pattern
--------------------

the observer pattern tells that the object and observer have a many to one relationship, object is the one who will
broadcast the changes and observer will subscribe to the changes and they will get notified when object exibits changes

Event Emitter
-------------

event emitter are like a event handler in terms of frontend dev, we create a instance of event emitter by using the
inbuilt class EventEmitter and we will create a event to listen to and when there is trigger point the respective block
will be executed for that (in this case we manually trigger that point)

const EventEmitter = require('events')
const celebrity = EventEmitter()

celebrity.on('post a selfie', (data) => {
console.log(data) // logs a string '1000 likes'
})

celebrity.emit('post a selfie', '1000 likes')


`on` method is used to create a event and takes two arguments event and a callback functions.
`emit` method used to trigger the event, it takes two arguments event to trigger and values to pass into a callback
function, second argument is optional
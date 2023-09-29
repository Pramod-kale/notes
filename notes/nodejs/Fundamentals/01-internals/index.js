//$ compiler vs interpreter notes can be found here: https://www.evernote.com/shard/s477/sh/7e984da4-a482-083b-3639-20af82cee69c/0nTI9MudcGpAdeR9NtTjljscIdfyXLH-d3rodJdkSQ-fuwuxg4AsTZ8YuA

//$ the link for the notes can be found here: https://www.evernote.com/shard/s477/sh/107bc03f-b42e-2a0c-29ce-eeda014f2493/ZK5N0makPwbs_T7-3ErCTqoLvMPnXgcjRoxhEQLcGnz81Uyrf8mn7H-A9w

const EventEmitter = require('events');

const cat = new EventEmitter();

cat.on('meow', (response) => {
    console.log(response)
})


cat.on('purr', (response) => {
    console.log(
        'cat seems ' + response
    )
})


cat.emit('meow', 'fishes yummy')
cat.emit('purr', 'sleepy')


process.on('exit', (object) => {
    console.log(object) // outputs: { code: 0 } 
})
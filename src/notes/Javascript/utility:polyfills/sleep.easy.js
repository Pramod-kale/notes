const sleepTimer = setTimeout(() => { }, 2000);

const sleeper = async (duration) => {
    console.log('first')
    await new Promise((resolve, reject) => setTimeout(resolve, duration))

    console.log('second')
}

sleeper(2000)
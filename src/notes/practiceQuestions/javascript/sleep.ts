const sleep = (time: number) => {
    const now = new Date().getTime();
    while (new Date().getTime() < now + time) {

    }
};


function greeting() {
    console.log("hello");
    sleep(3000);
    console.log("bye");
}

greeting();

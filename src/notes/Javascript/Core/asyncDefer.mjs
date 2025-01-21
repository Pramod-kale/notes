/*
async and defer are used to load the external scripts into our application effeciently

<script src="./testing.js"></script> 

|....................|                                |....................| 
    HTML parsing     |................|...............| HTML parsing continues
                      script download    script exec   

script is blocking the html parsing/rendering




<script async src="./testing.js"></script> 


|...............................|                                |....................| 
    HTML parsing                                         HTML parsing continues
         |......................|...............| 
            script download         script exec    

here script is downloaded asynchronously, along with parsing with html, once the script are downloaded
the execution blocks the html parsing/rendering, after this html continues to parsing


<script defer src="./testing.js"></script> 

                            HTML parsing
|..............................................................|
        |......................|            |......................|
            scripts download                        script exec

here it will download all the script async and starts the exec only after parsing completes.

when to use what?
async does not guarantee the order of the exec, but defer does guarantee the order of the exec.


defer.
In the application where multiple scripts are dependant on other, so order matters here, so defer executes them in order
so using defer helps in this situation, whereas async might break down the application


async
In the application where the scripts are independent of each other, so order does not matter here, so async executes them in parallel
so the scripts which does not depend on each other, such as google analytics scripts etc.. those can be used in async manner

*/
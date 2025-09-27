Q) Design a collaborative document editor that allows users to collaborate on a document in real-time.

Requirements exploration.

    functional
        any participant can edit/view the document
        Updates by peers on the same document are reflected automatically
        conflicts are resolved if participants are editing the same part
        all participants should see the same documents revision eventually
        Offline usage? not required at the moment
    Non-functional
        Updates by others are reflected in real time
        support up to 100 concurrent editors

    What is co llaborative editing actually consists.
        Responsive => actions taken by participants should be instantly reflected
        Real-time updates =>  actions taken by peers should be reflected near instantly
        Conflict-prone => during a session there is high chance of conflicts as participants work on same thing and modify the document
        Distributed => participants are free to come and go during a session, they may drop off anytime or join anytime
        Unpredictable => participants are not followed any pre planned scripts or anything, it is very unpredictable of behavior

    Note: the technical term for collaborative software is called as Groupware systems


Approach

    Since it is a complex system design, we will go through each aspect and look at the trade offs and make a decision on the overall approach

    Rendering and editing RTE
        RTE summary
            1)DOM with augmented fake cursors => use regular DOM containing formatted text using HTML elements and styling augmented with fake cursors, This approach is complex due to cursors height and positioning calculations needed.

            2)contenteditable attribute => by ading this attribute to DOM element, its content becomes editable and even supports keyboard shortcuts for bold, italics etc. however it behaves differently in different browsers and formatting options are limited.

            3) canvas element => this is an advanced approach that uses canvas element and rendering everything within the canvas element - text, layout, cursor etc. This approach basically sidesteps a lot of what the browser provides and required reimplmenting everything within the canvas context

            in realistic approach contenteditable attribute with custom event handlers is best suitable

    Google uses canvas for robust, consistency, performance wise, and is an overkill as well as complex to discuss hence will continue with html attribute.

    Request payload contents
        When a participant makes an update or receives an update from others, what should the request payload contain?

        There are two common approaches
        1) payload contains entire document
        2) payload contains only changes (delta)

    1) Payload contains entire documents
        *) Clear document state => recipients know the full state of document of sender was viewing when it was updated.
        *) Sender intentions aren't clear => When a document is updated, recipients do not know what changes were made unless they compare with their own version or the senders previous version, both of which are troublesome to compute.
        *) Not Scalable => as the doc grows, the amount of data to transmit will increase proportionally, for large documents each request will take longer to transmit

    2) Payload contains only Changes
        *) Small request payload size => Since we are transmitting only the changes, the payload size will be only about commands like insert, delete, formatting and metadata like cursor position
        *)Efficient request payload size => the documents length has no impact on the payload size, since the changesa re not reliant on the current document state.
        *) No document state info => it's not clear which version of the document the changes weere made against. This can be mitigated by including document revision number.

    Decision
        A short response time (under 500ms) is required for real time WYSIWIS(what you see is what i see) experience. if the response time is more users will see outdated version of the document, the cohesiveness of the session is ruined.

        Updates made by users should be communicated in a lightweight fashion, Thus request payload should contain only the changes

    Network architecture / communication model
        1) Client server model => central server
        2) Peer to peer => no central server, all users will act as server and client

        Which model to use?
        Although the client-server model seemingly has fewer advantages, the source of truth being on the server is an important functional property that makes or breaks the entire system:

        Database persistence: The document state has to be persisted in a database. Without a central server to save the document frequently, updates could be lost if clients disconnect before saving the document to the database.
        Source of truth: Since new participants are able to join at any time, having the source of truth on the server simplifies the logic of reliably obtaining the latest document – new participants can fetch the latest document from a single consistent location, the server.
        Optimize for reliability and performance: Reliability and performance are the most important factors for a seamless collaboration experience and making sure all participants are updated. In practice, most sessions will not see a large number of participants (> 20) at any given time; there will only be a few participants at most. We should optimize for reliability and performance rather than server costs.
        With these reasons in mind, a client-server model is preferred. P2P models are more suitable for applications like video chat, where request losses can be tolerated, and not all the data has to be persisted.

    Concurrency control model
        There are two kinds of operations that need to be talked about while discussing collaborative editors:
        1) local updates: updates made to the document by the user viewing it.
        2) Merge updates from peers: Updates made to document by peers.

        Updates have to be merged. Conflicts may arise if two users are editing the same section of document. eg; one person is adding a word to the same section while another is deleting the same section.

        Concurrency control is the activity of coordinating interfering actions that operate in parallel to maintain consistency and resolving conflicts that arise between users.

        They can be broadly classified into optimistic and pessimistic.


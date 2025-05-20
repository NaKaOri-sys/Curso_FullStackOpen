sequenceDiagram
    actor User
    participant browser
    participant server
	
	Note left of User: The user fill input note
    User->>browser: Press save button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {"message":"note created"}
    deactivate server

    Note right of browser: The browser executes the callback function that re draw notes and its not necessary to redirect client.
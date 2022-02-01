# Temperature Server

Very simple IoT server for demo purposes.
 - Collects temperatures through HTTP GET endpoint.
 - Visualizes all collected temperatures.
 - No authtehtication, no database.
 - Provides a simple API to view / add temperatures.

## Live Demo

View temperatures Web user interface: https://temperature-server.nakov.repl.co

API endpoint to view the last added temperature: https://temperature-server.nakov.repl.co/api/temperatures/last

API endpoint to add (collect) new temperature measurement: https://temperature-server.nakov.repl.co/api/temperatures/add/{new-value}

# Temperature Server

Very simple IoT server for educational purposes.
 - Collects temperatures through HTTP POST endpoint.
 - Visualizes all collected temperatures, with auto-refresh once per second.
 - No authentication, no database -> everyone can write, data is lost at server restart.
 - Provides a simple API to view / add temperatures.

## Live Demo

View temperatures Web user interface: https://temperature-server.nakov.repl.co

![image](https://user-images.githubusercontent.com/1689586/151980691-fc380a2b-e4b3-4e3e-b2f3-0e870adede13.png)

API endpoint to view the last added temperature:
```
GET https://temperature-server.nakov.repl.co/api/temperatures/last
```

![image](https://user-images.githubusercontent.com/1689586/151980888-9a12284d-7a3d-4194-964b-da1fbe0cdceb.png)


API endpoint to add (collect) new temperature measurement: 
```
POST /api/temperatures/add HTTP/1.1
Host: temperature-server.nakov.repl.co
Content-Type: application/x-www-form-urlencoded
Content-Length: 4

t=25
```

![image](https://user-images.githubusercontent.com/1689586/151980861-a3246693-a04e-43a2-a016-93a4281a1994.png)

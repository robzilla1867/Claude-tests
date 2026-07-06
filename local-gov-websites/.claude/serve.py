import functools
import http.server

handler = functools.partial(
    http.server.SimpleHTTPRequestHandler,
    directory="/Users/robholden/Documents/GitHub/Claude-tests/local-gov-websites/best-start-in-life-derbyshire",
)
http.server.HTTPServer(("localhost", 4173), handler).serve_forever()

###GPP.Worker-handle_request

+ self: the [GPP.Worker](#GPP.Worker)
+ request: The request to handle

Implement this method to handle requests, requests *MUST* be
handled asynchronously as this method should not block, call
[GPP.Worker.set_task_done](#GPP.Worker.set_task_done) when the request has been handled.


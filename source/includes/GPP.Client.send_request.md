###GPP.Client.send_request

+ self: A [GPP.Client](#GPP.Client) that will send the request.
+ request: A simple string that will be passed to the [GPP.Worker](#GPP.Worker).
+ retries: The number of times to retry before signaling that
the request was handled, -1 means retry forever.

This will make *self* send *request* to a [GPP.Queue](#GPP.Queue).


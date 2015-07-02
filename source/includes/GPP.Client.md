##GPP.Client

[GPP.Client](#GPP.Client) sends requests to a [GPP.Queue](#GPP.Queue), and emits a signal
with the possible reply and the status of the task once it has been executed.

A per-request retry limit can be set when calling [GPP.Client.send_request](#GPP.Client.send_request)

> Set up and start a simple client, which will send requests for numbers to be multiplied, and will not take 'No' for an answer.

```c

#include <glib-unix.h>
#include "gpp.h"

static gchar *
make_new_task (void)
{
  static int sequence = 0;
  gchar *task = g_strdup_printf ("%d", sequence);
  sequence++;

  g_print ("Doing task %s\n", task);
  return task;
}

static void
task_done_cb (GPPClient *client, gboolean success, const gchar *reply, gpointer unused)
{
  if (!success)
    g_print ("task failed\n");
  else
    g_print ("task succeeded : %s\n", reply);
  gpp_client_send_request (client, make_new_task (), -1);
}

static gboolean
interrupted_cb (GMainLoop *loop)
{
  g_main_loop_quit (loop);
  return FALSE;
}

int main (void)
{
  GMainLoop *loop = g_main_loop_new (NULL, FALSE);
  GPPClient *client = gpp_client_new ();

  g_unix_signal_add_full (G_PRIORITY_HIGH, SIGINT, (GSourceFunc) interrupted_cb, loop, NULL);
  g_signal_connect (client, "request-handled", G_CALLBACK (task_done_cb), NULL);
  g_print ("sending request\n");
  gpp_client_send_request (client, make_new_task(), -1);
  g_print ("request sent\n");
  g_main_loop_run (loop);
  g_object_unref (client);
  return 0;
}

```




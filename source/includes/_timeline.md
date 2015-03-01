# GES.Asset
[index](#index)
  

The Assets in the GStreamer Editing Services represent the resources
that can be used. You can create assets for any type that implements the [GES.Extractable](#ges.extractable)
interface, for example (FIXME: broken link)GESClips, [GES.Formatter](#ges.formatter), and [GES.TrackElement](#ges.trackelement) do implement it.
This means that assets will represent for example a (FIXME: broken link)GESUriClips, [GES.BaseEffect](#ges.baseeffect) etc,
and then you can extract objects of those types with the appropriate parameters from the asset
using the (FIXME: broken link)ges_asset_extract method:


```c

GESAsset *effect_asset;
GESEffect *effect;

// You create an asset for an effect
effect_asset = ges_asset_request (GES_TYPE_EFFECT, "agingtv", NULL);

// And now you can extract an instance of GESEffect from that asset
effect = GES_EFFECT (ges_asset_extract (effect_asset));


```



In that example, the advantages of having a [GES.Asset](#ges.asset) are that you can know what effects
you are working with and let your user know about the avalaible ones, you can add metadata
to the [GES.Asset](#ges.asset) through the [GES.MetaContainer](#ges.metacontainer) interface and you have a model for your
custom effects. Note that [GES.Asset](#ges.asset) management is making easier thanks to the [GES.Project](#ges.project) class.

Each asset is represented by a pair of @extractable_type and @id (string). Actually the @extractable_type
is the type that implements the [GES.Extractable](#ges.extractable) interface, that means that for example for a [GES.UriClip](#ges.uriclip),
the type that implements the [GES.Extractable](#ges.extractable) interface is [GES.Clip](#ges.clip).
The identifier represents different things depending on the @extractable_type and you should check
the documentation of each type to know what the ID of [GES.Asset](#ges.asset) actually represents for that type. By default,
we only have one [GES.Asset](#ges.asset) per type, and the @id is the name of the type, but this behaviour is overriden
to be more useful. For example, for GESTransitionClips, the ID is the vtype of the transition
you will extract from it (ie crossfade, box-wipe-rc etc..) For [GES.Effect](#ges.effect) the ID is the
@bin-description property of the extracted objects (ie the gst-launch style description of the bin that
will be used).

Each and every [GES.Asset](#ges.asset) is cached into GES, and you can query those with the (FIXME: broken link)ges_list_assets function.
Also the system will automatically register (FIXME: broken link)GESAssets for (FIXME: broken link)GESFormatters and (FIXME: broken link)GESTransitionClips
and standard effects (actually not implemented yet) and you can simply query those calling:

```c

   GList *formatter_assets, *tmp;

   //  List all  the transitions
   formatter_assets = ges_list_assets (GES_TYPE_FORMATTER);

   // Print some infos about the formatter GESAsset
   for (tmp = formatter_assets; tmp; tmp = tmp->next) {
     g_print ("Name of the formatter: %s, file extension it produces: %s",
       ges_meta_container_get_string (GES_META_CONTAINER (tmp->data), GES_META_FORMATTER_NAME),
       ges_meta_container_get_string (GES_META_CONTAINER (tmp->data), GES_META_FORMATTER_EXTENSION));
   }

   g_list_free (transition_assets);


```



You can request the creation of (FIXME: broken link)GESAssets using either (FIXME: broken link)ges_asset_request_async or
(FIXME: broken link)ges_asset_request_async. All the (FIXME: broken link)GESAssets are cached and thus any asset that has already
been created can be requested again without overhead.
## GES.Asset.extract
[GES.Asset](#ges.asset)
    

Extracts a new [GObject.Object](../gobject-2.0/gobject.object.html) from @asset. The type of the object is
defined by the extractable-type of @asset, you can check what
type will be extracted from @asset using
(FIXME: broken link)ges_asset_get_extractable_type
```c
self
```

The [GES.Asset](#ges.asset) to get extract an object from
```c
Returns
```

A newly created [GES.Extractable](#ges.extractable)
## GES.Asset.get_extractable_type
[GES.Asset](#ges.asset)
    

Gets the type of object that can be extracted from 
```c
self
```
```c
self
```

The [GES.Asset](#ges.asset)
```c
Returns
```

the type of object that can be extracted from 
```c
self
```
## GES.Asset.get_id
[GES.Asset](#ges.asset)
    

Gets the ID of a [GES.Asset](#ges.asset)
```c
self
```

The [GES.Asset](#ges.asset) to get ID from
```c
Returns
```

The ID of 
```c
self
```



// popup examples
( function( $ ) {

            $("#btnShow").click(function () {
                $("#dialog").dialog({
                    modal: true,
                    title: "Google Map",
                    width: 600,
                    hright: 450,
                    buttons: {
                        Close: function () {
                            $(this).dialog('close');
                        }
                    },
                    open: function () {
                        var mapOptions = {
                            center: new google.maps.LatLng(19.0606917, 72.83624970000005),
                            zoom: 18,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        }
                        var map = new google.maps.Map($("#dvMap")[0], mapOptions);
                    }
                });
            });

} )();
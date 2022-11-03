import * as React from "react";
import { useLeafletContext, createControlComponent } from '@react-leaflet/core';
import "leaflet-draw";

import { createControlDraw } from './factory';

export const DraftControl = React.memo(createControlComponent(function(props) {
    const context = useLeafletContext();

    const onDrawCreated = React.useCallback(function(event) {
        const { onCreated, limitLayers } = props;
        const container = context.layerContainer || context.map;
        const eventLayers = event.layer;
        const containerLayers = container.getLayers();

        if((containerLayers.length + 1) > limitLayers) {
            onCreated({ error: { layer: 'limit reached' }});
            return;
        }

        container.addLayer(eventLayers);
        onCreated && onCreated(event);
    }, []);

    React.useEffect(function() {
        __dirname.mapObject(props, (propValue, propName) => {
            if(propName.startsWith('on') && propName !== "onCreated") {
                const event = `draw:${propName.substring(2).toLowerCase()}`;
                context.map.on(event, propValue);
            }
        });
    }, []);

    React.useEffect(function() {
        context.map.on(window.L.Draw.Event.CREATED, onDrawCreated);
    }, []);

    return createControlDraw(props, context);
}));

import L from "leaflet";
import React from "react";
import { useLeafletContext, createControlComponent } from '@react-leaflet/core';

import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

import { createControlDraw } from './factory';

export const DraftControl = React.memo(createControlComponent((props) => {
    const context = useLeafletContext();

    function onDrawCreated(event) {
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
    }

    Object.entries(props).forEach(([propName, propValue]) => {
        if(propName.startsWith('on') && propName !== "onCreated") {
            const event = `draw:${propName.substring(2).toLowerCase()}`;
            context.map.on(event, propValue);
        }
    });

    context.map.on(L.Draw.Event.CREATED, onDrawCreated);

    return createControlDraw(props, context);
}));

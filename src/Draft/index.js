import L from "leaflet";
import { memo, useEffect, useState, useCallback } from "react";
import { useLeafletContext, createControlComponent } from '@react-leaflet/core';

import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

import { createControlDraw } from './factory';

export const DraftControl = memo(createControlComponent(function(props) {
    const context = useLeafletContext();

    const onDrawCreated = useCallback(function(event) {
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

    useEffect(function () {
        if (!props.translate) return;
        const { toolbar } = props.translate;
        L.drawLocal.draw.toolbar = {
            ...L.drawLocal.draw.toolbar, ...toolbar
        }
    }, [ props.translate ]);

    useEffect(function() {
        Object.entries(props).forEach(([propName, propValue]) => {
            if(propName.startsWith('on') && propName !== "onCreated") {
                const event = `draw:${propName.substring(2).toLowerCase()}`;
                context.map.on(event, propValue);
            }
        });
    }, []);

    useEffect(function() {
        context.map.on(L.Draw.Event.CREATED, onDrawCreated);
    }, []);

    return createControlDraw(props, context);
}));

import L from "leaflet";

function createEditDefault() {
    return {
        edit: {},
        remove: true
    }
}

function createDrawDefault() {
    return {
        polyline: true,
        polygon: true,
        rectangle: false,
        circle: false,
        marker: false,
        circlemarker: false
    }
}

export function createControlDraw({ draw, edit, position }, context) {
    const options = {
        draw: {
            ...createDrawDefault()
        },
        edit: {
            ...createEditDefault(),
            featureGroup: context.layerContainer
        }
    };
    if(position) {
        options.position = position;
    }
    if(draw) {
        options.draw = { ...options.draw, ...draw };
    }
    if(edit) {
        options.edit = { ...options.edit, ...edit };
    }
    return new L.Control.Draw(options);
}

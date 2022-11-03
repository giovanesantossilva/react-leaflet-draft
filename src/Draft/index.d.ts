import * as React from "react";

type EditProps = {
    edit: boolean,
    remove: boolean
}

type DrawProps = {
    polyline: boolean | object,
    polygon: boolean | object,
    rectangle: boolean | object,
    circle: boolean | object,
    marker: boolean | object,
    circlemarker: boolean | object
}

interface LeafletDrawListeners {
    onCreated?: Function,
    onEdited?: Function,
    onDeleted?: Function,
    onDrawStart?: Function,
    onDrawStop?: Function,
    onDrawVertex?: Function,
    onEditStart?: Function,
    onEditMove?: Function,
    onEditResize?: Function,
    onEditVertex?: Function,
    onEditStop?: Function,
    onDeleteStart?: Function,
    onDeleteStop?: Function,
    onToolbarOpened?: Function,
    onToolbarClosed?: Function,
    onMarkerContext?: Function
}

export interface DraftControlProps extends LeafletDrawListeners {
    position: string,
    edit: EditProps,
    draw: DrawProps,
    limitLayers: number
}

export class DraftControl extends React.Component<DraftControlProps> {}

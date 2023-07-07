import { DraftControl } from '.';
import { MapContainer, Marker, FeatureGroup} from "react-leaflet";

import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

describe('MarkerMuster Component', function () {

    it('should render and unmount component', function () {
        const position = [-22.2108112, -49.6771926];
        const { container, unmount } = render(
            <MapContainer
                zoon={10}
                center={position}
            >
                <FeatureGroup>
                    <DraftControl />
                    <Marker position={position} />
                </FeatureGroup>
            </MapContainer>
        );
        expect(container).toMatchSnapshot();
        unmount();
    });

    it('should render and unmount component with draw props', function () {
        const position = [-22.2108112, -49.6771926];
        const { container, unmount } = render(
            <MapContainer
                zoon={10}
                center={position}
            >
                <FeatureGroup>
                    <DraftControl
                        draw={{
                            circle: true,
                            rectangle: true
                        }}
                    />
                    <Marker position={position} />
                </FeatureGroup>
            </MapContainer>
        );
        expect(container).toMatchSnapshot();
        unmount();
    });

    it('should render and unmount component with edit props', function () {
        const position = [-22.2108112, -49.6771926];
        const { container, unmount } = render(
            <MapContainer
                zoon={10}
                center={position}
            >
                <FeatureGroup>
                    <DraftControl
                        edit={{
                            remove: true
                        }}
                    />
                    <Marker position={position} />
                </FeatureGroup>
            </MapContainer>
        );
        expect(container).toMatchSnapshot();
        unmount();
    });

    it('should render and unmount component with position props', function () {
        const position = [-22.2108112, -49.6771926];
        const { container, unmount } = render(
            <MapContainer
                zoon={10}
                center={position}
            >
                <FeatureGroup>
                    <DraftControl
                        position='topright'
                    />
                    <Marker position={position} />
                </FeatureGroup>
            </MapContainer>
        );
        expect(container).toMatchSnapshot();
        unmount();
    });

    it('should render and unmount component with translate props', function () {
        const position = [-22.2108112, -49.6771926];
        const { container, unmount } = render(
            <MapContainer
                zoon={10}
                center={position}
            >
                <FeatureGroup>
                    <DraftControl
                        translate={{
                            toolbar: {
                                buttons: {
                                    circle: 'Circle'
                                }
                            }
                        }}
                    />
                    <Marker position={position} />
                </FeatureGroup>
            </MapContainer>
        );
        expect(container).toMatchSnapshot();
        unmount();
    });

    it('should render and unmount component with limitLayer props', function () {
        const position = [-22.2108112, -49.6771926];
        const { container, unmount } = render(
            <MapContainer
                zoon={10}
                center={position}
            >
                <FeatureGroup>
                    <DraftControl
                        limitLayers={2}
                    />
                    <Marker position={position} />
                </FeatureGroup>
            </MapContainer>
        );
        expect(container).toMatchSnapshot();
        unmount();
    });

    it('should render and unmount component with listener', function () {
        const position = [-22.2108112, -49.6771926];
        const { container, unmount } = render(
            <MapContainer
                zoon={10}
                center={position}
            >
                <FeatureGroup>
                    <DraftControl
                        onEdited={e => console.log(e)}
                        onDeleted={e => console.log(e)}
                    />
                    <Marker position={position} />
                </FeatureGroup>
            </MapContainer>
        );
        expect(container).toMatchSnapshot();
        unmount();
    });

});

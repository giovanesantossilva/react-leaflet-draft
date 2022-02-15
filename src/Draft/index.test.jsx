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

});

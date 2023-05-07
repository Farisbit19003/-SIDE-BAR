import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
import React, { useState } from 'react';


const libraries = ['places'];
const SearchField = ({
values,setValues
}) => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google_map_autocomplete',
        googleMapsApiKey: "AIzaSyDt8_Al17hTrqLPp0cFKLWWC5PRinf-Zm8",
        libraries,
    });

    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = React.useCallback(function callback(autocompleteInstance) {
        setAutocomplete(autocompleteInstance);
    }, []);

    const onUnmount = React.useCallback(function callback() {
        setAutocomplete(null);
    }, []);
let location={};
    const onPlaceChanged = () => {
        const place = autocomplete.getPlace();

        if (!place.geometry || !place.geometry.location) {
            return;
        }
        location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            formattedAddress: place.formatted_address,
        };
        setValues({...values,mapAddress:location.formattedAddress,location:{
            lng:location.lng,
            lat:location.lat
        }})
    };

    return (
        <Autocomplete
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
            onUnmount={onUnmount}
            fields={['address_components', 'geometry.location', 'formatted_address']}
            types={['address']}
            className='cursor-pointer'
        >
            <input
                type="text"
                placeholder="Enter Location From Map"
                className={`flex h-12 w-full appearance-none items-center rounded border border-border-base px-4 text-sm text-heading transition duration-300 ease-in-out focus:border-accent focus:outline-none focus:ring-0`}
                
            />
        </Autocomplete>
    )
}
export default SearchField;
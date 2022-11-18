import TextField from '@mui/material/TextField';

import { usePlacesWidget } from "react-google-autocomplete";

export default () => {
  const { ref, autocompleteRef } = usePlacesWidget({
    apiKey:"AIzaSyDaNF1EX_d0fju_QNzeQlJokHc617YWcQU",
    onPlaceSelected: (place) => {
      console.log(place);
    }
  });

  return (
    <input ref={ref}></input>
  )

}

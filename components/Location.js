import React,{useState,useEffect} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      
      console.log(location)
     
      await Location.watchPositionAsync({ accuracy: Location.Accuracy.Balanced, timeInterval: 300, distanceInterval: 1 }, loc => {console.log(loc.coords)
        setLocation(location.coords);});
    })();
  }, []);


  const data = [
    {
    latitude:25.3976611,
    longitude: 68.362089,
    title:"Smit Hyderabad",
    description:"New course"
  },
  {
    latitude:25.396632,
    longitude: 68.3596108,
    title:"Quaid e Azam",
    description:"New course"
  },
];

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
     { location ? <MapView
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      
      style={styles.map} >
         {data.map((marker, index) => (
    <Marker
    key={index}
    coordinate={{ latitude : location.latitude , longitude : location.longitude }}
    title={marker.title}
    description={marker.description}
  />
   ))} 
        </MapView>
:
null}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
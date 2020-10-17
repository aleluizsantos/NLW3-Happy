import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Header from './components/Header';
import OrphanagesMap from '../src/pages/OrphanagesMap';
import OrphanageDetails from '../src/pages/OrphanageDetails';
import SelectMapPosition from "../src/pages/createOrphanage/SelectMapPosition";
import OrphanageData from "../src/pages/createOrphanage/OrphanageData";


const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: {backgroundColor: '#f2f3f5'} }}>
                <Screen 
                    name='OrphanagesMap' 
                    component={OrphanagesMap} 
                />
                <Screen 
                    name='OrphanagesDetails' 
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title='Orfanato' />
                    }}
                />
                <Screen 
                    name='SelectMapPosition' 
                    component={SelectMapPosition} 
                    options={{
                        headerShown: true,
                        header: () => <Header title='Selecione no Mapa' />
                    }}
                />
                <Screen 
                    name='OrphanageData' 
                    component={OrphanageData} 
                    options={{
                        headerShown: true,
                        header: () => <Header title='Informe os dados' />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}
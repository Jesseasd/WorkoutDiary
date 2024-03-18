import React, { useContext } from 'react'
import { View, SafeAreaView } from 'react-native'
import { Text } from 'react-native-paper'
import { UnitContext } from '../context/Contexts'
import { Switch } from 'react-native-paper'
import styles from "../style/Style"

export default function Settings() {
    const { units, setUnits } = useContext(UnitContext)
    const [isKilometers, setIsKilometers] = React.useState(units === "kilometers")

    const handleKilometersSwitchToggle = () => {
        if (isKilometers) {
            setUnits("miles")
            setIsKilometers(false)
        } else {
            setUnits("kilometers")
            setIsKilometers(true)
        }
    }

    const handleMilesSwitchToggle = () => {
        if (!isKilometers) {
            setUnits("kilometers")
            setIsKilometers(true)
        } else {
            setUnits("miles")
            setIsKilometers(false)
        }
    }

    return (
        <SafeAreaView style={styles.settingsContainer}>

            <View style={styles.switch}>
                <Text style={styles.settingsText}>Kilometers</Text>
                <Switch
                    value={isKilometers}
                    onValueChange={handleKilometersSwitchToggle}
                />
            </View>

            <View style={styles.switch}>
                <Text style={styles.settingsText}>Miles</Text>
                <Switch
                    value={!isKilometers}
                    onValueChange={handleMilesSwitchToggle}
                />
            </View>

        </SafeAreaView>
    )
}

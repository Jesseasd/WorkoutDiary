import React, { useContext } from 'react'
import { FlatList, Text, View, ScrollView } from 'react-native'
import { WorkoutsContext } from "../context/Contexts"
import { UnitContext } from "../context/Contexts"
import styles from "../style/Style"

export default function History() {

  const { workouts } = useContext(WorkoutsContext)

  return (
    <View>
      <FlatList
        data={workouts}
        renderItem={({ item }) => <Item workout={item} />}
      />
    </View>
  )
}

function Item({ workout }) {
  const { units, setUnits } = useContext(UnitContext)
  let d = workout.date.getDate() + "." + (workout.date.getMonth() + 1) + "." + workout.date.getFullYear()

  let convertDistance = workout.distance

  if (units === "kilometers") {
    convertDistance *= 1.60934
  }

  convertDistance = convertDistance.toFixed(2)

  let backgroundColor
  if (workout.type === "Run") {
    backgroundColor = "#fef653"
  } else if (workout.type === "Ski") {
    backgroundColor = "#9d6bce"
  } else if (workout.type === "Swim") {
    backgroundColor = "#bbef4c"
  } else if (workout.type === "Bike") {
    backgroundColor = "#b42581"
  }

  return (
    <ScrollView>

      <View style={[styles.historyContainer, { backgroundColor: backgroundColor }]}>

        <View style={styles.typeDayWrapper}>

          <View style={styles.historyType}>

            <Text>{workout.icon}</Text>
            <Text style={[styles.historyText, { marginLeft: 10 }]}>{workout.type}</Text>

          </View>

          <Text style={[styles.font, { marginTop: 10 }]}>{d}</Text>

        </View>

        <View style={styles.historyDistance}>

          <Text style={styles.historyNumber}>{workout.duration}</Text>
          <Text>minutes</Text>

        </View>

        <View style={styles.historyDistance}>

          <Text style={styles.historyNumber}>{convertDistance}</Text>
          <Text>{units}</Text>

        </View>

      </View>

    </ScrollView>
  )
}

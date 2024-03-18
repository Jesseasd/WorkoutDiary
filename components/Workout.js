import React, { useEffect, useState, useContext } from 'react'
import { Text, View, TextInput, Pressable, ScrollView, SafeAreaView } from 'react-native'
import { SegmentedButtons } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { WorkoutsContext, UnitContext } from "../context/Contexts"
import { Calendar } from 'react-native-calendars'
import styles from "../style/Style"

export default function Workout() {
  const [date, setDate] = useState(null)
  const [value, setValue] = useState(null)

  const [distance, setDistance] = useState("")
  const [duration, setDuration] = useState("")

  const { setWorkouts } = useContext(WorkoutsContext)
  const { units, setUnits } = useContext(UnitContext)

  const [items] = useState([
    { label: "Run", value: "run", icon: (color) => <MaterialCommunityIcons name="run" size={24} color={color} /> },
    { label: "Ski", value: "ski", icon: (color) => <MaterialCommunityIcons name="ski" size={24} color={color} /> },
    { label: "Swim", value: "swim", icon: (color) => <MaterialCommunityIcons name="swim" size={24} color={color} /> },
    { label: "Bike", value: "bike", icon: (color) => <MaterialCommunityIcons name="bike" size={24} color={color} /> }
  ])

  useEffect(() => {
    const exampleWorkouts = [
      {
        date: new Date(),
        distance: 5,
        duration: 30,
        type: "Run",
        icon: <MaterialCommunityIcons name="run" size={24} color="black" />,
      },
      {
        date: new Date(),
        distance: 10,
        duration: 45,
        type: "Ski",
        icon: <MaterialCommunityIcons name="ski" size={24} color="black" />,
      },
      {
        date: new Date(),
        distance: 1,
        duration: 40,
        type: "Swim",
        icon: <MaterialCommunityIcons name="swim" size={24} color="black" />,
      }
    ]
    setWorkouts(exampleWorkouts)
  }, [setWorkouts])

  const addWorkout = () => {
    const selectedItem = items.find(item => item.value === value)
    console.log(date)

    if (!checkInputs()) {
      return
    }

    let distanceToSave = parseInt(distance)

    if (units === "kilometers") {
      distanceToSave /= 1.60934
    }

    const newWorkout = {
      date: date instanceof Date ? date : new Date(),
      distance: distanceToSave,
      duration: parseInt(duration),
      type: selectedItem ? selectedItem.label : "",
      icon: selectedItem ? selectedItem.icon() : null
    }

    setWorkouts(prev => [...prev, newWorkout])

    setDate(null)
    setDistance("")
    setDuration("")
    setValue(null)
  }

  const checkInputs = () => {
    if (value === null) {
      alert("Form of exercise is not selected")
      return false
    }

    if (distance === "" || distance === "0") {
      alert("Set distance")
      return false
    }

    if (duration === "" || duration === "0") {
      alert("Set duration")
      return false
    }

    if (distance < 0) {
      alert("Distance can't be negative")
      return false
    }

    if (duration < 0) {
      alert("Duration can't be negative")
      return false
    }

    if (isNaN(distance)) {
      alert("Distance is not a number")
      return false
    }

    if (isNaN(duration)) {
      alert("Duration is not a number")
      return false
    }

    return true
  }

  return (
    <SafeAreaView>

      <ScrollView>

        <View style={styles.container}>

          <View style={styles.segmentedButtonsContainer}>

            <SegmentedButtons
              value={value}
              onValueChange={setValue}
              theme={{ roundness: 0 }}
              buttons={items.map(item => ({
                value: item.value,
                label: item.label,
                icon: () => item.icon(value === item.value ? "white" : "#fef653"),
                style: [styles.segmentedButtons, { backgroundColor: value === item.value ? "#232426" : "#232426" }],
                labelStyle: {
                  color: value === item.value ? "white" : "#fef653",
                  fontFamily: "Inter-Regular"
                }
              }))}
            />

          </View>

          <View style={styles.inputContainer}>

            <Text style={styles.text}>Distance ({units === "miles" ? "miles" : "km"})</Text>
            <TextInput
              value={distance}
              style={styles.textInput}
              onChangeText={setDistance}
              placeholder="Set distance"
              placeholderTextColor="#777777"
            />

            <Text style={styles.text}>Duration (min)</Text>
            <TextInput
              value={duration}
              style={styles.textInput}
              onChangeText={setDuration}
              allowFontScaling={true}
              placeholder="Set duration (min)"
              placeholderTextColor="#777777"
            />

          </View>

          <View style={styles.calendar}>
            <Text style={styles.text}>Select date</Text>
            <Calendar
              theme={{
                backgroundColor: "#232426",
                calendarBackground: "#232426",
                textSectionTitleColor: "#ffffff",
                selectedDayBackgroundColor: "#fef653",
                selectedDayTextColor: "#232426",
                todayTextColor: "#fef653",
                dayTextColor: "#ffffff",
                textDisabledColor: "#474747",
                monthTextColor: "#ffffff",
              }}
              onDayPress={(day) => {
                setDate(day.dateString ? new Date(day.dateString) : null)
              }}
              markedDates={{
                [date && date.toISOString().split('T')[0]]: {
                  selected: true,
                  disableTouchEvent: true
                }
              }}
            />

          </View>

        </View>

      </ScrollView>

      <Pressable
        onPress={addWorkout}
        style={styles.buttonAdd}
      >
        <MaterialCommunityIcons name="plus-circle" size={50} color="#232426" />
      </Pressable>

    </SafeAreaView>
  )
}

import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground,TextInput } from "react-native"
import styles from "./LoginStyles"

export default function Login() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.emptyView}></View>
     
      <View style={styles.container}>
        <Image
          style={styles.AxemboLogo}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/krpel63j4iq-3%3A533?alt=media&token=2e70bf6e-e6d6-4c9a-ad7f-72f9c037d984",
          }}
        />
        <View style={styles.detailsView}>
        <Text style={styles.details}>
          Assemble the things that matters to you as you surf the web.
        </Text>
        <Text style={styles.details}>
          Save the things that spake your inspiration.
        </Text>
        <Text style={styles.details}>
          Collaborate on work file.
        </Text>
        <Text style={styles.details}>
           Client relationship on project progress.
        </Text>
        </View>
        <View style={styles.inputView}>
          <Image
            style={styles.Person}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/krpel63j4iq-5%3A591?alt=media&token=06b0ef41-bbf8-4a6b-a322-5197d0a84702",
            }}
          />
          <TextInput
          style={styles.textInput}
            placeholder="First Name"
            keyboardType="name-phone-pad"
            maxLength={20}
          />
        </View>
        <View style={styles.inputView}>
          <Image
            style={styles.Person}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/krpel63j4iq-5%3A594?alt=media&token=0918d19f-b9c6-444e-9c27-be01bf654638",
            }}
          />
          <TextInput
          style={styles.textInput}
            placeholder="Surname (optional)"
            keyboardType="name-phone-pad"
            maxLength={20}
          />
        </View>
        <View style={styles.inputView}>
          <Image
            style={styles.Person}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/krpel63j4iq-5%3A597?alt=media&token=410eb3e9-3139-4eab-995f-57d52f3d7771",
            }}
          />
          <TextInput
          style={styles.textInput}
            placeholder="Email"
            keyboardType="email-address"
            maxLength={20}
          />
        </View>
        <View style={styles.inputView}>
          <Image
            style={styles.Person}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/krpel63j4iq-5%3A599?alt=media&token=2e1048d4-0925-4a67-a4a1-22eb66ee5c16",
            }}
          />
          <TextInput
          style={styles.textInput}
            placeholder="Password"
            keyboardType="visible-password"
            maxLength={20}
          />
        </View>
        <View style={styles.Rectangle1} />
      </View>
    </View>
  )
}

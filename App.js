/**
 * @file
 *
 * Summary.
 * <p>An application for displaying soccer results written with
 * {@link https://www.youtube.com/watch?v=XcU9GEUZTQA&t=338s React Native}.</p>
 * The easiest way of running the application is through {@link https://expo.dev Expo},
 * which is an open-source platform for making universal native apps for
 * Android, iOS, and the web with JavaScript and React.
 *
 * <p>React Native combines the best parts of native development with React,
 * a best-in-class JavaScript library for building user interfaces.</p>
 *
 * You can use React Native today in your existing Android
 * and iOS projects or you can create a whole new app from scratch.
 *
 * <p>Every mid-sized to big web application has to deal with sensitive information.
 * Examples of this type of information are credentials to access databases and third-party
 * {@link https://www.fortinet.com/resources/cyberglossary/api-key APIs keys}.</p>
 *
 * If this data is not encrypted at rest, attackers might get access to it and use it for malicious purposes.
 * That is where a solution, such as
 * {@link https://www.doppler.com/blog/configuring-php-applications-using-environment-variables# Doppler},
 * comes out.
 *
 * <p>Usage: </p>
 * <ul>
 *  <li>To install jsdoc and yarn:</li>
 *  <ul>
 *    <li>sudo npm install --global yarn</li>
 *    <li>sudo npm install -g jsdoc</li>
 *  </ul>
 *  <li> To run the application in iOS simulator:</li>
 *  <ul>
 *    <li>sudo npm install -g eas-cli</li>
 *    <li>sudo npm install -g expo-cli</li>
 *    <li>npx create-expo-app --template</li>
 *    <li>start Xcode's {@link https://docs.expo.dev/workflow/ios-simulator/ simulator}</li>
 *    <li>npx expo start --offline</li>
 *  </ul>
 *  <li> To run the application in a phone:</li>
 *  <ul>
 *    <li>read the QR code with the mobile's camera</li>
 *  </ul>
 * </ul>
 *
 * @author Paulo Roma
 * @since 08/05/2023
 * @see <a href="../App.js">source</a>
 * @see <a href="../package.json">package.json</a>
 * @see <a href="https://expo.dev/accounts/promac">link</a>
 * @see https://reactnative.dev
 * @see https://react-native.rocketseat.dev
 * @see https://www.youtube.com/watch?v=uxZe6TGsVJk
 * @see https://www.dynamsoft.com/codepool/expo-barcode-scanner.html
 * @see <img src="../terminal.png" width="1024">
 * @see <img src="../xcode.png" width="512">
 */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <StatusBar style="auto" />
            </View>

            <View style={styles.postContainer}>
                <Text style={styles.postTitle}>
                    Real Madri 1 x 1 Manchester City
                </Text>
                <Text style={styles.postDescription}>
                    Champions League 09/05/2023
                </Text>
            </View>

            <View style={styles.postContainer}>
                <Text style={styles.postTitle}>
                    Fluminense 5 x 1 River Plate
                </Text>
                <Text style={styles.postDescription}>
                    Libertadores das Américas 02/05/2023
                </Text>
            </View>

            <View style={styles.postContainer}>
                <Text style={styles.postTitle}>Fluminense 4 x 1 Flamengo</Text>
                <Text style={styles.postDescription}>Taça Rio 09/04/2023</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: "#333",
    },
    container: {
        flex: 1,
        backgroundColor: "#FAEBD7",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 150,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        padding: 20,
        height: "auto",
    },
    welcome: {
        fontSize: 20,
        margin: 10,
    },
    postContainer: {
        margin: 20,
        padding: 20,
        backgroundColor: "#FFFF",
        borderRadius: 3,
    },
    postTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    postDescription: {
        color: "#666",
    },
});

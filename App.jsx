import "./global.css"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

// Prevent the native splash screen from auto-hiding immediately
SplashScreen.preventAutoHideAsync().catch(() => { });

export default function App() {

  // ---------------------------------------------------------------------------------------
  // State and context
  // ---------------------------------------------------------------------------------------
  const [appIsReady, setAppIsReady] = useState(false);

  // ---------------------------------------------------------------------------------------
  // Testing splash screen display
  // ---------------------------------------------------------------------------------------
  useEffect(() => {
    async function prepareApp() {
      try {
        // 1. Pre-load assets, fonts, or check your SecureStore for an active user token here
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a API/Token check
      } catch (e) {
        console.warn(e);
      } finally {
        // 2. Tell the application state it is ready
        setAppIsReady(true);
      }
    }

    prepareApp();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      // 3. Hide the splash screen smoothly once our state is ready
      SplashScreen.hideAsync().catch(() => { });
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Return nothing while native splash is covering the screen
  }

  // ---------------------------------------------------------------------------------------
  // JSX
  // ---------------------------------------------------------------------------------------
  return (
    <View className="flex-1 items-center justify-center bg-slate-50">
      <Text className="text-xl font-bold text-slate-800">
        Welcome to the Tennis Booking App!
      </Text>
    </View>
  );
}



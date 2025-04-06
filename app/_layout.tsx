
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

import { useEffect } from "react";
import "react-native-reanimated";
import { LogBox } from "react-native";



// Prevent the splash screen from auto-hiding before asset loading is complete.

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env",
  );
}

LogBox.ignoreLogs(["Clerk:"]);

export default function RootLayout() {
  const [loaded] = useFonts({
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    Jakarta: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  

  return (
    
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          
          <Stack.Screen name="+not-found" />
        </Stack>
      
    );
}
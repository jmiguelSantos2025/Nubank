import { Redirect, router, Stack, Tabs } from "expo-router";

export default function Layout() {
 return (
  <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name="(tabs)"/>
    <Stack.Screen name="MeAjuda"/>
    

  </Stack>
  );
}
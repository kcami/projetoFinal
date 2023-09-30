import { GluestackUIProvider } from "@gluestack-ui/themed";
import TabsRoute from "./routes";

export default function App() {
  return (
    <GluestackUIProvider>
      <TabsRoute />
    </GluestackUIProvider>
  );
}

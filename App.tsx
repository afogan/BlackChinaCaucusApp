import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://www.blackchinacaucus.org/' }} />
    </SafeAreaView>
  );
}


import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { authService } from '../services/authService';

export default function Login() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const router = useRouter();

  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [perfil, setPerfil] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
     if (loading) return;
    if (!usuario || !clave || !perfil) {
      Alert.alert('Error', 'Por favor completa todos los campos obligatorios.');
      return;
    }
 setLoading(true);
    try {
      const data = await authService.login(usuario, clave);
console.log('Token recibido:', data?.access_token);
      // await SecureStore.setItemAsync('token', data.access_token);
      // await SecureStore.setItemAsync('usuario', JSON.stringify(data.usuario));

      router.replace('/main');
    } catch (error) {
      Alert.alert('Error de inicio de sesión', error.message || 'Error desconocido');
    }finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#3B82F6', '#1E3A8A']} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingVertical: 40,
        }}
      >
        <View
          className="bg-white rounded-2xl shadow-xl w-full max-w-4xl self-center"
          style={{
            flexDirection: isLandscape ? 'row' : 'column',
            padding: 24,
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginBottom: isLandscape ? 0 : 24,
              marginRight: isLandscape ? 24 : 0,
            }}
          >
            <Image
              source={require('../assets/images/logoF.png')}
              resizeMode="contain"
              style={{
                width: isLandscape ? 200 : 160,
                height: 120,
              }}
            />
          </View>

          {/* Formulario */}
          <View style={{ flex: 1, width: '100%' }}>
            <Text className="text-sm font-semibold text-red-600 mb-1">* Usuario:</Text>
            <TextInput
              className="border border-gray-300 rounded px-3 py-2 mb-4"
              placeholder="Ingresa tu usuario"
              value={usuario}
              onChangeText={setUsuario}
              autoCapitalize="none"
            />

            <Text className="text-sm font-semibold text-red-600 mb-1">* Contraseña:</Text>
            <TextInput
              className="border border-gray-300 rounded px-3 py-2 mb-4"
              secureTextEntry
              placeholder="Ingresa tu contraseña"
              value={clave}
              onChangeText={setClave}
            />

            <Text className="text-sm font-semibold text-red-600 mb-1">* Perfil:</Text>
            <TextInput
              className="border border-gray-300 rounded px-3 py-2 mb-4"
              placeholder="Selecciona tu perfil"
              value={perfil}
              onChangeText={setPerfil}
            />

            <TouchableOpacity className="mb-4">
              <Text className="text-sm text-gray-500 underline">Olvidé mi Contraseña</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-blue-600 rounded py-3 items-center"
              onPress={handleLogin}
              disabled={loading} 
              style={{ opacity: loading ? 0.6 : 1 }}
            >
             {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text className="text-white font-bold text-base">Iniciar Sesión</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { authService } from '../../services/authService'; 

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState('');

 const handleLogin = async () => {
    try {
      const data = await authService.login(usuario, clave);
      console.log('Token recibido:', data.access_token);

      // Aquí podrías guardar el token en SecureStore, AsyncStorage, etc.

      router.push('/main');
    } catch (error) {
      Alert.alert('Error de login', error.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center px-4 bg-blue-800">
      <View className="bg-white rounded-2xl flex-row p-6 w-full max-w-xl shadow-lg">
        <View className="w-1/2 items-center justify-center">
          <Image source={require('../../assets/images/icon.png')} className="w-24 h-24 mb-4" resizeMode="contain" />
          <Image source={require('../../assets/images/icon.png')} className="w-24 h-10" resizeMode="contain" />
        </View>

        <View className="w-1/2 pl-4 justify-center">
          <Text className="text-sm font-bold text-red-600">* Usuario:</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Usuario"
            className="border rounded px-2 py-1 mb-2"
          />

          <Text className="text-sm font-bold text-red-600">* Contraseña:</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Contraseña"
            secureTextEntry
            className="border rounded px-2 py-1 mb-2"
          />

          <Text className="text-sm font-bold text-red-600">* Perfil:</Text>
          <TextInput
            value={profile}
            onChangeText={setProfile}
            placeholder="Perfil"
            className="border rounded px-2 py-1 mb-2"
          />

          <TouchableOpacity>
            <Text className="text-sm text-gray-600 mb-4">Olvidé mi contraseña es te </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogin} className="bg-blue-600 py-2 rounded items-center">
            <Text className="text-white font-bold">Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

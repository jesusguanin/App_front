// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   useWindowDimensions,
//   ScrollView,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useState } from 'react';
// import { useRouter } from 'expo-router';
// import { authService } from '../services/authService';

// export default function Login() {
//   const { width, height } = useWindowDimensions();
//   const isLandscape = width > height;
//   const router = useRouter();

//   const [usuario, setUsuario] = useState('');
//   const [clave, setClave] = useState('');
//   const [perfil, setPerfil] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//      if (loading) return;
//     if (!usuario || !clave || !perfil) {
//       Alert.alert('Error', 'Por favor completa todos los campos obligatorios.');
//       return;
//     }
//  setLoading(true);
//     try {
//       const data = await authService.login(usuario, clave);
// console.log('Token recibido:', data?.access_token);
//       // await SecureStore.setItemAsync('token', data.access_token);
//       // await SecureStore.setItemAsync('usuario', JSON.stringify(data.usuario));

//       router.replace('/main');
//     } catch (error) {
//       Alert.alert('Error de inicio de sesión', error.message || 'Error desconocido');
//     }finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <LinearGradient colors={['#3B82F6', '#1E3A8A']} style={{ flex: 1 }}>
//       <ScrollView
//         contentContainerStyle={{
//           flexGrow: 1,
//           justifyContent: 'center',
//           paddingHorizontal: 20,
//           paddingVertical: 40,
//         }}
//       >
//         <View
//           className="bg-white rounded-2xl shadow-xl w-full max-w-4xl self-center"
//           style={{
//             flexDirection: isLandscape ? 'row' : 'column',
//             padding: 24,
//             alignItems: 'center',
//           }}
//         >
//           {/* Logo */}
//           <View
//             style={{
//               flex: 1,
//               alignItems: 'center',
//               marginBottom: isLandscape ? 0 : 24,
//               marginRight: isLandscape ? 24 : 0,
//             }}
//           >
//             <Image
//               source={require('../assets/images/logoF.png')}
//               resizeMode="contain"
//               style={{
//                 width: isLandscape ? 200 : 160,
//                 height: 120,
//               }}
//             />
//           </View>

//           {/* Formulario */}
//           <View style={{ flex: 1, width: '100%' }}>
//             <Text className="text-sm font-semibold text-red-600 mb-1">* Usuario:</Text>
//             <TextInput
//               className="border border-gray-300 rounded px-3 py-2 mb-4"
//               placeholder="Ingresa tu usuario"
//               value={usuario}
//               onChangeText={setUsuario}
//               autoCapitalize="none"
//             />

//             <Text className="text-sm font-semibold text-red-600 mb-1">* Contraseña:</Text>
//             <TextInput
//               className="border border-gray-300 rounded px-3 py-2 mb-4"
//               secureTextEntry
//               placeholder="Ingresa tu contraseña"
//               value={clave}
//               onChangeText={setClave}
//             />

//             <Text className="text-sm font-semibold text-red-600 mb-1">* Perfil:</Text>
//             <TextInput
//               className="border border-gray-300 rounded px-3 py-2 mb-4"
//               placeholder="Selecciona tu perfil"
//               value={perfil}
//               onChangeText={setPerfil}
//             />

//             <TouchableOpacity className="mb-4">
//               <Text className="text-sm text-gray-500 underline">Olvidé mi Contraseña</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               className="bg-blue-600 rounded py-3 items-center"
//               onPress={handleLogin}
//               disabled={loading}
//               style={{ opacity: loading ? 0.6 : 1 }}
//             >
//              {loading ? (
//                 <ActivityIndicator color="#fff" />
//               ) : (
//                 <Text className="text-white font-bold text-base">Iniciar Sesión</Text>
//               )}
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }
// import { useState } from 'react';
// import { useRouter } from 'expo-router';
// import {
//   Box,
//   Button,
//   Center,
//   FormControl,
//   Input,
//   ScrollView,
//   Text,
//   VStack,
//   Image,
//   Spinner,
//   Pressable,
//   useToast,
// } from 'native-base';
// import { LinearGradient } from 'expo-linear-gradient';
// import { authService } from '../services/authService';
// import { Dimensions } from 'react-native';

// export default function Login() {
//   const { width, height } = Dimensions.get('window');
//   const isLandscape = width > height;
//   const router = useRouter();
//   const toast = useToast();

//   const [usuario, setUsuario] = useState('');
//   const [clave, setClave] = useState('');
//   const [perfil, setPerfil] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     if (loading) return;
//     if (!usuario || !clave || !perfil) {
//       toast.show({
//         title: 'Faltan datos',
//         description: 'Por favor completa todos los campos obligatorios.',
//         status: 'error',
//       });
//       return;
//     }

//     setLoading(true);
//     try {
//       const data = await authService.login(usuario, clave);
//       console.log('Token recibido:', data?.access_token);
//       // await SecureStore.setItemAsync('token', data.access_token);
//       // await SecureStore.setItemAsync('usuario', JSON.stringify(data.usuario));

//       router.replace('/main');
//     } catch (error) {
//       toast.show({
//         title: 'Error de inicio de sesión',
//         description: error.message || 'Error desconocido',
//         status: 'error',
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box flex={1}>
//       <LinearGradient
//         colors={['white', 'white']}
//         style={{ flex: 1 }}
//       >
//         <ScrollView
//           contentContainerStyle={{
//             flexGrow: 1,
//             justifyContent: 'center',
//             padding: 20,
//           }}
//         >
//             <Center flex={1} alignItems="center" >
//               <Image
//                 source={require('../assets/images/logoF.png')}
//                 alt="Logo"
//                 resizeMode="contain"
//                 size="2xl"
//               />
//             </Center>

//           <Center
//             bg="blue"
//             borderRadius="2xl"
//             shadow={8}
//             px={6}
//             py={8}
//             w="full"
//             maxW="4xl"
//             flexDirection={isLandscape ? 'row' : 'column'}
//             alignSelf="center"
//           >

//             {/* Formulario */}
//             <VStack space={4} flex={1} w="100%">
//               <FormControl isRequired>
//                 <FormControl.Label _text={{ color: 'red.600', fontWeight: 'semibold' }}>* Usuario:</FormControl.Label>
//                 <Input
//                   placeholder="Ingresa tu usuario"
//                   value={usuario}
//                   onChangeText={setUsuario}
//                 />
//               </FormControl>

//               <FormControl isRequired>
//                 <FormControl.Label _text={{ color: 'red.600', fontWeight: 'semibold' }}>* Contraseña:</FormControl.Label>
//                 <Input
//                   placeholder="Ingresa tu contraseña"
//                   value={clave}
//                   onChangeText={setClave}
//                   type="password"
//                 />
//               </FormControl>

//               <FormControl isRequired>
//                 <FormControl.Label _text={{ color: 'red.600', fontWeight: 'semibold' }}>* Perfil:</FormControl.Label>
//                 <Input
//                   placeholder="Selecciona tu perfil"
//                   value={perfil}
//                   onChangeText={setPerfil}
//                 />
//               </FormControl>

//               <Pressable onPress={() => console.log('Olvidé mi contraseña')}>
//                 <Text fontSize="sm" color="blue.500" underline>
//                   Olvidé mi Contraseña
//                 </Text>
//               </Pressable>

//               <Button
//                 mt={2}
//                 colorScheme="blue"
//                 onPress={handleLogin}
//                 isDisabled={loading}
//               >
//                 {loading ? <Spinner color="white" /> : 'Iniciar Sesión'}
//               </Button>
//             </VStack>
//           </Center>
//         </ScrollView>
//       </LinearGradient>
//     </Box>
//   );
// }
// app/login.js (si usas expo-router)
import {
  Box,
  Button,
  ButtonText,
  Center,
  Heading,
  Input,
  InputField,
  VStack,
  InputIcon,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Spinner,
  useToast,
  Text,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { Image, useWindowDimensions, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { authService } from "../services/authService"; // asegúrate que esta ruta sea correcta
// import * as SecureStore from 'expo-secure-store'; // descomenta si lo necesitas

export default function LoginScreen() {
  const { width, height } = useWindowDimensions();
  const cardHeight = height * 0.55;
  const toast = useToast();
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(false);

  const roles = [
    { label: "Administrador", value: 1 },
    { label: "Fiscalizador", value: 25 },
  ];

  const handleLogin = async () => {
    if (!usuario || !clave || !perfil) {
      toast.show({
        title: "Faltan datos",
        description: "Por favor completa todos los campos.",
        action: "error",
        placement: "top",
      });
      return;
    }

    setLoading(true);

    try {
      // const data = await authService.login(usuario, clave);
      // console.log("Token recibido:", data?.access_token);

      // Guardar token si deseas
      // await SecureStore.setItemAsync('token', data.access_token);
      // await SecureStore.setItemAsync('usuario', JSON.stringify(data.usuario));

      // Redireccionar
      router.replace("/main");
    } catch (error) {
      toast.show({
        title: "Error",
        description: error?.message || "Error de inicio de sesión",
        action: "error",
        placement: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box flex={1}>
      <LinearGradient colors={["#3B82F6", "#1E3A8A"]} style={{ flex: 1 }}>
        <Center flex={1} px="$4">
          <Box
            width="100%"
            maxWidth={400}
            minHeight={cardHeight}
            bg="$white"
            p="$4"
            borderRadius="$2xl"
            shadowColor="$black"
            shadowOffset={{ width: 0, height: 12 }}
            shadowOpacity={0.2}
            shadowRadius={24}
            elevation={10}
            alignItems="center"
          >
            <Image
              source={require("../assets/images/logoF.png")}
              style={{
                width: width * 0.4,
                height: width * 0.2,
                resizeMode: "contain",
                marginBottom: 20,
                marginTop: 50,
              }}
            />

            <Heading size="lg" mb="$4" textAlign="center" color="$coolGray800">
              Iniciar Sesión
            </Heading>

            <VStack space="md" width="100%">
              <Input variant="outline" size="lg">
                <InputIcon
                  ml="$3"
                  style={{
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <MaterialIcons name="person" size={20} color="#888" />
                  </View>
                </InputIcon>
                <InputField
                  placeholder="Usuario"
                  value={usuario}
                  onChangeText={setUsuario}
                />
              </Input>

              <Input variant="outline" size="lg">
                <InputIcon
                  ml="$3"
                  style={{
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <MaterialIcons name="lock" size={20} color="#888" />
                  </View>
                </InputIcon>
                <InputField
                  placeholder="Contraseña"
                  type="password"
                  value={clave}
                  onChangeText={setClave}
                />
              </Input>

              <Select
                selectedValue={perfil}
                onValueChange={(val) => setPerfil(val)}
              >
                <SelectTrigger variant="outline" size="lg">
                  <SelectInput placeholder="Selecciona un rol" />
                  <SelectIcon mr="$3">
                    <AntDesign name="down" size={18} color="black" />
                  </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    {roles.map((item) => (
                      <SelectItem
                        key={item.value}
                        label={item.label}
                        value={item.value}
                      />
                    ))}
                  </SelectContent>
                </SelectPortal>
              </Select>

              <Button
                size="lg"
                mt="$2"
                borderRadius="$full"
                bg="$coolGray800"
                onPress={handleLogin}
                isDisabled={loading}
              >
                {loading ? (
                  <Spinner size="small" color="$white" />
                ) : (
                  <ButtonText color="$white">Ingresar</ButtonText>
                )}
              </Button>
            </VStack>
          </Box>
        </Center>
      </LinearGradient>
    </Box>
  );
}

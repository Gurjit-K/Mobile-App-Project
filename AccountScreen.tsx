import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Use Ionicons for arrows
import { StackNavigationProp } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/Feather";

type RootStackParamList = {
  PersonalInfo: undefined;
  Notifications: undefined;
  Wallet: undefined;
  VehicleDetails: undefined;
  MyProducts: undefined;
  SecurityPrivacy: undefined;
  ChargeHistory: undefined;
  MenuScreen: undefined; // For navigation back to the MenuScreen
};

type AccountScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MenuScreen'>;
const Stack = createNativeStackNavigator<RootStackParamList>();


const AccountScreen: React.FC = () => {
  const navigation = useNavigation<AccountScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Back Arrow and Name Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
        <Icon name="chevron-left" size={25} color="#32FD32" style={styles.arrowIcon} />
        </TouchableOpacity>
        
        <Text style={styles.userName}>John Smith</Text>
      </View>

      {/* Profile Picture */}
      <View style={styles.profileContainer}>
        <Image
          source={require('@/assets/images/userprofileicon.webp')} 
          style={styles.profileImage}
        />
      </View>

      {/* Navigation Buttons */}
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PersonalInfo')}>
        <Ionicons name="person" size={24} color="#fff" />
        <Text style={styles.menuText}>Personal Information</Text>
        <Ionicons name="chevron-forward" size={20} color="#32FD32" style={styles.arrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notifications')}>
        <Ionicons name="notifications" size={24} color="#fff" />
        <Text style={styles.menuText}>Notifications</Text>
        <Ionicons name="chevron-forward" size={20} color="#32FD32" style={styles.arrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Wallet')}>
        <Ionicons name="wallet" size={24} color="#fff" />
        <Text style={styles.menuText}>Wallet</Text>
        <Ionicons name="chevron-forward" size={20} color="#32FD32" style={styles.arrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('VehicleDetails')}>
        <Image
          source={require('@/assets/images/vehicleicon.jpg')}
          style={styles.vehicleIcon}
          resizeMode="contain"
        />
        <Text style={styles.menuText}>Vehicle Details</Text>
        <Ionicons name="chevron-forward" size={20} color="#32FD32" style={styles.arrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MyProducts')}>
        <Ionicons name="cube" size={24} color="#fff" />
        <Text style={styles.menuText}>My Products</Text>
        <Ionicons name="chevron-forward" size={20} color="#32FD32" style={styles.arrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SecurityPrivacy')}>
        <Ionicons name="lock-closed" size={24} color="#fff" />
        <Text style={styles.menuText}>Security & Privacy</Text>
        <Ionicons name="chevron-forward" size={20} color="#32FD32" style={styles.arrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ChargeHistory')}>
        <Ionicons name="flash" size={24} color="#fff" />
        <Text style={styles.menuText}>Charge History</Text>
        <Ionicons name="chevron-forward" size={20} color="#32FD32" style={styles.arrowIcon} />
      </TouchableOpacity>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton} onPress={() => alert('Sign Out')}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background for consistency
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center',
    marginBottom: 30,
  },
  arrowText: {
    fontSize: 32,
    color: '#32CD32', // Green for back arrow
    fontWeight: 'bold',
    marginRight: 10, // Spacing between arrow and name
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff', // White text
    alignItems:'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120, // Circular profile picture
    height: 120,
    borderRadius: 60,
    borderWidth:4 ,
    borderColor: '#fff', // White border
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure spacing between text and arrow
    backgroundColor: '#1c1c1c',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  vehicleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  menuText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    flex: 1, // Pushes the arrow to the far right
  },
  arrowIcon: {
    marginLeft: 10,
  },
  signOutButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#32CD32',
    borderRadius: 8,
    alignItems: 'center',
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

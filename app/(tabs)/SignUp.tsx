import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function SignUpScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.formContainer}>
        <ThemedText type="title" style={styles.heading}>Create An Account</ThemedText>
        <ThemedText type="subtitle" style={styles.subheading}>
          Create an account to enjoy all the services without any ads for free!
        </ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#a0a0a0"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#a0a0a0"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={() => {/* Handle Sign Up */}}>
          <ThemedText style={styles.buttonText}>Create Account</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <ThemedText type="link" style={styles.signupText}>
            Already Have An Account? <ThemedText type="link">Log In</ThemedText>
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#f7f7f7', // Fallback light mode color
    padding: 20,
    borderRadius: 20,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    marginBottom: 10,
  },
  subheading: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    backgroundColor: '#95c8a4', // Fallback for light mode button color
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff', // Fallback color
  },
  signupText: {
    fontSize: 14,
  },
});

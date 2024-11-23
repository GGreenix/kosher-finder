// styles/mikvahStyles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Styles for MikvahCard component
  mikvahCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 }, // Adds shadow on iOS
    shadowOpacity: 0.1, // Adds shadow on iOS
    shadowRadius: 4, // Adds shadow on iOS
  },
  mikvahImage: {
    width: '100%',
    height: 150,
  },
  mikvahInfo: {
    padding: 16,
  },
  mikvahName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  address: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  phone: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  openingHours: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  section: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },

  // Styles for MikvahPage component
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mikvahInfoPage: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  detailsContainer: {
    paddingHorizontal: 8,
    gap: 12,
  },
  mikvahNamePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  detailText: {
    fontSize: 16,
    color: '#666',
  },

  // Styles for the header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },

  // Styles for error handling
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  backButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

// styles/index.ts
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
});

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  searchContainer: {
    flex: 1,
    marginRight: 16,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    padding: 8,
    borderRadius: 20,
  },
  locationText: {
    color: '#212529',
    marginHorizontal: 8,
  },
  cartButton: {
    backgroundColor: '#e9ecef',
    padding: 8,
    borderRadius: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginTop: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    color: '#212529',
  },
});

export const restaurantStyles = StyleSheet.create({
  restaurantCard: {
    width: (windowWidth - 48) / 2,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#dee2e6',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  restaurantImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  sponsoredText: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    color: '#212529',
    fontSize: 12,
  },
  restaurantInfo: {
    padding: 12,
  },
  restaurantName: {
    color: '#212529',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  restaurantType: {
    color: '#6c757d',
    fontSize: 14,
  },
  kosherBadge: {
    backgroundColor: '#e9ecef',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 4,
    alignSelf: 'flex-start',
  },
  kosherText: {
    color: '#212529',
    fontSize: 12,
    fontWeight: 'bold',
  },
  restaurantMetrics: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    justifyContent: 'space-between',
  },
  deliveryPrice: {
    color: '#0d6efd',
    fontSize: 14,
    fontWeight: '500',
  },
  deliveryTime: {
    color: '#6c757d',
    fontSize: 14,
  },
  rating: {
    color: '#198754',
    fontSize: 14,
    fontWeight: '500',
  },
});

export const synagogueStyles = StyleSheet.create({
  synagoguesList: {
    padding: 16,
  },
  synagogueCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  synagogueImage: {
    width: '100%',
    height: 160,
  },
  synagogueInfo: {
    padding: 16,
  },
  synagogueName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
  },
  synagogueDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  synagogueType: {
    color: '#6c757d',
    fontSize: 16,
  },
  prayerInfo: {
    alignItems: 'flex-end',
  },
  nextPrayer: {
    color: '#0d6efd',
    fontWeight: 'bold',
  },
  prayerTime: {
    color: '#212529',
  },
  rabbiName: {
    color: '#495057',
    marginTop: 8,
  },
  address: {
    color: '#6c757d',
    marginTop: 4,
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    padding: 8,
    borderRadius: 20,
  },
  locationText: {
    color: '#212529',
    marginHorizontal: 8,
  },
  cartButton: {
    backgroundColor: '#e9ecef',
    padding: 8,
    borderRadius: 20,
  },
  scrollView: {
    flex: 1,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoryItem: {
    width: 80,
    height: 80,
    backgroundColor: '#e9ecef',
    borderRadius: 16,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryLabel: {
    color: '#212529',
    fontSize: 12,
    marginTop: 4,
  },
  bannerContainer: {
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 12,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 160,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 16,
    width: '100%',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#212529',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#212529',
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#0d6efd',
  },
  restaurantsGrid: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  restaurantCard: {
    // width: (windowWidth - 40) / 2,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  restaurantImage: {
    width: '100%',
    height: 120,
  },
  sponsoredText: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    color: '#212529',
    fontSize: 12,
  },
  restaurantInfo: {
    padding: 12,
  },
  restaurantName: {
    color: '#212529',
    fontSize: 16,
    fontWeight: 'bold',
  },
  restaurantType: {
    color: '#6c757d',
    fontSize: 14,
    marginTop: 4,
  },
  restaurantMetrics: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  deliveryPrice: {
    color: '#0d6efd',
    marginLeft: 4,
    marginRight: 8,
  },
  deliveryTime: {
    color: '#6c757d',
  },
  rating: {
    color: '#6c757d',
    marginLeft: 'auto',
  },
});
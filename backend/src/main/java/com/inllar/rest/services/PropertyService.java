package com.inllar.rest.services;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.persistence.EntityNotFoundException;
import javax.security.sasl.AuthenticationException;
import javax.servlet.http.Part;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.inllar.rest.exceptions.UnauthorizedException;
import com.inllar.rest.models.Address;
import com.inllar.rest.models.Image;
import com.inllar.rest.models.Property;
import com.inllar.rest.models.User;
import com.inllar.rest.repositories.AddressRepository;
import com.inllar.rest.repositories.ImageRepository;
import com.inllar.rest.repositories.PropertyRepository;
import com.inllar.rest.repositories.UserRepository;
import com.inllar.rest.requests.PropertyRegisterResponse;
import com.inllar.rest.requests.PropertiesFilterResponse;
import com.inllar.rest.requests.PropertiesGetResponse;
import com.inllar.rest.requests.PropertyGetResponse;
import com.inllar.rest.requests.PropertyRegisterRequest;
import com.inllar.rest.utils.JwtTokenUtil;

@Service("propertyService")
public class PropertyService {

	@Autowired
	private PropertyRepository propertyRepository;
	@Autowired
	private AddressRepository addressRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ImageRepository imageRepository;
	@Autowired
	private S3BucketStorageService bucketService;

	@Autowired
	private JwtTokenUtil jwt;

	public PropertyRegisterResponse createProperty(PropertyRegisterRequest request) {

		String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();

		User user = jwt.getUserFromAccessToken(token);

		Property property = new Property();

		property.setName(request.getName());
		property.setDescription(request.getDescription());
		property.setHasPool(request.isHasGarage());
		property.setHasGrill(request.isHasGrill());
		property.setHasPartyArea(request.isHasPartyArea());
		property.setHasGarage(request.isHasGarage());
		property.setNumberBathRooms(request.getNumberBathRooms());
		property.setNumberBedRooms(request.getNumberBedRooms());
		property.setNumberKitchens(request.getNumberKitchens());
		property.setNumberRooms(request.getNumberRooms());
		property.setSquareMeters(request.getSquareMeters());
		property.setValue(request.getValue());
		property.setNumberRooms(request.getNumberRooms());
		Address address = new Address();

		address.setCep(request.getCep());
		address.setCity(request.getCity());
		address.setDistrict(request.getDistrict());
		address.setNumber(request.getNumber());
		address.setState(request.getState());
		address.setStreet(request.getStreet());
		address.setProperty(property);

		property.setUser(user);

		propertyRepository.save(property);
		property.setAddress(address);
		addressRepository.save(address);

		propertyRepository.save(property);

		PropertyRegisterResponse response = new PropertyRegisterResponse();
		response.setPropertyId(property.getId().toString());

		return response;
	}

	public void deleteProperty(String propertyId) {
		Property property = propertyRepository.findById(UUID.fromString(propertyId))
				.orElseThrow(() -> new EntityNotFoundException());

		List<Image> images = property.getImages();

		for (int i = 0; i < images.size(); i++) {
			bucketService.deleteFileFromS3Bucket(images.get(i).getUrl());
		}

		propertyRepository.delete(property);
	}

	public void saveImages(ArrayList<Part> partsList) throws IOException {

		String propertyId = partsList.get(0).getName();

		ArrayList<InputStream> images = new ArrayList<InputStream>();

		for (int i = 1; i < partsList.size(); i++) {
			images.add(partsList.get(i).getInputStream());
		}

		Property property = propertyRepository.findById(UUID.fromString(propertyId))
				.orElseThrow(() -> new EntityNotFoundException());

		User user = property.getUser();

		String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
		User userFromToken = jwt.getUserFromAccessToken(token);

		if (user != userFromToken) {
			throw new AuthenticationException();
		}

		List<Image> dbImages = new ArrayList<Image>();

		for (int i = 0; i < images.size(); i++) {
			InputStream image = images.get(i);
			try {
				String url = bucketService.uploadFile(image, "property-image.png");
				Image dbImage = new Image();
				dbImage.setUrl(url);
				dbImage.setProperty(property);

				dbImages.add(dbImage);
				imageRepository.save(dbImage);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		property.setImages(dbImages);
		propertyRepository.save(property);
	}

	public PropertiesGetResponse getPropertiesByAddress(String cep, String city, String district, String state) {
		Address requestedAddress = new Address();

		requestedAddress.setCep(cep.equals("") ? null : cep);
		requestedAddress.setCity(city.equals("") ? null : city);
		requestedAddress.setDistrict(district.equals("") ? null : district);
		requestedAddress.setState(state.equals("") ? null : state);

		ExampleMatcher matcher = ExampleMatcher.matching().withIgnoreNullValues().withIgnorePaths("number");
		Example<Address> example = Example.of(requestedAddress, matcher);

		List<Address> matchingAddresses = addressRepository.findAll(example);

		System.out.println(matchingAddresses.size());

		ArrayList<Property> properties = new ArrayList<Property>();

		for (Address address : matchingAddresses) {
			Property property = address.getProperty();
			properties.add(property.getPropertyData());
		}

		PropertiesGetResponse response = new PropertiesGetResponse();
		response.setProperties(properties);
		return response;
	}

	public PropertiesFilterResponse getSearchFilters() {
		ArrayList<String> addressesCep = new ArrayList<String>();
		ArrayList<String> addressesCity = new ArrayList<>();
		ArrayList<String> addressesDistrict = new ArrayList<>();
		ArrayList<String> addressesState = new ArrayList<>();

		List<Address> addresses = addressRepository.findAll();
		addresses.forEach((address) -> {

			if (!addressesCep.stream().anyMatch(address.getCep()::equalsIgnoreCase))
				addressesCep.add(address.getCep());

			if (!addressesCity.stream().anyMatch(address.getCity()::equalsIgnoreCase))
				addressesCity.add(address.getCity());

			if (!addressesDistrict.stream().anyMatch(address.getDistrict()::equalsIgnoreCase))
				addressesDistrict.add(address.getDistrict());

			if (!addressesState.stream().anyMatch(address.getState()::equalsIgnoreCase))
				addressesState.add(address.getState());
		});

		PropertiesFilterResponse response = new PropertiesFilterResponse();

		response.setCep(addressesCep);
		response.setCity(addressesCity);
		response.setDistrict(addressesDistrict);
		response.setState(addressesState);

		return response;
	}

	public PropertyGetResponse getPropertyById(String id) {
		Property property = propertyRepository.findById(UUID.fromString(id))
				.orElseThrow(() -> new EntityNotFoundException());

		PropertyGetResponse response = new PropertyGetResponse();
		response.setProperty(property.getPropertyData());
		return response;
	}

	public PropertiesGetResponse getPropertiesFromUser(String userId) {
		User user = userRepository.findById(UUID.fromString(userId)).orElseThrow(() -> new EntityNotFoundException());

		List<Property> userProperties = user.getProperties();
		ArrayList<Property> userPropertiesData = new ArrayList<>();

		userProperties.forEach((property) -> {
			userPropertiesData.add(property.getPropertyData());
		});

		PropertiesGetResponse response = new PropertiesGetResponse();
		response.setProperties(userPropertiesData);
		return response;
	}

	public void editProperty(PropertyRegisterRequest request, String propertyId) {
		String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
		User userFromToken = jwt.getUserFromAccessToken(token);

		Property propertyToEdit = propertyRepository.findById(UUID.fromString(propertyId))
				.orElseThrow(() -> new EntityNotFoundException());

		if (propertyToEdit.getUser() != userFromToken) {
			throw new UnauthorizedException();
		}

		// Edit the address
		propertyToEdit.getAddress().setCep(request.getCep());
		propertyToEdit.getAddress().setCity(request.getCity());
		propertyToEdit.getAddress().setDistrict(request.getDistrict());
		propertyToEdit.getAddress().setNumber(request.getNumber());
		propertyToEdit.getAddress().setState(request.getState());
		propertyToEdit.getAddress().setStreet(request.getStreet());

		propertyToEdit.setDescription(request.getDescription());
		propertyToEdit.setHasGarage(request.isHasGarage());
		propertyToEdit.setHasGrill(request.isHasGrill());
		propertyToEdit.setHasPartyArea(request.isHasPartyArea());
		propertyToEdit.setHasPool(request.isHasPool());
		propertyToEdit.setName(request.getName());
		propertyToEdit.setNumberBathRooms(request.getNumberBathRooms());
		propertyToEdit.setNumberBedRooms(request.getNumberBedRooms());
		propertyToEdit.setNumberKitchens(request.getNumberKitchens());
		propertyToEdit.setSquareMeters(request.getSquareMeters());
		propertyToEdit.setValue(request.getValue());

		propertyRepository.save(propertyToEdit);
	}

	public void removeImages(String[] imagesId) throws IOException {
		for (int i = 0; i < imagesId.length; i++) {
			Image image = imageRepository.findById(UUID.fromString(imagesId[i]))
					.orElseThrow(() -> new EntityNotFoundException());
			bucketService.deleteFileFromS3Bucket(image.getUrl());
			imageRepository.delete(image);
		}
	}
}

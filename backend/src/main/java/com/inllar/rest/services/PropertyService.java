package com.inllar.rest.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.persistence.EntityNotFoundException;
import javax.security.sasl.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.inllar.rest.models.Address;
import com.inllar.rest.models.Image;
import com.inllar.rest.models.Property;
import com.inllar.rest.models.User;
import com.inllar.rest.repositories.AddressRepository;
import com.inllar.rest.repositories.ImageRepository;
import com.inllar.rest.repositories.PropertyRepository;
import com.inllar.rest.requests.PropertyRegisterResponse;
import com.inllar.rest.requests.PropertiesFilterResponse;
import com.inllar.rest.requests.PropertiesGetResponse;
import com.inllar.rest.requests.PropertyRegisterRequest;
import com.inllar.rest.utils.FileUploadUtil;
import com.inllar.rest.utils.JwtTokenUtil;

@Service("propertyService")
public class PropertyService {

	@Autowired
	private PropertyRepository propertyRepository;
	@Autowired
	private AddressRepository addressRepository;

	@Autowired
	private ImageRepository imageRepository;

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
		property.setNumberRooms(request.getNumberRooms());
		property.setNumberBathRooms(request.getNumberBathRooms());
		property.setNumberBedRooms(request.getNumberBedRooms());
		property.setNumberKitchens(request.getNumberKitchens());
		property.setSquareMeters(request.getSquareMeters());

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

	public void saveImages(MultipartFile[] images, String propertyId) throws AuthenticationException {
		Property property = propertyRepository.findById(UUID.fromString(propertyId))
				.orElseThrow(() -> new EntityNotFoundException());

		User user = property.getUser();

		String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
		User userFromToken = jwt.getUserFromAccessToken(token);

		if (user != userFromToken) {
			throw new AuthenticationException();
		}

		List<Image> dbImages = new ArrayList<Image>();

		for (int i = 0; i < images.length; i++) {
			MultipartFile image = images[i];
			String url = "user_content/" + user.getId().toString() + "/" + property.getId();
			String filename = UUID.randomUUID().toString();
			try {
				FileUploadUtil.saveFile(url, filename, image);
				Image dbImage = new Image();
				dbImage.setUrl(url + "/" + filename);
				dbImage.setProperty(property);

				dbImages.add(dbImage);
				imageRepository.save(dbImage);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		property.setImages(dbImages);
		propertyRepository.save(property);
	}

	public PropertiesGetResponse getPropertiesByAddress(String cep, String city, String district, String state) {
		Address requestedAddress = new Address();
		requestedAddress.setCep(cep);
		requestedAddress.setCity(city);
		requestedAddress.setDistrict(district);
		requestedAddress.setState(state);

		ExampleMatcher matcher = ExampleMatcher.matching().withIgnoreNullValues().withIgnorePaths("number");
		Example<Address> example = Example.of(requestedAddress, matcher);

		List<Address> matchingAddresses = addressRepository.findAll(example);

		System.out.println(matchingAddresses.size());

		ArrayList<Property> properties = new ArrayList<Property>();

		for (Address address : matchingAddresses) {
			Property property = address.getProperty();
			property.setUser(null);
			property.getAddress().setProperty(null);
			properties.add(property);
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
}

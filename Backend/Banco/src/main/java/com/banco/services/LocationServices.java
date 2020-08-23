package com.banco.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.banco.entities.Location;
import com.banco.extras.NotFoundClass;
import com.banco.repositories.LocationRepository;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class LocationServices {

	@Autowired
	private LocationRepository locationRepositoryDAO;

	@RequestMapping(path = "/", method = RequestMethod.GET)
	public @ResponseBody String homePath() {
		return "Developer Challenge Api";
	}

	@RequestMapping(path = "/getAllLocations", method = RequestMethod.GET)
	public @ResponseBody Iterable<Location> getAllLocations(){
		return locationRepositoryDAO.findAll();
	}

	@RequestMapping(path = "/getLocationById", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<Location> getLocationById(@RequestParam long id) {
		Location loc = locationRepositoryDAO.findById(id)
				.orElseThrow(() -> new NotFoundClass("No existe la localización con id: " + id));
		return ResponseEntity.ok().body(loc);
	}

	@RequestMapping(path = "/getLocationByParent", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<Iterable<Location>> getLocationByParent(@RequestBody Location parent){
		return ResponseEntity.ok(locationRepositoryDAO.findAllByParent(parent));
	}

	@RequestMapping(path = "/saveLocation", method = RequestMethod.POST)
	public @ResponseBody Location saveLocation(@RequestBody Location location) {
		return locationRepositoryDAO.save(location);
	}

}

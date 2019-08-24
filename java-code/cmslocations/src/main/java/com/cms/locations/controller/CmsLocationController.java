package com.cms.locations.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cms.locations.beans.CountryBean;
import com.cms.locations.beans.RegionBean;
import com.cms.locations.beans.StateBean;
import com.cms.locations.services.CountryService;
import com.cms.locations.services.RegionService;
import com.cms.locations.services.StateService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@RequestMapping("/locations")
@Api(value="CmsLocationController")
public class CmsLocationController {
	
	@Autowired
	RegionService regionsService;
	
	@Autowired
	CountryService countryService;
	
	@Autowired
	StateService stateService;
	
	@GetMapping("/region")
	@ApiOperation(value = "Get All Regions")
	public String getAllRegions(){
		return regionsService.getAllRegions();
	}
	
	
	@GetMapping("/region/{regionCode}")
	@ApiOperation(value = " Get region by regionCode")
	public String getRegionByCode(@PathVariable String regionCode){
		return regionsService.getRegionByCode(regionCode);
	}
	
	@PostMapping("/region")
	@ApiOperation(value = " Create new Region")
	public String createRegion(@RequestBody RegionBean region){
		
		return regionsService.createRegion(region);
	}
	
	@DeleteMapping("/region/{regionCode}")
	@ApiOperation(value = " Delete Region")
	public String deleteRegion(@PathVariable String regionCode){
		
		return regionsService.deleteRegion(regionCode);
	}
	
	@PutMapping("/region")
	@ApiOperation(value = " update Region")
	public String updateRegion(@RequestBody RegionBean region){
		
		return regionsService.updateRegion(region);
	}
	
	@PostMapping("/country")
	@ApiOperation(value =" Create country")
	public String createCountry(@RequestBody CountryBean country){
		return countryService.createCountry(country);
	}
	
	@GetMapping("/countries/{regionCode}")
	@ApiOperation(value = "Fetch CountryList with regionCode")
	public String getCountryByRegionCode(@PathVariable String regionCode){
		
		return countryService.getCountryListByRegionCode(regionCode);
	}
	
	@GetMapping("/country/{countryCode}")
	@ApiOperation(value = "Fetch Country with countryCode")
	public String getCountryByCountryCode(@PathVariable String countryCode){
		
		return countryService.getCountryByCountryCode(countryCode);
	}
	
	@GetMapping("/country")
	@ApiOperation(value = "Fetch All Countries")
	public String getAllCountries(){
		
		return countryService.getAllCountries();
	}
	
	@DeleteMapping("/country/{countryCode}")
	@ApiOperation(value = " Delete Country")
	public String deleteCountry(@PathVariable String countryCode){
		
		return countryService.deleteCountry(countryCode);
	}
	
	@PutMapping("/country")
	@ApiOperation(value =" Update country")
	public String updateCountry(@RequestBody CountryBean country){
		return countryService.updateCountry(country);
	}
	
	@PostMapping("/state")
	@ApiOperation(value = " Create State")
	public String createState(@RequestBody StateBean state){
		return stateService.createState(state);
	}
	
	@PutMapping("/state")
	@ApiOperation(value=" Update State")
	public String updateState(@RequestBody StateBean state){
		return stateService.updateState(state);
	}
	
	@GetMapping("/states/{countryCode}")
	@ApiOperation(value="Fetch States for country")
	public String getStatesByCountry(@PathVariable String countryCode){
		return stateService.getAllStateByCountry(countryCode);
	}
	
	@GetMapping("/state/{stateCode}")
	@ApiOperation(value="Fetch States for country")
	public String getStatesByStateCode(@PathVariable String stateCode){
		return stateService.getStateByStateCode(stateCode);
	}
	
	@DeleteMapping("/state")
	@ApiOperation(value="Delete state")
	public String deleteState(String stateCode){
		return stateService.deleteState(stateCode);
	}
	
}

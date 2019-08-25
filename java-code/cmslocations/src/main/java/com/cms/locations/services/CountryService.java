package com.cms.locations.services;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.locations.beans.CountryBean;
import com.cms.locations.model.Country;
import com.cms.locations.model.Regions;
import com.cms.locations.repositories.CountryRepo;
import com.cms.locations.repositories.RegionsRepo;

@Service
public class CountryService {
	
	
	@Autowired
	CountryRepo countryRepo;
	
	@Autowired
	RegionsRepo regionsRepo;
	
	public String createCountry(CountryBean countryBean){
		JSONObject jsonResponse = new JSONObject();
		Country countryModel = null;
		if(null != countryBean && null != countryBean.getCountryCode() && null != countryBean.getRegionCode()){
				countryModel =	countryRepo.findByCountryCode(countryBean.getCountryCode());
				if(null != countryModel){
					jsonResponse.put("status", "Error");
					jsonResponse.put("message", "Record already available with countryCode");
				}else{
					Regions regionModel = regionsRepo.findByRegionCode(countryBean.getRegionCode());
					if(null != regionModel){
					countryModel = new Country();
					countryModel.setCountryCode(countryBean.getCountryCode());
					countryModel.setRegionCode(countryBean.getRegionCode());
					if(null != countryBean.getCountryName())
					countryModel.setCountryName(countryBean.getCountryName());
					if(null != countryBean.getDescription())
					countryModel.setDescription(countryBean.getDescription());
					if(null != countryBean.getEconomicStatus())
						countryModel.setEconomicStatus(countryBean.getEconomicStatus());
					countryRepo.save(countryModel);
					jsonResponse.put("status", "Success");
					jsonResponse.put("message", "Country record created successfully");
					}else{
						jsonResponse.put("status", "Error");
						jsonResponse.put("message", "Invalid Region for the country");
					}
				}
		}else{
			//response = "Invalid request";
			jsonResponse.put("status", "Failed");
			jsonResponse.put("message", "Invalid request");
		}
		return jsonResponse.toString();
	}
	
	public String updateCountry(CountryBean countryBean){
		JSONObject jsonResponse = new JSONObject();
		Country countryModel = null;
		if(null != countryBean && null != countryBean.getCountryCode() && null != countryBean.getRegionCode()){
				countryModel =	countryRepo.findByCountryCode(countryBean.getCountryCode());
				if(null != countryModel){
					Regions regionModel = regionsRepo.findByRegionCode(countryBean.getRegionCode());
					if(null != regionModel){
					countryModel.setCountryCode(countryBean.getCountryCode());
					countryModel.setRegionCode(countryBean.getRegionCode());
					if(null != countryBean.getCountryName())
					countryModel.setCountryName(countryBean.getCountryName());
					if(null != countryBean.getDescription())
					countryModel.setDescription(countryBean.getDescription());
					if(null != countryBean.getEconomicStatus())
					countryModel.setEconomicStatus(countryBean.getEconomicStatus());
					countryRepo.save(countryModel);
					jsonResponse.put("status", "Success");
					jsonResponse.put("message", "Country record updated successfully");
					}else{
						jsonResponse.put("status", "Error");
						jsonResponse.put("message", "Invalid Region for the country");
					}
				
				}else{
					jsonResponse.put("status", "Error");
					jsonResponse.put("message", "Country Record does not exists");
				}
		}else{
			//response = "Invalid request";
			jsonResponse.put("status", "Failed");
			jsonResponse.put("message", "Invalid request");
		}
		return jsonResponse.toString();
	}
	
	
	public String  getCountryListByRegionCode(String regionCode){
		
		JSONObject jsonResponse = new JSONObject();
		JSONArray jsonArray = new JSONArray();
		
		List<Country> countryList = countryRepo.findByRegionCode(regionCode);
		if(null != countryList && countryList.size() > 0){
			for(Country country:countryList){
				jsonResponse = new JSONObject();
				jsonResponse.put("countryCode", country.getCountryCode());
				jsonResponse.put("countryName", country.getCountryName());
				jsonResponse.put("countryId", country.getCountryId());
				jsonResponse.put("regionCode", country.getRegionCode());
				jsonResponse.put("description", country.getDescription());
				jsonResponse.put("economicStatus", country.getEconomicStatus());
				jsonArray.add(jsonResponse);
			}
			jsonResponse = new JSONObject();
			jsonResponse.put("status", "Success");
			jsonResponse.put("message", "");
			jsonResponse.put("countries", jsonArray);
		}
		return jsonResponse.toString();
	}
	
public String  getCountryByCountryCode(String countryCode){
		
		JSONObject jsonResponse = new JSONObject();
		JSONObject finalJson = new JSONObject();
		
		Country country = countryRepo.findByCountryCode(countryCode);
		if(null != country){
				jsonResponse = new JSONObject();
				jsonResponse.put("countryCode", country.getCountryCode());
				jsonResponse.put("countryName", country.getCountryName());
				jsonResponse.put("countryId", country.getCountryId());
				jsonResponse.put("regionCode", country.getRegionCode());
				jsonResponse.put("description", country.getDescription());
				jsonResponse.put("economicStatus", country.getEconomicStatus());
				finalJson = new JSONObject();
				finalJson.put("status", "Success");
				finalJson.put("message", "");
				finalJson.put("country", jsonResponse);
		}else{
			finalJson.put("status", "Success");
			finalJson.put("message", "No data found");
		}
		return finalJson.toString();
	}
	
	
	public String getAllCountries(){
		
		JSONObject jsonResponse = new JSONObject();
		JSONArray jsonArray = new JSONArray();
		
		List<Country> countryList = countryRepo.findAll();
		if(null != countryList && countryList.size() > 0){
			for(Country country:countryList){
				jsonResponse = new JSONObject();
				jsonResponse.put("countryCode", country.getCountryCode());
				jsonResponse.put("countryName", country.getCountryName());
				jsonResponse.put("countryId", country.getCountryId());
				jsonResponse.put("regionCode", country.getRegionCode());
				jsonResponse.put("description", country.getDescription());
				jsonResponse.put("economicStatus", country.getEconomicStatus());
				jsonArray.add(jsonResponse);
			}
			jsonResponse = new JSONObject();
			jsonResponse.put("status", "Success");
			jsonResponse.put("message", "All Countries");
			jsonResponse.put("countries", jsonArray);
		}
		return jsonResponse.toString();
	}
	
	public String deleteCountry(String countryCode){
		JSONObject jsonResponse = new JSONObject();
		
		Country country = countryRepo.findByCountryCode(countryCode);
		
		if(null != country){
			countryRepo.delete(country);
			jsonResponse.put("status", "Success");
			jsonResponse.put("message","Country record deleted successfully");
		}else{
			jsonResponse.put("status", "Error");
			jsonResponse.put("message", "Country record does not exists with given country code");
		}
		
		return jsonResponse.toString();
	}

}

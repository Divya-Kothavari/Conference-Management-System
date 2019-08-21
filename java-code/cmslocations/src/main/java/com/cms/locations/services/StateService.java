package com.cms.locations.services;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.locations.beans.StateBean;
import com.cms.locations.model.Country;
import com.cms.locations.model.State;
import com.cms.locations.repositories.CountryRepo;
import com.cms.locations.repositories.StateRepo;


@Service
public class StateService {

	@Autowired
	StateRepo stateRepo;
	
	@Autowired
	CountryRepo countryRepo;
	
	public String createState(StateBean state){
		JSONObject json = new JSONObject();
		State stateModel = null;
		if(null != state && null != state.getStateCode() && null != state.getCountryCode()){
			stateModel = stateRepo.findByStateCode(state.getStateCode());
			if(null != stateModel){
				json.put("status", "Error");
				json.put("message", "State record already available with given stateCode");
			}else{
				Country countryModel = countryRepo.findByCountryCode(state.getCountryCode());
				if(null != countryModel){
					stateModel = new State();
					stateModel.setStateCode(state.getStateCode());
					stateModel.setCountryCode(state.getCountryCode());
					if(null != state.getDescription())
					stateModel.setDescription(state.getDescription());
					if(null != state.getStateName())
					stateModel.setStateName(state.getStateName());
					stateRepo.save(stateModel);
					json.put("status", "Success");
					json.put("message", "State record created successfully");
				}else{
					json.put("status", "Error");
					json.put("message", "Invalid countryCode provided in the request");
				}
			}
		}
		return json.toString();
	}
	
	public String updateState(StateBean state){
		JSONObject json = new JSONObject();
		State stateModel = null;
		if(null != state && null != state.getStateCode() && null != state.getCountryCode()){
			stateModel = stateRepo.findByStateCode(state.getStateCode());
			if(null != stateModel){
				Country countryModel = countryRepo.findByCountryCode(state.getCountryCode());
				if(null != countryModel){
					stateModel.setStateCode(state.getStateCode());
					stateModel.setCountryCode(state.getCountryCode());
					if(null != state.getDescription())
					stateModel.setDescription(state.getDescription());
					if(null != state.getStateName())
					stateModel.setStateName(state.getStateName());
					stateRepo.save(stateModel);
					json.put("status", "Success");
					json.put("message", "State record updated successfully");
				}else{
					json.put("status", "Error");
					json.put("message", "Invalid countryCode provided in the request");
				}
			}else{
				json.put("status", "Error");
				json.put("message", "State record does not exists");
			}
		}
		return json.toString();
	}
	
	public String getAllStateByCountry(String countryCode){
		JSONObject json = new JSONObject();
		JSONArray jsonArray = new JSONArray();
		
		List<State> states = stateRepo.findByCountryCode(countryCode);
		
		if(null != states && states.size()>0){
			for(State state:states){
				json = new JSONObject();
				json.put("stateId",state.getStateId());
				json.put("stateCode", state.getStateCode());
				json.put("stateName", state.getStateName());
				json.put("countryCode", state.getCountryCode());
				json.put("description", state.getDescription());
				jsonArray.add(json);
			}
			json = new JSONObject();
			json.put("status","Success");
			json.put("message", "States list for countryCode are fetched");
			json.put("states", jsonArray);
		}else{
			json.put("status","Success");
			json.put("message", "No data found");
		}
		return json.toString();
	}
	
	public String getStateByStateCode(String stateCode){
		JSONObject json = new JSONObject();
		JSONObject response = new JSONObject();
		State state = stateRepo.findByStateCode(stateCode);
		if(null != state){
			json = new JSONObject();
			json.put("stateId",state.getStateId());
			json.put("stateCode", state.getStateCode());
			json.put("stateName", state.getStateName());
			json.put("countryCode", state.getCountryCode());
			json.put("description", state.getDescription());
			response.put("status", "success");
			response.put("state", json);
			response.put("message", "State for given stateCode fetched ");
		}else{
			response.put("status", "success");
			response.put("message", "No data found");
		}
		return response.toString();
	}
	
	public String deleteState(String stateCode){
		JSONObject json = new JSONObject();
		State state = stateRepo.findByStateCode(stateCode);
		if(null != state){
			stateRepo.delete(state);
			json.put("status", "Success");
			json.put("message", "State record deleted successfully");
		}else{
			json.put("status", "Error");
			json.put("message", "Record not found");
		}
		return json.toString();
	}
	
}

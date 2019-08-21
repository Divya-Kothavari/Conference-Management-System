package com.cms.locations.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.locations.beans.RegionBean;
import com.cms.locations.model.Regions;
import com.cms.locations.repositories.RegionsRepo;

@Service
public class RegionService {

	@Autowired
	RegionsRepo regionsRepo;
	
	public List<Regions> getAllRegions(){
		
		List<Regions> regionList = new ArrayList<>();
		
		regionList = regionsRepo.findAll();
		
		return regionList;
	}
	
	public Regions getRegionByCode(String regionCode){
		
		Regions region = regionsRepo.findByRegionCode(regionCode);
		
		return region;
		
	}
	
	public String createRegion(RegionBean region){
		String status = "";
		Regions regionModel = null;
		try{
			if(null != region.getRegionCode()){
			regionModel = regionsRepo.findByRegionCode(region.getRegionCode());
			if(null != regionModel){
			status = "Region already available with given regionCode";	
			}else{
			regionModel = new Regions();
			//regionModel.setRegionId(1L);
			if(null != region.getDescription())
			regionModel.setDescription(region.getDescription());
			if(null != region.getRegionCode())
			regionModel.setRegionCode(region.getRegionCode());
			if(null != region.getRegionName())
			regionModel.setRegionName(region.getRegionName());
			
			regionsRepo.save(regionModel);
			status = "Region record created successfully";
			}
			}else{
				status = "Invalid request";
			}
		}catch(Exception e){
			System.out.println("Error incurred while creating Region record"+e);
			 status = "Error incurred while creating Region record";
		}
		return status;
	}
	
	public String deleteRegion(String regionCode){
		String response = "";
		Regions regionModel = null;
		try{
			regionModel = regionsRepo.findByRegionCode(regionCode);
			if(null != regionModel){
				regionsRepo.delete(regionModel);
				response = "Region record deleted successfully";
			}else{
				response = "Region does not exist";
			}
			
		}catch(Exception e){
			response = "Error occured while deleting Region";
		}
		return response;
	}
	
	public String updateRegion(RegionBean region){

		String status = "";
		Regions regionModel = null;
		try{
			if(null != region.getRegionCode()){
			regionModel = regionsRepo.findByRegionCode(region.getRegionCode());
			if(null != regionModel){
				if(null != region.getDescription())
				regionModel.setDescription(region.getDescription());
				if(null != region.getRegionName())
				regionModel.setRegionName(region.getRegionName());
					
				regionsRepo.save(regionModel);
			status = "Region details updated successfully";	
			}else{
			status = "Region does not exists";
			}
			}else{
				status = "Invalid request";
			}
		}catch(Exception e){
			System.out.println("Error incurred while updating Region record"+e);
			 status = "Error incurred while updating Region record";
		}
		return status;
	
	}
	
}

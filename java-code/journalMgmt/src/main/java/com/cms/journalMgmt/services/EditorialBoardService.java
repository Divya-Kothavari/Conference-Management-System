package com.cms.journalMgmt.services;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.journalMgmt.beans.EditorialBoardBean;
import com.cms.journalMgmt.model.EditorialBoard;
import com.cms.journalMgmt.repositories.EditorialBoardRepo;
import com.google.gson.Gson;

import net.minidev.json.JSONObject;

@Service
public class EditorialBoardService {
	
	@Autowired
	EditorialBoardRepo editorialBoardRepo;
	
	public String createOrUpdateEditorialBoard(EditorialBoardBean editorialBoard,String action){
		
		JSONObject json = new JSONObject();
		if(null != editorialBoard && null != editorialBoard.getJournalShortName() && null != editorialBoard.getEditorId()){
			
			EditorialBoard editorBoard = editorialBoardRepo.findByJournalShortNameAndEditorId(editorialBoard.getJournalShortName(),editorialBoard.getEditorId());
			if(null != editorBoard){
				if(action.equalsIgnoreCase("create")){
					json.put("status", "Error");
					json.put("message", "EditorialBoard already available");
				}else if(action.equalsIgnoreCase("update")){
					editorBoard.setBiography(editorialBoard.getBiography());
					editorBoard.setCountry(editorialBoard.getCountry());
					editorBoard.setEditorDescription(editorialBoard.getCountry());
					editorBoard.setEditorName(editorialBoard.getEditorName());
					editorBoard.setEditorType(editorialBoard.getEditorType());
					editorBoard.setInterests(editorialBoard.getInterests());
					editorBoard.setRegion(editorialBoard.getRegion());
					editorBoard.setUniversityName(editorialBoard.getUniversityName());
					editorialBoardRepo.save(editorBoard);
					json.put("status", "Success");
					json.put("message", "EditorialBoard updated successfully");
				}
			}else{
				if(action.equalsIgnoreCase("create")){
					editorBoard = new EditorialBoard();
					editorBoard.setEditorId(editorialBoard.getEditorId());
					editorBoard.setJournalShortName(editorialBoard.getJournalShortName());
					editorBoard.setBiography(editorialBoard.getBiography());
					editorBoard.setCountry(editorialBoard.getCountry());
					editorBoard.setEditorDescription(editorialBoard.getCountry());
					editorBoard.setEditorName(editorialBoard.getEditorName());
					editorBoard.setEditorType(editorialBoard.getEditorType());
					editorBoard.setInterests(editorialBoard.getInterests());
					editorBoard.setRegion(editorialBoard.getRegion());
					editorBoard.setUniversityName(editorialBoard.getUniversityName());
					editorialBoardRepo.save(editorBoard);
					json.put("status", "Success");
					json.put("message", "EditorialBoard created successfully");
					
				}else if(action.equalsIgnoreCase("update")){
					json.put("status", "Error");
					json.put("message", "EditorialBoard does not exist");	
				}
			}
		}
		return json.toString();
	}
	
	public String getEditorialBoardByJournalShortName(String journalShortName){
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		Gson gson = new Gson();
		List<EditorialBoard> editorialBoards = editorialBoardRepo.findByJournalShortName(journalShortName);
		if(null != editorialBoards && editorialBoards.size() > 0){
			for(EditorialBoard editorialBoard  : editorialBoards){
				//journalJson = (JSONObject)  new JSONParser().parse(gson.toJson(journalModel,Journal.class));
				try{
					json = new JSONObject();
					json = (JSONObject)  new JSONParser().parse(gson.toJson(editorialBoard,EditorialBoard.class));
					array.add(json);
				}catch(Exception e){}
			}
			json.put("status", "Success");
			json.put("message", "EditorialBoard details for journal");
			json.put("editorialBoards", array);
		}else{
			json.put("status", "Error");
			json.put("message", "No records found");		
		}
		return json.toString();
	}
	
	public String getEditorialBoardByJournalShortNameAndEditorId(String journalShortName,String editorId){
		JSONObject jsonStr = new JSONObject();
		JSONObject json = new JSONObject();
		Gson gson = new Gson();
		EditorialBoard editorialBoard = editorialBoardRepo.findByJournalShortNameAndEditorId(journalShortName,editorId);
		if(null != editorialBoard){
				try{
					jsonStr = new JSONObject();
					jsonStr = (JSONObject)  new JSONParser().parse(gson.toJson(editorialBoard,EditorialBoard.class));
					json.put("status", "Success");
					json.put("message", "EditorialBoard details for journal");
					json.put("editorialBoard", jsonStr);
				}catch(Exception e){
					json.put("status", "Error");
					json.put("message", "Error while fetching editorialBoard");	
				}
		}else{
			json.put("status", "Error");
			json.put("message", "No records found");		
		}
		return json.toString();
	}
	
	public String deleteEditorialBoardByJournalShortName(String journalShortName){
		
		JSONObject json = new JSONObject();
		List<EditorialBoard> editorialBoards = editorialBoardRepo.findByJournalShortName(journalShortName);
		if(null != editorialBoards && editorialBoards.size() > 0){
			editorialBoardRepo.deleteInBatch(editorialBoards);
			json.put("status", "Success");
			json.put("message", "Editorial board details deleted successfully for the journal");		
		}else{
			json.put("status", "Error");
			json.put("message", "No records found to delete");		
		}
		return json.toString();
	}
	
public String deleteEditorialBoardByJournalShortNameAndEditorId(String journalShortName,String editorId){
		
		JSONObject json = new JSONObject();
		EditorialBoard editorialBoard = editorialBoardRepo.findByJournalShortNameAndEditorId(journalShortName,editorId);
		if(null != editorialBoard){
			editorialBoardRepo.delete(editorialBoard);
			json.put("status", "Success");
			json.put("message", "Editorial board deleted successfully");		
		}else{
			json.put("status", "Error");
			json.put("message", "No records found to delete");		
		}
		return json.toString();
	}
	
	

}



//model.Societe.methods.getIDsociete=function(raison){//

//var idSociete=ds.Societe.query("Raison_Sociale like :1",raison);

//return idSociete;

//}
//model.Societe.methods.getIDsociete.scope = "public";


//model.Contact.methods.getnamecontact=function(idSociete){//

//var contactname=ds.Contact.query("ID_Societe = :1",idSociete);

//return contactname;

//}
//model.Contact.methods.getnamecontact.scope = "public";


//model.Contrat.idtype = new Attribute("calculated","string");
//model.Contrat.idtype.onGet=function(){
//	var idctype = ds.Contrat.ID_Contrat_type;
//	if(this.ID_Contrat_type == 137481783){
//	return "4D Mobile";
//}
//else{
//	return "4D";
//}
//	
//}

//model.Contrat.methods.getctypeID=function(idSociete,idContact,stmpdeb,stmpfi){//

//var ctype=ds.Contrat.query("Lien_41_retour.ID_Societe = :1 and Lien_41_retour.ID_Contact = :2 and stmp_debut <= :3 and stmp_fin >= :4",idSociete,idContact,stmpdeb,stmpfi);

//return ctype;

//}
//model.Contrat.methods.getctypeID.scope = "public";


//model.Configuration.methods.getconfname=function(idContact,idContrat){//

//var confname=ds.Configuration.query("ID_contact = :1 and ID_contrat = :2",idContact,idContrat);

//return confname;

//}
//model.Configuration.methods.getconfname.scope = "public";


//model.Incident_type.methods.getincidtypename=function(){//

//var incidtypename=ds.Incident_type.query("ID < :1",128364328);

//return incidtypename;

//}
//model.Incident_type.methods.getincidtypename.scope = "public";


//model.Incident_type.methods.getincidtypeid=function(incidentname){//

//var incidtypeid=ds.Incident_type.query("ID = :1 ",incidentname);

//return incidtypeid;

//}
//model.Incident_type.methods.getincidtypeid.scope = "public";


//model.Configuration_value.methods.getconfvalue=function(idconfig){//

//var confvalue=ds.Configuration_value.query("ID_configuration = :1 ",idconfig);

//return confvalue;

//}
//model.Configuration_value.methods.getconfvalue.scope = "public";


//model.Configuration_value.questname = new Attribute("calculated","string");
//model.Configuration_value.questname.onGet=function(){
//	var confvalue=ds.Question.query("ID == :1 ",this.ID_Question);
//	
//	return confvalue.Name[0];
//	
//}
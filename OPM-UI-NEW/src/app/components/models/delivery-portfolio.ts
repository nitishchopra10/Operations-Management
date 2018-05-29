export class DeliveryPortFolio{

	private  account:String;

	private  supportService:Boolean;

	private  enhancements:Boolean;

	private  developmentService:Boolean;

	private  testingService:Boolean;

	private  dBASupport:Boolean;

	private  iAAS:Boolean;

	private  infraMonitoring:Boolean;

	private  technologyStacks:String;

	private  status:String;
	   recordStatus:String;

	setStatus(value:String):void{
		this.recordStatus=value;
}

getStatus(){
	return this.recordStatus;
}
    
}
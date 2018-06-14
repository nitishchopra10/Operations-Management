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
	public   recordStatus:String;


	constructor(){

		this.account="String";

		this.supportService=false;

		this.enhancements=false;

		this.developmentService=false;

		this.testingService=false;

		this.dBASupport=false;

		this.iAAS=false;

		this.infraMonitoring=false;

		this.technologyStacks="String";

		this.status="String";
		this.recordStatus="String";
	}
setStatus(value:String):void{
		this.recordStatus=value;
}



getStatus(){
	return this.recordStatus;
}
    
}
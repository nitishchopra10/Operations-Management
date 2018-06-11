# Operations-Management
***
#### This is an ongoing attempt at making a full microservices based system for handling day to day operations at any organization.
***
## Working Modules Backend
- [x] Authentication
- [x] Discovery
- [x] Gateway
- [ ] Config Server
- [x] Team Data Management
- [x] Delivery Portfolio

## Front-End
- [x] Login(Role Based Check not implemented yet)
- [x] Home
- [ ] Team Data Management
- [ ] Delivery Portfolio


#### The project uses the following technologies for the backend : 
  * [Eureka](https://github.com/Netflix/eureka/wiki/Eureka-at-a-glance)
  * [Zuul](https://github.com/Netflix/zuul)
  * [Feign](https://github.com/OpenFeign/feign)
  * [JWT](https://jwt.io/)
  * [Postgres](https://www.postgresql.org/about/)
  * [MapStruct](http://mapstruct.org/)
  
#### and the following technologies for the frontend : 
  * [Angular 5](https://angular.io/docs)
  * [Project Clarity](https://vmware.github.io/clarity/)
  * [Ag-grid](https://www.ag-grid.com/about.php)
  
 ***
 ## Basic Project Architecture
 ![Basic Architecture](https://tusharsharma118.github.io/Hosted-Images/OPM.png)
 ***

 
### To run the project:
  #### Must Create the DB(opr_mgmt) and schema(opm) inside postgresql first before running the services!!!
  (Project runs on Angular CLI version 1.6.1)
  For the UI, to install node modules(from inside the directory)
  > npm install
#### for hosting the UI
  > ng serve --port 4100
***

## For Microservices
  
#### In Eclipse
 ## To load dummy data change file name in TDM resources to data.sql from DummyData.sql
 1. Maven -> build (to generate target files and Mapper)[Skip tests if they cause the buid to fail] 
  > clean install 
 2. Launch services in order
  > Discovery -> followed by rest of the services as required -> lastly Gateway
 
 ***
 Hit the url
 >  http://localhost:8765/oprmgmt/authenticate/register
 #### With the json object
 > {
        "username": "test1",
        "password": "test1"   }
   
 #### this creates a user to use the ui and backend. This will be linked to the UI in the next iteration
 ***
 
 ### About
 * The project offers a simple Token based authentication system, utilizing zuul filters and an authentication service for Token         generation.
 * The Team Data Management service does as the name states and manages the data of the employees.
 

# devco-test
This repository was created to store the devco test files.

## Structure

The following image shows the structure of the project:

![alt text](https://github.com/leon99adolfo/devco-test/blob/master/assets/images/structure.jpeg?raw=true)

* **.github/workflows**: folder containing pipelines.
* **src**: folder containing the project.
* **src/az-services**: this folder contains the files related to the aws calls. 
* **src/services**: this folder contains the files related to the business calls. 
* **src/handler**: main file of the project
* **package.json**: npm dependencies.
* **serverless.yml**: config file for aws services
* **tsconfig.json**: typescript configurations

## Soluction 🚀
Project create a serverless function in aws lambda, this aws lambda executes when a excel file uploads to S3 bucket and this creates a new txt file and this file is added to same bucket with the solution requested.




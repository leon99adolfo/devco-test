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

## Costs
The cost of the solution is 0. This is because AWS has 5 GB free in S3 services and 1'000,000 free executions for lambda functions.

![alt text](https://github.com/leon99adolfo/devco-test/blob/master/assets/images/costs.jpg?raw=true)

## Pipeline
The pipeline was configured to run when a person makes a push to the github repository

![alt text](https://github.com/leon99adolfo/devco-test/blob/master/assets/images/pipeline.JPG?raw=true)

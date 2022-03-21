#!groovy
pipeline {
    agent any
    environment {
        IMAGE_VERSION = "${env.BUILD_NUMBER}"
        LAST_CLOUD_RUN_REVISION = "radhe-resume-${currentBuild.previousBuild.getNumber()}"
        IMAGE_NAME = "gcr.io/ambient-net-308011/radhe-resume:v1.1.${IMAGE_VERSION}"
        PREVIOUS_IMAGE_NAME = "gcr.io/ambient-net-308011/radhe-resume:v1.1.${currentBuild.previousBuild.getNumber()}"
		GIT_HASH = ""
    }
    stages {
        stage('Git checkout') {
            steps{
                def scmVars = checkout([$class: 'GitSCM', branches: [[name: '*/master']],
    userRemoteConfigs: [[url: 'https://github.com/krishnadhoundiyal/aws-pipeline-demo.git']]])
				env.GIT_COMMIT = scmVars.GIT_COMMIT
            }
        }
      
    }
	}
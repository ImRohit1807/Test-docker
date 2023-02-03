pipeline {
  agent {
      docker {
          image 'node:16.6.1-slim'
          args '-p 3000:3000'
      }
  }
  environment {
    CI = 'true' 
  }
  tools {nodejs "node"}
    
  stages {
    stage('Git') {
      steps {
        git 'https://github.com/ImRohit1807/Test-docker.git'
      }
    }
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
}
pipeline {
    agent any
    environment {
        APP_NAME = "my-node-api"
        SECRET_KEY = credentials("SECRET_KEY")
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${APP_NAME} .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker stop ${APP_NAME} || true'
                sh 'docker rm ${APP_NAME} || true'
                sh 'docker run -d --name ${APP_NAME} -p 3000:3000 -e SECRET_KEY=${SECRET_KEY} ${APP_NAME}'
            }
        }
    }
}

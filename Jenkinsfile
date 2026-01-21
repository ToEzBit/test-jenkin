pipeline {
    agent any
    environment {
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
                sh 'docker build -t my-node-api .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker stop my-node-api || true'
                sh 'docker rm my-node-api || true'
                sh 'docker run -d --name my-node-api -p 3000:3000 -e SECRET_KEY=${SECRET_KEY} my-node-api'
            }
        }
    }
}

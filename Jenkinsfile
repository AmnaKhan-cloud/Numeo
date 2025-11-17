pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/AmnaKhan-cloud/Numeo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Setup Playwright') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Install Cucumber') {
            steps {
                bat 'npm install -D @cucumber/cucumber@latest'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --headed'
            }
        }
    }
}

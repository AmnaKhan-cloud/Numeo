
pipeline {
    agent any

    environment {
        NODE_ENV = "test"
    }

    stages {
        stage('Checkout') {
            steps {
                // Replace with your repo URL and branch
                git branch: 'master',
                    url: 'https://github.com/AmnaKhan-cloud/Numeo.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Setup Playwright') {
            steps {
                // Initialize Playwright (downloads browsers)
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Install Cucumber') {
            steps {
                // Install latest Cucumber as dev dependency
                sh 'npm install -D @cucumber/cucumber@latest'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run Playwright tests in headed mode
                sh 'npx playwright test --headed'
            }
        }

        stage('Archive Reports') {
            steps {
                // Save Playwright test reports
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo ' Pipeline completed successfully!'
        }
        failure {
            echo ' Pipeline failed. Check logs and reports.'
        }
    }
}

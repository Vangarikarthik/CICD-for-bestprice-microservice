pipeline {
    agent any
    
    environment {
        IMAGE_TAG1 = "karthikvangari/bestprice:latest"
        IMAGE_TAG2 = "karthikvangari/mobile:latest"
        IMAGE_TAG3 = "karthikvangari/laptop:latest"
        CONTAINER_NAME1="bestprice-container"
        CONTAINER_NAME2="mobile-container"
        CONTAINER_NAME3="laptop-container"

        KUBECONFIG = '/var/lib/jenkins/.kube/config'
 }
    
    stages {
        
    stage('Build Front Service') {
            steps {
                script {
                    dir('front') {
                        sh 'docker build -t $IMAGE_TAG1 .'
                    }
                }
            }
        }
        stage('Build Laptop Microservice') {
            steps {
                script {
                    dir('laptop_microservice') {
                        sh 'docker build -t $IMAGE_TAG3 .'
                    }
                }
            }
        }
        stage('Build Mobile Microservice') {
            steps {
                script {
                    dir('mobile_microservice') {
                        sh 'docker build -t $IMAGE_TAG2 .'
                    }
                }
            }
        }


       stage('push'){
              
           steps {

            sh "docker login -u karthikvangari -p Karthik@9666"
            sh "docker push $IMAGE_TAG1"
            sh 'docker push $IMAGE_TAG2'
            sh 'docker push $IMAGE_TAG3'
}

    }
     
            stage('Deploy') {
            steps {
                script {
                    
                        sh 'kubectl apply -f bestprice-deployment.yaml'
                        sh 'kubectl apply -f mobile-ms-deployment.yaml'
                        sh 'kubectl apply -f laptop-ms-deployment.yaml'

                  
                }
            }
        }
        
        stage('Open URL') {
            steps {
                script {
                    sleep 90
                    def serviceIP = sh(script: 'minikube service bestprice-service --url', returnStdout: true).trim()
                    echo "Service URL: ${serviceIP}"
                   
                }
            }
        }
    }
}

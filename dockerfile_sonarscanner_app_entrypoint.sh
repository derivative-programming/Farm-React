#!/bin/bash

echo "Waiting for 60 seconds to allow SonarQube to start..."
sleep 60

# Remove old reports if they exist
# [ -f "coverage/lcov.info" ] && rm -f "coverage/lcov.info"
# [ -f "coverage/junit.xml" ] && rm -f "coverage/junit.xml"
# [ -f "coverage/eslint-report.json" ] && rm -f "coverage/eslint-report.json"

# Run tests and generate coverage report
# npm run test:sonarqube

# Run ESLint and generate report
# npm run lint

sonar-scanner \
  -Dsonar.projectKey=DemoApp-React-UI \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://demo-app-react-ui-sonarqube:9000 \
  -Dsonar.login=sqa_3a49c3128cb8452744078e6eedf4a827904c38e0

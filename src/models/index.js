let users = [
  {
      "name": "John Doe",
      "employeeId": "EMP123",
      "location": "",
      "gender": "Male",
      "contact": {
          "email": "EMP123@team.telstra.com",
          "phone": "+91-9123456789"
      },
      "skills": [
          "Android",
          "GraphQL",
          "NodeJS",
          "microservices"
      ],
      "roleId": 'employee',
      "band": "3ii",
      "jobSearch": true,
      "currentLocation": "Hyderabad",
      "relocation": true 
  },
  {
    "name": "Rajitha Vel",
    "employeeId": "EMP321",
    "location": "",
    "gender": "Male",
    "contact": {
        "email": "emp321@team.telstra.com",
        "phone": "+91-912435689"
    },
    "skills": [
        "NodeJs",
        "Python",
        "aws",
        "microservices"
    ],
    "roleId": 'manager',
    "band": "3ii",
    "jobSearch": true,
    "currentLocation": "Hyderabad",
    "relocation": true 
}

]

let jobPostings = [
  {
      "jobId": "1",    
      "title": "Node developer",
      "description": "Need a developer experienced in node microservices",
      "skills": [
          "NodeJS",
          "microservices",
          "kubernetes"
      ],
      "bandLimit": "3ii",
      "location": "Hyderabad",
      "hiringManager": "manager_100@team.telstra.com",
      "domain": "B2B"
  }, {
    "jobId": "2",
    "title": "Java developer",
    "description": "Need a developer experienced in Java spring based microservices",
    "skills": [
        "Java Spring",
        "microservices",
        "aws"
    ],
    "bandLimit": "3ii",
    "location": "Hyderabad",
    "hiringManager": "manager_101@team.telstra.com",
    "domain": "S2P"
}
]

export default {
  users,
  jobPostings,
};

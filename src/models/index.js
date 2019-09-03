let users = [
  {
    "name": "Maushmi",
    "employeeId": "EMP114",
    "currentRole":"L1 recruiter",
    "experiecne":"8",
    "location": "Bengaluru",
    "education":"MBA, IIT Mumbai",
    "gender": "Male",
    "contact": {
        "email": "esh114@team.telstra.com",
        "phone": "+91-912435689"
    },
    "skills": [
        "recruitement",
        "hiring",
        "talent aquisition"      
    ],
    "roleId": 'recruiter',
    "band": "2",
    "jobSearch": true,
    "currentLocation": "Bengaluru",
    "relocation": true 
},{
  "name": "Eshwar S",
  "employeeId": "EMP222",
  "currentRole":"D2 Manager",
  "experiecne":"12",
  "location": "Bengaluru",
  "education":"B.Tech, IIT BHU",
  "gender": "Male",
  "contact": {
      "email": "esh222@team.telstra.com",
      "phone": "+91-912435689"
  },
  "skills": [
      "management",
      "operations",
      "delivery"
  ],
  "roleId": 'manager',
  "band": "2",
  "jobSearch": true,
  "currentLocation": "Bengaluru",
  "relocation": true 
},{
  "name": "Girish P M",
  "employeeId": "EMP321",
  "currentRole":"IT Developer",
  "experiecne":"4",
  "location": "",
  "gender": "Male",
  "education":"B.Tech, IIT Kanpur",
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
  "roleId": 'employee',
  "band": "3i",
  "jobSearch": true,
  "currentLocation": "Hyderabad",
  "relocation": true 
},{
  "name": "Arvind S",
  "employeeId": "EMP098",
  "currentRole":"IT Developer",
  "experiecne":"3",
  "location": "Bengaluru",
  "education":"B.Tech, IIT BHU",
  "gender": "Male",
  "contact": {
      "email": "esh098@team.telstra.com",
      "phone": "+91-912435689"
  },
  "skills": [
      "Java",
      "OOPS",
      "SPRING boot",
      "microservices",
  ],
  "roleId": 'employee',
  "band": "3i",
  "jobSearch": true,
  "currentLocation": "Bengaluru",
  "relocation": true 
},{
  "name": "Ramesh S",
  "currentRole":"Software Engineer",
  "employeeId": "EMP554",
  "experiecne":"4",
  "location": "",
  "gender": "Male",
  "education":"B.Tech, IIT Delhi",
  "contact": {
      "email": "emp554@team.telstra.com",
      "phone": "+91-912435689"
  },
  "skills": [
    "Java",
    "OOPS",
    "SPRING boot",
  ],
  "roleId": 'employee',
  "band": "3i",
  "jobSearch": true,
  "currentLocation": "Hyderabad",
  "relocation": true 
},{
  "name": "John Doe",
  "currentRole":"Engineer",
  "employeeId": "EMP123",
  "location": "",
  "experiecne":"3",
  "gender": "Male",
  "education":"B.Tech, Bits",
  "contact": {
      "email": "EMP123@team.telstra.com",
      "phone": "+91-9123456789"
  },
  "skills": [
      "Android",
      "GraphQL",
      "NodeJS",
      "microservices",
      "kubernetes"
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
"currentRole":"Graduate",
"experiecne":"2",
"location": "",
"gender": "Male",
"education":"B.Tech, IIT Kanpur",
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
      "description": "You will join one of our many teams to support our current PHP architectures while amplifying our productivity and while delivering and integrating AWS-based, four-tier microservice architecture using React.js, Java Spring, PHP APIgility, Node.js, SQL, and NoSQL technologies. You will continuously sharpen your TDD and BDD skills using Selenium, Behat, JBehave, Cucumber, and unit-testing frameworks.",
      "appliedCandidates":[
        {
          "name":"Girish PM",
          "email":"girish.pm@org.com"
        },
        {
          "name":"Ramesh S",
          "email":"ramesh.ss@org.com"
        },
        {
          "name":"Ramya N",
          "email":"ramya.pn@org.com"
        },
        {
          "name":"Gourish",
          "email":"gourish.pm@org.com"
        }
      ],
      "skills": [
          "NodeJS",
          "microservices",
          "kubernetes"
      ],
      "bandLimit": "3ii",
      "location": "Hyderabad",
      "hiringManager": "manager_100@team.telstra.com",
      "domain": "B2B",
      "experience":"2-3 Years",
      "teammates":[
          {
            "name":"Girish PM",
            "email":"girish.pm@telstra.com",
            "gender":"Male"
          },{
            "name":"Eshwar S",
            "email":"eshwar.s@telstra.com",
            "gender":"Male"
          },{
            "name":"Lakshmi S",
            "email":"laksmi.s@telstra.com",
            "gender":"Female"
          },{
            "name":"Harris P",
            "email":"harris.p@telstra.com",
            "gender":"Male"
          },{
            "name":"Ashvini Bhar",
            "email":"ashvini.bhat@telstra.com",
            "gender":"Female"
          },{
            "name":"Nitesh D",
            "email":"nitesh.s@telstra.com",
            "gender":"Male"
          }
      ]
  }, {
    "jobId": "2",
    "title": "Java developer",
    "description": "Complete understanding of Java collections framework including their performance implications of various data structures and algorithms.Through understanding of Java threading/concurrency this not only includes synchronized blocks, wait notify, but also executors, ThreadPools, Fork/Join, blocking queues, semaphores, countdown latch etc..Good knowledge of working with NoSQL DB's, preferably MongoDB for varierty of use cases such as caching, config and transactional data.Abilty to write functional style code using Java 8 constructs (CompletableFutures, Optional, Streams...)",
    "skills": [
        "Java Spring",
        "microservices",
        "aws"
    ],
    "appliedCandidates":[
      {
        "name":"Girish PM",
        "email":"girish.pm@org.com"
      },
      {
        "name":"Ramesh S",
        "email":"ramesh.ss@org.com"
      }
    ],
    "bandLimit": "3ii",
    "location": "Hyderabad",
    "hiringManager": "manager_101@team.telstra.com",
    "domain": "S2P",
    "experience":"4-6 Years",
    "teammates":[
        {
          "name":"Jon doe",
          "email":"jon.pm@telstra.com",
          "gender":"Male"
        },{
          "name":"Makil",
          "email":"malik.s@telstra.com",
          "gender":"Male"
        },{
            "name":"Rama S",
            "email":"rama.s@telstra.com",
            "gender":"Female"
        },{
            "name":"Kaushik",
            "email":"kart.s@telstra.com",
            "gender":"Male"
        },{
            "name":"Ashik",
            "email":"ashik.s@telstra.com",
            "gender":"Male"
        }
    ]
  },{
    "jobId": "4",
    "title": "Java Spring developer",
    "description": "Be a good flutter developer",
    "skills": [
        "Java",
        "OOPS",
        "SPRING boot",
        "microservices",
        "tdd"
    ],
    "appliedCandidates":[],
    "bandLimit": "3ii",
    "location": "Bengaluru",
    "hiringManager": "esh222@team.telstra.com",
    "domain": "S2P",
    "experience":"4-6 Years",
    "teammates":[
        {
          "name":"Manam PM",
          "email":"manam.pm@telstra.com",
          "gender":"Male"
        },{
          "name":"Ari T",
          "email":"ari.t@telstra.com",
          "gender":"Male"
        },{
            "name":"Rama P",
            "email":"rama.t@telstra.com",
            "gender":"Female"
        },{
            "name":"Rashmi SP",
            "email":"rashmi.ps@telstra.com",
            "gender":"Female"
        },{
            "name":"Dalai lama",
            "email":"lama.dalai@telstra.com",
            "gender":"Male"
        }
    ]
  },{
    "jobId": "5",
    "title": "Manager",
    "description": "Be a great manager and leader",
    "appliedCandidates":[],
    "skills": [
        "Mangement",
        "Delivery",
        "operations",
        "reporting",
    ],
    "bandLimit": "2",
    "location": "Bengaluru",
    "hiringManager": "esh311@team.telstra.com",
    "domain": "S2P",
    "experience":"4-6 Years",
    "teammates":[
        {
          "name":"Sanam PM",
          "email":"sanam.pm@telstra.com",
          "gender":"Male"
        },{
          "name":"Rama SM",
          "email":"rama.sm@telstra.com",
          "gender":"Female"
        }
    ]
  }
]

export default {
  users,
  jobPostings,
};

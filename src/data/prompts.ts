export interface Prompt {
  id: number;
  question: string;
  category: 'DSA' | 'System Design' | 'Behavioral' | 'Frontend' | 'Backend' | 'Cloud' | 'DevOps' | 'Mobile' | 'Database' | 'Security';
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

export const prompts: Prompt[] = [
  {
    id: 1,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a function to reverse a string in-place."
  },
  {
    id: 2,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Implement a function to check if a string is a palindrome."
  },
  {
    id: 3,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Find the first non-repeated character in a string."
  },
  {
    id: 4,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a program to check if two strings are anagrams."
  },
  {
    id: 5,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Implement a function to find the factorial of a number."
  },
  {
    id: 6,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a function to compute the nth Fibonacci number."
  },
  {
    id: 7,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Find the maximum element in an array."
  },
  {
    id: 8,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Implement a function to remove duplicates from a sorted array."
  },
  {
    id: 9,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a program to check if a number is prime."
  },
  {
    id: 10,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Swap two numbers without using a temporary variable."
  },
  {
    id: 11,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a function to merge two sorted arrays."
  },
  {
    id: 12,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Find the longest common substring between two strings."
  },
  {
    id: 13,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Write a function to detect a cycle in a linked list."
  },
  {
    id: 14,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a binary search algorithm for a sorted array."
  },
  {
    id: 15,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Find the intersection of two sorted arrays."
  },
  {
    id: 16,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Write a program to reverse a linked list."
  },
  {
    id: 17,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a stack using two queues."
  },
  {
    id: 18,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Find the kth largest element in an unsorted array."
  },
  {
    id: 19,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Write a function to check if a binary tree is balanced."
  },
  {
    id: 20,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a function to find the longest palindromic substring."
  },
  {
    id: 21,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Design an algorithm to solve the N-Queens problem."
  },
  {
    id: 22,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Implement a trie (prefix tree) with insert, search, and startsWith methods."
  },
  {
    id: 23,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Find the median of two sorted arrays."
  },
  {
    id: 24,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Implement a function to perform wildcard pattern matching."
  },
  {
    id: 25,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Design an algorithm for the shortest path in a weighted graph."
  },
  {
    id: 26,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Write a function to solve the word ladder problem."
  },
  {
    id: 27,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Implement a min-heap from scratch."
  },
  {
    id: 28,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Find the longest valid parentheses substring."
  },
  {
    id: 29,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Design an algorithm to solve the traveling salesman problem."
  },
  {
    id: 30,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Implement a function to perform regular expression matching."
  },
  {
    id: 31,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Explain the components of a basic web application architecture."
  },
  {
    id: 32,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Describe how HTTP works in a client-server model."
  },
  {
    id: 33,
    category: 'System Design',
    difficulty: 'Easy',
    question: "What are the key differences between monolithic and microservices architectures?"
  },
  {
    id: 34,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Explain the role of a load balancer in a distributed system."
  },
  {
    id: 35,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Describe the purpose of caching in system design."
  },
  {
    id: 36,
    category: 'System Design',
    difficulty: 'Easy',
    question: "What is a reverse proxy and how does it work?"
  },
  {
    id: 37,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Explain the concept of API gateways."
  },
  {
    id: 38,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Describe how DNS resolution works."
  },
  {
    id: 39,
    category: 'System Design',
    difficulty: 'Easy',
    question: "What is the purpose of a content delivery network (CDN)?"
  },
  {
    id: 40,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Explain the difference between horizontal and vertical scaling."
  },
  {
    id: 41,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a notification service for a mobile app."
  },
  {
    id: 42,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a rate-limiting system for an API."
  },
  {
    id: 43,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a file storage system like Dropbox."
  },
  {
    id: 44,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a chat application like WhatsApp."
  },
  {
    id: 45,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design an autocomplete feature for a search engine."
  },
  {
    id: 46,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a ride-sharing service like Uber."
  },
  {
    id: 47,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a news feed system for a social media platform."
  },
  {
    id: 48,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a recommendation system for an e-commerce platform."
  },
  {
    id: 49,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a distributed key-value store."
  },
  {
    id: 50,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a logging system for a distributed application."
  },
  {
    id: 51,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a distributed messaging system like Kafka."
  },
  {
    id: 52,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a search engine like Google."
  },
  {
    id: 53,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a scalable video streaming service like YouTube."
  },
  {
    id: 54,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a real-time collaborative text editor like Google Docs."
  },
  {
    id: 55,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a distributed task queue system like Celery."
  },
  {
    id: 56,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a global payment processing system."
  },
  {
    id: 57,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a distributed file system like Hadoop HDFS."
  },
  {
    id: 58,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a scalable online gaming platform."
  },
  {
    id: 59,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a fraud detection system for financial transactions."
  },
  {
    id: 60,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a distributed lock manager for a large-scale system."
  },
  {
    id: 61,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "Describe a situation where you had to learn a new technology quickly."
  },
  {
    id: 62,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "How do you stay updated with the latest trends in software development?"
  },
  {
    id: 63,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "What motivates you to work as a developer?"
  },
  {
    id: 64,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "How do you handle tight deadlines in a project?"
  },
  {
    id: 65,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "Describe a time when you received constructive feedback."
  },
  {
    id: 66,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "What is your approach to debugging a complex issue?"
  },
  {
    id: 67,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "How do you prioritize tasks in a project?"
  },
  {
    id: 68,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "Describe a time when you mentored a junior developer."
  },
  {
    id: 69,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "What do you do when you disagree with a technical decision?"
  },
  {
    id: 70,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "How do you ensure the quality of your code?"
  },
  {
    id: 71,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Tell me about a time when you had to resolve a conflict in your team."
  },
  {
    id: 72,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Describe a situation where you had to deal with an underperforming teammate."
  },
  {
    id: 73,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Tell me about a time when you failed to meet a deadline and how you handled it."
  },
  {
    id: 74,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Describe a project where you took a leadership role."
  },
  {
    id: 75,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "How do you handle a situation where a client changes requirements mid-project?"
  },
  {
    id: 76,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Tell me about a time when you had to explain a complex technical concept to a non-technical stakeholder."
  },
  {
    id: 77,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Describe a situation where you had to balance technical debt and new feature development."
  },
  {
    id: 78,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Tell me about a time when you improved a process in your team."
  },
  {
    id: 79,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "How do you approach giving feedback to a colleague?"
  },
  {
    id: 80,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Describe a time when you had to work with a difficult manager."
  },
  {
    id: 81,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Tell me about a time when you had to make a critical technical decision under pressure."
  },
  {
    id: 82,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Describe a situation where you had to convince your team to adopt a new technology."
  },
  {
    id: 83,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Tell me about a time when you had to recover from a major production failure."
  },
  {
    id: 84,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Describe a situation where you had to manage a project with limited resources."
  },
  {
    id: 85,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Tell me about a time when you had to deal with a security breach."
  },
  {
    id: 86,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Describe a situation where you had to align multiple teams on a complex project."
  },
  {
    id: 87,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Tell me about a time when you had to pivot a project due to unexpected challenges."
  },
  {
    id: 88,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Describe a situation where you had to negotiate project scope with stakeholders."
  },
  {
    id: 89,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Tell me about a time when you had to manage a high-stakes project with tight deadlines."
  },
  {
    id: 90,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Describe a situation where you had to handle a major ethical dilemma in a project."
  },
  {
    id: 91,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "Explain the difference between `let`, `const`, and `var` in JavaScript."
  },
  {
    id: 92,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "What is the purpose of the `async` and `await` keywords in JavaScript?"
  },
  {
    id: 93,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "Describe how the CSS box model works."
  },
  {
    id: 94,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "What is the difference between `flexbox` and CSS Grid?"
  },
  {
    id: 95,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "Explain the concept of event delegation in JavaScript."
  },
  {
    id: 96,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "What is the purpose of the `data-` attribute in HTML?"
  },
  {
    id: 97,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "Describe how to make a website accessible."
  },
  {
    id: 98,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "What is the role of the `meta` tag in HTML?"
  },
  {
    id: 99,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "Explain the difference between inline and block elements in CSS."
  },
  {
    id: 100,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "What is the purpose of the `z-index` property in CSS?"
  },
  {
    id: 101,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Implement a debounce function for handling user input in JavaScript."
  },
  {
    id: 102,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "How would you handle state management in a large React application?"
  },
  {
    id: 103,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Explain how to optimize the rendering performance of a Vue.js application."
  },
  {
    id: 104,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Implement a custom hook in React for fetching data from an API."
  },
  {
    id: 105,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "How would you implement lazy loading for images in a web application?"
  },
  {
    id: 106,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Explain the concept of virtual DOM and its benefits."
  },
  {
    id: 107,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "How would you handle browser compatibility issues in a web application?"
  },
  {
    id: 108,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Implement a responsive navigation bar using CSS and JavaScript."
  },
  {
    id: 109,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Explain how to use WebSockets for real-time communication in a web app."
  },
  {
    id: 110,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "How would you optimize a web application for SEO?"
  },
  {
    id: 111,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "Design a reusable component library for a React application."
  },
  {
    id: 112,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "Implement a type-ahead search feature with caching and debouncing."
  },
  {
    id: 113,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "How would you implement server-side rendering in a Next.js application?"
  },
  {
    id: 114,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "Design a real-time collaborative whiteboard using WebRTC."
  },
  {
    id: 115,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "Explain how to implement a progressive web app (PWA) with offline support."
  },
  {
    id: 116,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "How would you optimize the performance of a large-scale Angular application?"
  },
  {
    id: 117,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "Implement a drag-and-drop file upload feature with progress indicators."
  },
  {
    id: 118,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "Design a system for A/B testing in a frontend application."
  },
  {
    id: 119,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "How would you implement internationalization (i18n) in a web application?"
  },
  {
    id: 120,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "Explain how to secure a frontend application against XSS and CSRF attacks."
  },
  {
    id: 121,
    category: 'Backend',
    difficulty: 'Easy',
    question: "Explain the difference between REST and GraphQL APIs."
  },
  {
    id: 122,
    category: 'Backend',
    difficulty: 'Easy',
    question: "What is the purpose of middleware in a web framework?"
  },
  {
    id: 123,
    category: 'Backend',
    difficulty: 'Easy',
    question: "Describe how authentication works in a web application."
  },
  {
    id: 124,
    category: 'Backend',
    difficulty: 'Easy',
    question: "What is the role of an ORM in backend development?"
  },
  {
    id: 125,
    category: 'Backend',
    difficulty: 'Easy',
    question: "Explain the concept of statelessness in REST APIs."
  },
  {
    id: 126,
    category: 'Backend',
    difficulty: 'Easy',
    question: "What is the difference between synchronous and asynchronous processing?"
  },
  {
    id: 127,
    category: 'Backend',
    difficulty: 'Easy',
    question: "Describe the purpose of environment variables in a backend application."
  },
  {
    id: 128,
    category: 'Backend',
    difficulty: 'Easy',
    question: "What is the role of a web server like Nginx?"
  },
  {
    id: 129,
    category: 'Backend',
    difficulty: 'Easy',
    question: "Explain the concept of request-response in HTTP."
  },
  {
    id: 130,
    category: 'Backend',
    difficulty: 'Easy',
    question: "What is the purpose of a session in a web application?"
  },
  {
    id: 131,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Design a RESTful API for a blogging platform."
  },
  {
    id: 132,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Implement a caching strategy for a high-traffic API."
  },
  {
    id: 133,
    category: 'Backend',
    difficulty: 'Medium',
    question: "How would you handle database migrations in a production environment?"
  },
  {
    id: 134,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Explain how to implement JWT-based authentication in a backend."
  },
  {
    id: 135,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Design a task scheduling system for a backend application."
  },
  {
    id: 136,
    category: 'Backend',
    difficulty: 'Medium',
    question: "How would you handle concurrent requests in a Node.js application?"
  },
  {
    id: 137,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Implement a rate-limiting middleware for an Express.js API."
  },
  {
    id: 138,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Explain how to optimize database queries in a backend application."
  },
  {
    id: 139,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Design a logging system for a microservices architecture."
  },
  {
    id: 140,
    category: 'Backend',
    difficulty: 'Medium',
    question: "How would you implement pagination in a REST API?"
  },
  {
    id: 141,
    category: 'Backend',
    difficulty: 'Hard',
    question: "Design a distributed transaction system for a banking application."
  },
  {
    id: 142,
    category: 'Backend',
    difficulty: 'Hard',
    question: "Implement a message queue system for asynchronous task processing."
  },
  {
    id: 143,
    category: 'Backend',
    difficulty: 'Hard',
    question: "How would you handle eventual consistency in a distributed system?"
  },
  {
    id: 144,
    category: 'Backend',
    difficulty: 'Hard',
    question: "Design a scalable event-driven architecture for a real-time application."
  },
  {
    id: 145,
    category: 'Backend',
    difficulty: 'Hard',
    question: "Explain how to secure a backend API against SQL injection attacks."
  },
  {
    id: 146,
    category: 'Backend',
    difficulty: 'Hard',
    question: "Implement a distributed cache using Redis for a backend system."
  },
  {
    id: 147,
    category: 'Backend',
    difficulty: 'Hard',
    question: "Design a system for handling large file uploads in a backend."
  },
  {
    id: 148,
    category: 'Backend',
    difficulty: 'Hard',
    question: "How would you implement circuit breakers in a microservices architecture?"
  },
  {
    id: 149,
    category: 'Backend',
    difficulty: 'Hard',
    question: "Design a system for real-time analytics in a backend application."
  },
  {
    id: 150,
    category: 'Backend',
    difficulty: 'Hard',
    question: "Explain how to handle graceful degradation in a high-traffic backend."
  },
  {
    id: 151,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "What is the difference between IaaS, PaaS, and SaaS?"
  },
  {
    id: 152,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "Explain the concept of serverless computing."
  },
  {
    id: 153,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "What is the role of a virtual machine in cloud computing?"
  },
  {
    id: 154,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "Describe the benefits of using containers in the cloud."
  },
  {
    id: 155,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "What is the purpose of a cloud provider's region and availability zone?"
  },
  {
    id: 156,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "Explain the concept of auto-scaling in cloud environments."
  },
  {
    id: 157,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "What is the role of a cloud storage service like AWS S3?"
  },
  {
    id: 158,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "Describe the purpose of a cloud-based load balancer."
  },
  {
    id: 159,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "What is the difference between public, private, and hybrid clouds?"
  },
  {
    id: 160,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "Explain the concept of cloud orchestration."
  },
  {
    id: 161,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "Design a cloud architecture for a high-traffic e-commerce platform."
  },
  {
    id: 162,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "How would you implement a serverless backend using AWS Lambda?"
  },
  {
    id: 163,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "Explain how to secure data in a cloud environment."
  },
  {
    id: 164,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "Design a disaster recovery plan for a cloud-based application."
  },
  {
    id: 165,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "How would you optimize costs in a cloud deployment?"
  },
  {
    id: 166,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "Explain how to use Kubernetes for container orchestration in the cloud."
  },
  {
    id: 167,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "Design a cloud-based CI/CD pipeline."
  },
  {
    id: 168,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "How would you implement monitoring for a cloud-native application?"
  },
  {
    id: 169,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "Explain how to use cloud functions for event-driven processing."
  },
  {
    id: 170,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "Design a multi-region deployment for a cloud application."
  },
  {
    id: 171,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Design a globally distributed database system in the cloud."
  },
  {
    id: 172,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "How would you implement a zero-downtime deployment in a cloud environment?"
  },
  {
    id: 173,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Design a cloud-based machine learning pipeline."
  },
  {
    id: 174,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Explain how to handle GDPR compliance in a cloud application."
  },
  {
    id: 175,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Design a hybrid cloud architecture for a financial institution."
  },
  {
    id: 176,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "How would you implement a secure multi-tenant system in the cloud?"
  },
  {
    id: 177,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Design a cloud-based real-time analytics system."
  },
  {
    id: 178,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Explain how to handle data sovereignty in a cloud deployment."
  },
  {
    id: 179,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Design a cloud-based IoT platform for smart devices."
  },
  {
    id: 180,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "How would you implement a cloud-based disaster recovery system for a global application?"
  },
  {
    id: 181,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "What is the purpose of a Dockerfile?"
  },
  {
    id: 182,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "Explain the difference between CI and CD."
  },
  {
    id: 183,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "What is the role of a configuration management tool like Ansible?"
  },
  {
    id: 184,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "Describe the purpose of a container registry."
  },
  {
    id: 185,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "What is the role of a version control system in DevOps?"
  },
  {
    id: 186,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "Explain the concept of blue-green deployments."
  },
  {
    id: 187,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "What is the purpose of a monitoring tool like Prometheus?"
  },
  {
    id: 188,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "Describe the role of a CI/CD tool like Jenkins."
  },
  {
    id: 189,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "What is the purpose of infrastructure as code?"
  },
  {
    id: 190,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "Explain the concept of a service mesh."
  },
  {
    id: 191,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "Design a CI/CD pipeline for a microservices application."
  },
  {
    id: 192,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "How would you implement automated testing in a CI/CD pipeline?"
  },
  {
    id: 193,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "Explain how to use Terraform for infrastructure provisioning."
  },
  {
    id: 194,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "Design a monitoring system for a Kubernetes cluster."
  },
  {
    id: 195,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "How would you handle secrets management in a DevOps pipeline?"
  },
  {
    id: 196,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "Explain how to implement canary deployments."
  },
  {
    id: 197,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "Design a backup and restore strategy for a production environment."
  },
  {
    id: 198,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "How would you optimize the performance of a Dockerized application?"
  },
  {
    id: 199,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "Explain how to use a service mesh like Istio for traffic management."
  },
  {
    id: 200,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "Design a logging aggregation system for a distributed application."
  },
  {
    id: 201,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Design a zero-downtime deployment strategy for a Kubernetes application."
  },
  {
    id: 202,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "How would you implement chaos engineering in a production environment?"
  },
  {
    id: 203,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Design a scalable observability system for a microservices architecture."
  },
  {
    id: 204,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Explain how to handle multi-cloud deployments in a DevOps pipeline."
  },
  {
    id: 205,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Design a system for automated incident response in a DevOps environment."
  },
  {
    id: 206,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "How would you implement a GitOps workflow for infrastructure management?"
  },
  {
    id: 207,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Design a system for managing large-scale container orchestration."
  },
  {
    id: 208,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Explain how to handle disaster recovery in a DevOps environment."
  },
  {
    id: 209,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Design a system for automated scaling of a Kubernetes cluster."
  },
  {
    id: 210,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "How would you implement a secure CI/CD pipeline for a regulated industry?"
  },
  {
    id: 211,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "What is the difference between native and hybrid mobile apps?"
  },
  {
    id: 212,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "Explain the role of Activities in Android development."
  },
  {
    id: 213,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "What is the purpose of a ViewController in iOS development?"
  },
  {
    id: 214,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "Describe how to handle screen rotations in a mobile app."
  },
  {
    id: 215,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "What is the role of the Android Manifest file?"
  },
  {
    id: 216,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "Explain the concept of Auto Layout in iOS."
  },
  {
    id: 217,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "What is the purpose of a plist file in iOS?"
  },
  {
    id: 218,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "Describe the role of fragments in Android development."
  },
  {
    id: 219,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "What is the difference between UIKit and SwiftUI?"
  },
  {
    id: 220,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "Explain the concept of intents in Android."
  },
  {
    id: 221,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "Design a mobile app for offline data synchronization."
  },
  {
    id: 222,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "How would you implement push notifications in an iOS app?"
  },
  {
    id: 223,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "Explain how to optimize battery usage in a mobile app."
  },
  {
    id: 224,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "Design a mobile app for real-time location tracking."
  },
  {
    id: 225,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "How would you handle API versioning in a mobile app?"
  },
  {
    id: 226,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "Explain how to implement deep linking in an Android app."
  },
  {
    id: 227,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "Design a mobile app with a custom navigation flow."
  },
  {
    id: 228,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "How would you implement secure storage in a mobile app?"
  },
  {
    id: 229,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "Explain how to handle memory leaks in an Android app."
  },
  {
    id: 230,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "Design a mobile app for handling large datasets."
  },
  {
    id: 231,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Design a mobile app for real-time video streaming."
  },
  {
    id: 232,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "How would you implement a custom gesture recognizer in iOS?"
  },
  {
    id: 233,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Design a mobile app for augmented reality features."
  },
  {
    id: 234,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Explain how to optimize startup time in an Android app."
  },
  {
    id: 235,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Design a mobile app for secure payment processing."
  },
  {
    id: 236,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "How would you implement a cross-platform mobile app using Flutter?"
  },
  {
    id: 237,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Design a mobile app for handling background tasks efficiently."
  },
  {
    id: 238,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Explain how to implement biometric authentication in a mobile app."
  },
  {
    id: 239,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Design a mobile app for real-time collaboration."
  },
  {
    id: 240,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "How would you handle app store rejections for a mobile app?"
  },
  {
    id: 241,
    category: 'Database',
    difficulty: 'Easy',
    question: "What is the difference between a primary key and a foreign key?"
  },
  {
    id: 242,
    category: 'Database',
    difficulty: 'Easy',
    question: "Explain the concept of normalization in databases."
  },
  {
    id: 243,
    category: 'Database',
    difficulty: 'Easy',
    question: "What is an index in a database and why is it used?"
  },
  {
    id: 244,
    category: 'Database',
    difficulty: 'Easy',
    question: "Describe the difference between INNER JOIN and LEFT JOIN."
  },
  {
    id: 245,
    category: 'Database',
    difficulty: 'Easy',
    question: "What is the purpose of a transaction in a database?"
  },
  {
    id: 246,
    category: 'Database',
    difficulty: 'Easy',
    question: "Explain the concept of ACID properties in databases."
  },
  {
    id: 247,
    category: 'Database',
    difficulty: 'Easy',
    question: "What is the difference between a relational and non-relational database?"
  },
  {
    id: 248,
    category: 'Database',
    difficulty: 'Easy',
    question: "Describe the role of a database schema."
  },
  {
    id: 249,
    category: 'Database',
    difficulty: 'Easy',
    question: "What is the purpose of a stored procedure?"
  },
  {
    id: 250,
    category: 'Database',
    difficulty: 'Easy',
    question: "Explain the concept of database sharding."
  },
  {
    id: 251,
    category: 'Database',
    difficulty: 'Medium',
    question: "Design a database schema for a social media platform."
  },
  {
    id: 252,
    category: 'Database',
    difficulty: 'Medium',
    question: "How would you optimize a slow SQL query?"
  },
  {
    id: 253,
    category: 'Database',
    difficulty: 'Medium',
    question: "Explain how to implement database replication."
  },
  {
    id: 254,
    category: 'Database',
    difficulty: 'Medium',
    question: "Design a database for an e-commerce application."
  },
  {
    id: 255,
    category: 'Database',
    difficulty: 'Medium',
    question: "How would you handle database versioning?"
  },
  {
    id: 256,
    category: 'Database',
    difficulty: 'Medium',
    question: "Explain how to use indexing effectively in a database."
  },
  {
    id: 257,
    category: 'Database',
    difficulty: 'Medium',
    question: "Design a database for a ride-sharing service."
  },
  {
    id: 258,
    category: 'Database',
    difficulty: 'Medium',
    question: "How would you implement full-text search in a database?"
  },
  {
    id: 259,
    category: 'Database',
    difficulty: 'Medium',
    question: "Explain how to handle concurrent database transactions."
  },
  {
    id: 260,
    category: 'Database',
    difficulty: 'Medium',
    question: "Design a database for a blogging platform."
  },
  {
    id: 261,
    category: 'Database',
    difficulty: 'Hard',
    question: "Design a distributed database for a global application."
  },
  {
    id: 262,
    category: 'Database',
    difficulty: 'Hard',
    question: "How would you handle database partitioning for scalability?"
  },
  {
    id: 263,
    category: 'Database',
    difficulty: 'Hard',
    question: "Explain how to implement a database backup and recovery strategy."
  },
  {
    id: 264,
    category: 'Database',
    difficulty: 'Hard',
    question: "Design a database for a real-time analytics system."
  },
  {
    id: 265,
    category: 'Database',
    difficulty: 'Hard',
    question: "How would you handle data consistency in a NoSQL database?"
  },
  {
    id: 266,
    category: 'Database',
    difficulty: 'Hard',
    question: "Explain how to implement a database for a time-series application."
  },
  {
    id: 267,
    category: 'Database',
    difficulty: 'Hard',
    question: "Design a database for a multi-tenant application."
  },
  {
    id: 268,
    category: 'Database',
    difficulty: 'Hard',
    question: "How would you handle database failover in a production environment?"
  },
  {
    id: 269,
    category: 'Database',
    difficulty: 'Hard',
    question: "Explain how to optimize a database for high write throughput."
  },
  {
    id: 270,
    category: 'Database',
    difficulty: 'Hard',
    question: "Design a database for a distributed messaging system."
  },
  {
    id: 271,
    category: 'Security',
    difficulty: 'Easy',
    question: "What is the difference between authentication and authorization?"
  },
  {
    id: 272,
    category: 'Security',
    difficulty: 'Easy',
    question: "Explain the concept of HTTPS and how it works."
  },
  {
    id: 273,
    category: 'Security',
    difficulty: 'Easy',
    question: "What is a CSRF attack and how can it be prevented?"
  },
  {
    id: 274,
    category: 'Security',
    difficulty: 'Easy',
    question: "Describe the purpose of a firewall in network security."
  },
  {
    id: 275,
    category: 'Security',
    difficulty: 'Easy',
    question: "What is the role of encryption in data security?"
  },
  {
    id: 276,
    category: 'Security',
    difficulty: 'Easy',
    question: "Explain the concept of a security token."
  },
  {
    id: 277,
    category: 'Security',
    difficulty: 'Easy',
    question: "What is the purpose of a Content Security Policy (CSP)?"
  },
  {
    id: 278,
    category: 'Security',
    difficulty: 'Easy',
    question: "Describe the role of a VPN in network security."
  },
  {
    id: 279,
    category: 'Security',
    difficulty: 'Easy',
    question: "What is the purpose of a digital certificate?"
  },
  {
    id: 280,
    category: 'Security',
    difficulty: 'Easy',
    question: "Explain the concept of two-factor authentication."
  },
  {
    id: 281,
    category: 'Security',
    difficulty: 'Medium',
    question: "How would you prevent SQL injection in a web application?"
  },
  {
    id: 282,
    category: 'Security',
    difficulty: 'Medium',
    question: "Explain how to implement OAuth 2.0 for secure API access."
  },
  {
    id: 283,
    category: 'Security',
    difficulty: 'Medium',
    question: "Design a system to detect and mitigate DDoS attacks."
  },
  {
    id: 284,
    category: 'Security',
    difficulty: 'Medium',
    question: "How would you secure sensitive data in transit and at rest?"
  },
  {
    id: 285,
    category: 'Security',
    difficulty: 'Medium',
    question: "Explain how to implement secure password storage in a database."
  },
  {
    id: 286,
    category: 'Security',
    difficulty: 'Medium',
    question: "Design a system to handle session management securely."
  },
  {
    id: 287,
    category: 'Security',
    difficulty: 'Medium',
    question: "How would you prevent cross-site scripting (XSS) attacks?"
  },
  {
    id: 288,
    category: 'Security',
    difficulty: 'Medium',
    question: "Explain the concept of penetration testing and its importance."
  },
  {
    id: 289,
    category: 'Security',
    difficulty: 'Medium',
    question: "How would you implement secure file uploads in a web application?"
  },
  {
    id: 290,
    category: 'Security',
    difficulty: 'Medium',
    question: "Design a system for secure API key management."
  },
  {
    id: 291,
    category: 'Security',
    difficulty: 'Hard',
    question: "Design a system to ensure end-to-end encryption for a messaging app."
  },
  {
    id: 292,
    category: 'Security',
    difficulty: 'Hard',
    question: "How would you implement a zero-trust security model in an organization?"
  },
  {
    id: 293,
    category: 'Security',
    difficulty: 'Hard',
    question: "Design a system to detect and respond to insider threats."
  },
  {
    id: 294,
    category: 'Security',
    difficulty: 'Hard',
    question: "Explain how to secure a microservices architecture against common vulnerabilities."
  },
  {
    id: 295,
    category: 'Security',
    difficulty: 'Hard',
    question: "Design a system for secure key rotation in a cloud environment."
  },
  {
    id: 296,
    category: 'Security',
    difficulty: 'Hard',
    question: "How would you implement a secure single sign-on (SSO) system?"
  },
  {
    id: 297,
    category: 'Security',
    difficulty: 'Hard',
    question: "Design a system to handle secure data anonymization for analytics."
  },
  {
    id: 298,
    category: 'Security',
    difficulty: 'Hard',
    question: "Explain how to mitigate supply chain attacks in a software development pipeline."
  },
  {
    id: 299,
    category: 'Security',
    difficulty: 'Hard',
    question: "Design a system for secure audit logging in a distributed application."
  },
  {
    id: 300,
    category: 'Security',
    difficulty: 'Hard',
    question: "How would you handle a data breach incident in a production environment?"
  },
  {
    id: 301,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a function to check if a number is a power of two."
  },
  {
    id: 302,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Implement a function to find the GCD of two numbers."
  },
  {
    id: 303,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a program to count the number of 1 bits in a binary number."
  },
  {
    id: 304,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Implement a function to rotate an array by k positions."
  },
  {
    id: 305,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a function to check if a string contains only digits."
  },
  {
    id: 306,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Implement a function to find the square root of a number without using built-in functions."
  },
  {
    id: 307,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a program to check if a linked list is a palindrome."
  },
  {
    id: 308,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Implement a function to find the sum of all elements in an array."
  },
  {
    id: 309,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a function to convert a decimal number to binary."
  },
  {
    id: 310,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Implement a function to find the length of a linked list."
  },
  {
    id: 311,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Write a function to find the lowest common ancestor in a binary tree."
  },
  {
    id: 312,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a function to perform an in-order traversal of a binary tree."
  },
  {
    id: 313,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Write a program to find the maximum subarray sum."
  },
  {
    id: 314,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a function to rotate a matrix by 90 degrees."
  },
  {
    id: 315,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Write a function to check if a string is a valid parenthesis sequence."
  },
  {
    id: 316,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a queue using two stacks."
  },
  {
    id: 317,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Write a program to find the longest increasing subsequence."
  },
  {
    id: 318,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a function to perform a level-order traversal of a binary tree."
  },
  {
    id: 319,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Write a function to find the shortest path in a binary maze."
  },
  {
    id: 320,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a function to group anagrams from a list of strings."
  },
  {
    id: 321,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Write a function to find the kth smallest element in a BST."
  },
  {
    id: 322,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Implement a function to solve the 0/1 knapsack problem."
  },
  {
    id: 323,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Write a program to find the longest common subsequence of two strings."
  },
  {
    id: 324,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Implement a function to merge k sorted linked lists."
  },
  {
    id: 325,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Write a function to find the minimum window substring containing all characters of another string."
  },
  {
    id: 326,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Implement a function to solve the Sudoku puzzle."
  },
  {
    id: 327,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Write a program to find the maximum profit from stock prices."
  },
  {
    id: 328,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Implement a function to perform topological sorting of a directed graph."
  },
  {
    id: 329,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Write a function to find the shortest path in a grid with obstacles."
  },
  {
    id: 330,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Implement a function to solve the edit distance problem."
  },
  {
    id: 331,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Explain the concept of eventual consistency in distributed systems."
  },
  {
    id: 332,
    category: 'System Design',
    difficulty: 'Easy',
    question: "What is the purpose of a message broker in system design?"
  },
  {
    id: 333,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Describe the role of a database in a web application."
  },
  {
    id: 334,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Explain the concept of sharding in distributed systems."
  },
  {
    id: 335,
    category: 'System Design',
    difficulty: 'Easy',
    question: "What is the purpose of a circuit breaker in system design?"
  },
  {
    id: 336,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Describe the role of a service discovery mechanism."
  },
  {
    id: 337,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Explain the concept of idempotency in API design."
  },
  {
    id: 338,
    category: 'System Design',
    difficulty: 'Easy',
    question: "What is the purpose of a distributed tracing system?"
  },
  {
    id: 339,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Describe the role of a queue in asynchronous processing."
  },
  {
    id: 340,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Explain the concept of a stateless system."
  },
  {
    id: 341,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a system for real-time stock price updates."
  },
  {
    id: 342,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a booking system for a movie theater."
  },
  {
    id: 343,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a system for processing online orders."
  },
  {
    id: 344,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a system for user authentication across multiple services."
  },
  {
    id: 345,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a system for real-time chat notifications."
  },
  {
    id: 346,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a system for tracking user activity on a website."
  },
  {
    id: 347,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a system for handling large-scale email campaigns."
  },
  {
    id: 348,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a system for real-time analytics of website traffic."
  },
  {
    id: 349,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a system for distributed task scheduling."
  },
  {
    id: 350,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a system for real-time leaderboard updates."
  },
  {
    id: 351,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a scalable system for real-time sports betting."
  },
  {
    id: 352,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for distributed machine learning model training."
  },
  {
    id: 353,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for real-time fraud detection in financial transactions."
  },
  {
    id: 354,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for distributed log processing."
  },
  {
    id: 355,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for real-time supply chain tracking."
  },
  {
    id: 356,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for distributed video transcoding."
  },
  {
    id: 357,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for real-time traffic monitoring."
  },
  {
    id: 358,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for distributed backup and recovery."
  },
  {
    id: 359,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for real-time event processing."
  },
  {
    id: 360,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for distributed configuration management."
  },
  {
    id: 361,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "How do you manage stress during a high-pressure project?"
  },
  {
    id: 362,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "Describe a time when you went above and beyond for a project."
  },
  {
    id: 363,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "What is your approach to learning a new programming language?"
  },
  {
    id: 364,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "How do you handle interruptions during focused work?"
  },
  {
    id: 365,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "Describe a time when you helped a teammate solve a problem."
  },
  {
    id: 366,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "What is your approach to estimating project timelines?"
  },
  {
    id: 367,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "How do you stay motivated during repetitive tasks?"
  },
  {
    id: 368,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "Describe a time when you adapted to a new team process."
  },
  {
    id: 369,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "What is your approach to code reviews?"
  },
  {
    id: 370,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "How do you handle ambiguous project requirements?"
  },
  {
    id: 371,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Describe a time when you had to push back on unrealistic deadlines."
  },
  {
    id: 372,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Tell me about a time when you automated a repetitive task."
  },
  {
    id: 373,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Describe a situation where you had to prioritize certain features over others."
  },
  {
    id: 374,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Tell me about a time when you had to learn from a mistake."
  },
  {
    id: 375,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Describe a situation where you had to manage stakeholder expectations."
  },
  {
    id: 376,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Tell me about a time when you improved code performance."
  },
  {
    id: 377,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Describe a situation where you had to work with incomplete documentation."
  },
  {
    id: 378,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Tell me about a time when you collaborated with a remote team."
  },
  {
    id: 379,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Describe a situation where you had to refactor legacy code."
  },
  {
    id: 380,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Tell me about a time when you had to meet a tight bug-fix deadline."
  },
  {
    id: 381,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Describe a time when you led a team through a major technical migration."
  },
  {
    id: 382,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Tell me about a time when you resolved a critical production issue under time pressure."
  },
  {
    id: 383,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Describe a situation where you had to balance innovation with stability in a project."
  },
  {
    id: 384,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Tell me about a time when you implemented a new development methodology."
  },
  {
    id: 385,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Describe a situation where you had to manage conflicting priorities across multiple projects."
  },
  {
    id: 386,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Tell me about a time when you drove a major architectural change."
  },
  {
    id: 387,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Describe a situation where you had to recover from a failed deployment."
  },
  {
    id: 388,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Tell me about a time when you mentored a team through a complex technical challenge."
  },
  {
    id: 389,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Describe a situation where you had to address technical debt in a live system."
  },
  {
    id: 390,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Tell me about a time when you navigated a major scope change mid-project."
  },
  {
    id: 391,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "Explain the purpose of the `aria-` attributes in HTML."
  },
  {
    id: 392,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "What is the difference between `==` and `===` in JavaScript?"
  },
  {
    id: 393,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "Describe how to center an element using CSS."
  },
  {
    id: 394,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "What is the purpose of the `alt` attribute in images?"
  },
  {
    id: 395,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "Explain the concept of closures in JavaScript."
  },
  {
    id: 396,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "What is the difference between `GET` and `POST` HTTP methods?"
  },
  {
    id: 397,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "Describe the role of the `viewport` meta tag."
  },
  {
    id: 398,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "What is the purpose of the `Promise` object in JavaScript?"
  },
  {
    id: 399,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "Explain how to make a button accessible."
  },
  {
    id: 400,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "What is the difference between `margin` and `padding` in CSS?"
  },
  {
    id: 401,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Implement a modal dialog using HTML, CSS, and JavaScript."
  },
  {
    id: 402,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "How would you handle form validation in a React application?"
  },
  {
    id: 403,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Explain how to implement a dark mode toggle in a web app."
  },
  {
    id: 404,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Implement a carousel component using JavaScript."
  },
  {
    id: 405,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "How would you optimize images for a web application?"
  },
  {
    id: 406,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Explain how to handle responsive typography in CSS."
  },
  {
    id: 407,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Implement a pagination component for a web app."
  },
  {
    id: 408,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "How would you handle cross-browser testing for a web application?"
  },
  {
    id: 409,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Explain how to implement a sticky header in CSS."
  },
  {
    id: 410,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Implement a tooltip component using JavaScript."
  },
  {
    id: 411,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "Design a real-time chat interface using WebSockets."
  },
  {
    id: 412,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "How would you implement a virtualized list in React for large datasets?"
  },
  {
    id: 413,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "Design a dynamic form builder with drag-and-drop functionality."
  },
  {
    id: 414,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "How would you implement a real-time data visualization dashboard?"
  },
  {
    id: 415,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "Design a multi-step form with validation and progress tracking."
  },
  {
    id: 416,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "How would you implement a custom animation library in JavaScript?"
  },
  {
    id: 417,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "Design a real-time collaborative drawing app."
  },
  {
    id: 418,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "How would you implement a contenteditable rich text editor?"
  },
  {
    id: 419,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "Design a system for dynamic theme switching in a web app."
  },
  {
    id: 420,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "How would you implement a real-time search with autocomplete?"
  },
  {
    id: 421,
    category: 'Backend',
    difficulty: 'Easy',
    question: "What is the purpose of a reverse proxy in a backend system?"
  },
  {
    id: 422,
    category: 'Backend',
    difficulty: 'Easy',
    question: "Explain the concept of CORS and how to handle it."
  },
  {
    id: 423,
    category: 'Backend',
    difficulty: 'Easy',
    question: "What is the role of a load balancer in a backend architecture?"
  },
  {
    id: 424,
    category: 'Backend',
    difficulty: 'Easy',
    question: "Describe the purpose of a connection pool in a backend."
  },
  {
    id: 425,
    category: 'Backend',
    difficulty: 'Easy',
    question: "What is the difference between PUT and PATCH HTTP methods?"
  },
  {
    id: 426,
    category: 'Backend',
    difficulty: 'Easy',
    question: "Explain the concept of a webhook."
  },
  {
    id: 427,
    category: 'Backend',
    difficulty: 'Easy',
    question: "What is the purpose of a background job in a backend?"
  },
  {
    id: 428,
    category: 'Backend',
    difficulty: 'Easy',
    question: "Describe the role of a message queue in a backend."
  },
  {
    id: 429,
    category: 'Backend',
    difficulty: 'Easy',
    question: "What is the purpose of a cache in a backend system?"
  },
  {
    id: 430,
    category: 'Backend',
    difficulty: 'Easy',
    question: "Explain the role of a database index in improving query performance."
  },
  {
    id: 431,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Design an API for a task management system with user authentication."
  },
  {
    id: 432,
    category: 'Backend',
    difficulty: 'Medium',
    question: "How would you implement retry logic for failed API requests?"
  },
  {
    id: 433,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Explain how to handle file uploads securely in a backend application."
  },
  {
    id: 434,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Design a system for processing background jobs in a backend."
  },
  {
    id: 435,
    category: 'Backend',
    difficulty: 'Medium',
    question: "How would you implement versioning for a REST API?"
  },
  {
    id: 436,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Explain how to use connection pooling for database interactions."
  },
  {
    id: 437,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Design an API for a real-time notification system."
  },
  {
    id: 438,
    category: 'Backend',
    difficulty: 'Hard',
    question: "Design a system for distributed session management in a microservices architecture."
  },
  {
    id: 439,
    category: 'Backend',
    difficulty: 'Hard',
    question: "How would you implement a distributed tracing system for a backend?"
  },
  {
    id: 440,
    category: 'Backend',
    difficulty: 'Hard',
    question: "Design a system for handling real-time data ingestion at scale."
  },
  {
    id: 441,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "What is the role of an API gateway in a cloud architecture?"
  },
  {
    id: 442,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "Explain the concept of a managed service in cloud computing."
  },
  {
    id: 443,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "What is the purpose of a cloud-based content delivery network?"
  },
  {
    id: 444,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "Describe the role of a cloud provider’s identity and access management (IAM) system."
  },
  {
    id: 445,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "What is the difference between a virtual machine and a container?"
  },
  {
    id: 446,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "Design a serverless architecture for a real-time chat application."
  },
  {
    id: 447,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "How would you implement a cloud-based backup system?"
  },
  {
    id: 448,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "Explain how to use a cloud provider’s monitoring tools for performance tracking."
  },
  {
    id: 449,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "Design a system for auto-scaling a web application in the cloud."
  },
  {
    id: 450,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "How would you handle data encryption in a cloud-based application?"
  },
  {
    id: 451,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Design a system for real-time data processing using cloud-native tools."
  },
  {
    id: 452,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "How would you implement a multi-cloud disaster recovery strategy?"
  },
  {
    id: 453,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Design a cloud architecture for a global e-learning platform."
  },
  {
    id: 454,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Explain how to optimize a cloud deployment for low latency."
  },
  {
    id: 455,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Design a system for secure data transfer across cloud regions."
  },
  {
    id: 456,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "What is the purpose of a linter in a CI/CD pipeline?"
  },
  {
    id: 457,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "Explain the role of a container orchestrator like Kubernetes."
  },
  {
    id: 458,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "What is the difference between a build and a deployment?"
  },
  {
    id: 459,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "Describe the purpose of a rollback strategy in deployments."
  },
  {
    id: 460,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "What is the role of a logging aggregator in DevOps?"
  },
  {
    id: 461,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "How would you implement automated security scans in a CI/CD pipeline?"
  },
  {
    id: 462,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "Design a system for managing environment-specific configurations."
  },
  {
    id: 463,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "Explain how to use Helm charts for Kubernetes deployments."
  },
  {
    id: 464,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "How would you implement a rollback mechanism in a CI/CD pipeline?"
  },
  {
    id: 465,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "Design a system for centralized logging in a microservices environment."
  },
  {
    id: 466,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Design a system for automated performance testing in a DevOps pipeline."
  },
  {
    id: 467,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "How would you implement a multi-region Kubernetes deployment?"
  },
  {
    id: 468,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Design a system for real-time infrastructure monitoring and alerting."
  },
  {
    id: 469,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Explain how to handle zero-downtime migrations in a DevOps environment."
  },
  {
    id: 470,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Design a system for managing secrets in a multi-cloud DevOps pipeline."
  },
  {
    id: 471,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "What is the purpose of the `Info.plist` file in iOS development?"
  },
  {
    id: 472,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "Explain the role of a service in Android development."
  },
  {
    id: 473,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "What is the difference between a bound and unbound service in Android?"
  },
  {
    id: 474,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "Describe how to handle different screen sizes in a mobile app."
  },
  {
    id: 475,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "What is the purpose of a storyboard in iOS development?"
  },
  {
    id: 476,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "How would you implement a custom animation in an iOS app?"
  },
  {
    id: 477,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "Design a mobile app for handling push notifications with custom actions."
  },
  {
    id: 478,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "Explain how to optimize network requests in a mobile app."
  },
  {
    id: 479,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "How would you implement a caching strategy for a mobile app?"
  },
  {
    id: 480,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "Design a mobile app for real-time messaging."
  },
  {
    id: 481,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Design a mobile app for offline-first data access with synchronization."
  },
  {
    id: 482,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "How would you implement a custom camera feature in an Android app?"
  },
  {
    id: 483,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Design a mobile app for real-time multiplayer gaming."
  },
  {
    id: 484,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Explain how to handle app performance monitoring in a mobile app."
  },
  {
    id: 485,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Design a mobile app for secure document sharing."
  },
  {
    id: 486,
    category: 'Database',
    difficulty: 'Easy',
    question: "What is the purpose of a composite key in a database?"
  },
  {
    id: 487,
    category: 'Database',
    difficulty: 'Easy',
    question: "Explain the concept of a database view."
  },
  {
    id: 488,
    category: 'Database',
    difficulty: 'Easy',
    question: "What is the difference between a clustered and non-clustered index?"
  },
  {
    id: 489,
    category: 'Database',
    difficulty: 'Easy',
    question: "Describe the role of a trigger in a database."
  },
  {
    id: 490,
    category: 'Database',
    difficulty: 'Easy',
    question: "What is the purpose of a foreign key constraint?"
  },
  {
    id: 491,
    category: 'Database',
    difficulty: 'Medium',
    question: "How would you design a database schema for a ticketing system?"
  },
  {
    id: 492,
    category: 'Database',
    difficulty: 'Medium',
    question: "Explain how to handle database connection pooling in a high-traffic application."
  },
  {
    id: 493,
    category: 'Database',
    difficulty: 'Medium',
    question: "Design a database schema for a job board platform."
  },
  {
    id: 494,
    category: 'Database',
    difficulty: 'Medium',
    question: "How would you implement soft deletes in a database?"
  },
  {
    id: 495,
    category: 'Database',
    difficulty: 'Medium',
    question: "Explain how to optimize a database for read-heavy workloads."
  },
  {
    id: 496,
    category: 'Database',
    difficulty: 'Hard',
    question: "Design a database schema for a real-time recommendation system."
  },
  {
    id: 497,
    category: 'Database',
    difficulty: 'Hard',
    question: "How would you implement a database for geospatial data queries?"
  },
  {
    id: 498,
    category: 'Database',
    difficulty: 'Hard',
    question: "Design a database for a high-throughput event logging system."
  },
  {
    id: 499,
    category: 'Database',
    difficulty: 'Hard',
    question: "Explain how to handle database migrations in a zero-downtime environment."
  },
  {
    id: 500,
    category: 'Database',
    difficulty: 'Hard',
    question: "Design a database for a distributed inventory management system."
  },
  {
    id: 501,
    category: 'Security',
    difficulty: 'Easy',
    question: "What is the purpose of a secure HTTP header?"
  },
  {
    id: 502,
    category: 'Security',
    difficulty: 'Easy',
    question: "Explain the concept of a hash function in security."
  },
  {
    id: 503,
    category: 'Security',
    difficulty: 'Easy',
    question: "What is the role of a public key in encryption?"
  },
  {
    id: 504,
    category: 'Security',
    difficulty: 'Easy',
    question: "Describe the purpose of a nonce in security."
  },
  {
    id: 505,
    category: 'Security',
    difficulty: 'Easy',
    question: "What is the difference between symmetric and asymmetric encryption?"
  },
  {
    id: 506,
    category: 'Security',
    difficulty: 'Medium',
    question: "How would you implement secure user authentication in a mobile app?"
  },
  {
    id: 507,
    category: 'Security',
    difficulty: 'Medium',
    question: "Design a system for secure password reset functionality."
  },
  {
    id: 508,
    category: 'Security',
    difficulty: 'Medium',
    question: "Explain how to mitigate man-in-the-middle attacks."
  },
  {
    id: 509,
    category: 'Security',
    difficulty: 'Medium',
    question: "How would you implement secure API authentication with tokens?"
  },
  {
    id: 510,
    category: 'Security',
    difficulty: 'Medium',
    question: "Design a system for secure logging of sensitive operations."
  },
  {
    id: 511,
    category: 'Security',
    difficulty: 'Hard',
    question: "Design a system for secure data sharing in a multi-tenant environment."
  },
  {
    id: 512,
    category: 'Security',
    difficulty: 'Hard',
    question: "How would you implement a secure key management system?"
  },
  {
    id: 513,
    category: 'Security',
    difficulty: 'Hard',
    question: "Design a system for detecting and mitigating brute-force attacks."
  },
  {
    id: 514,
    category: 'Security',
    difficulty: 'Hard',
    question: "Explain how to secure a containerized application in production."
  },
  {
    id: 515,
    category: 'Security',
    difficulty: 'Hard',
    question: "Design a system for secure real-time data streaming."
  },
  {
    id: 516,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a function to find the second largest element in an array."
  },
  {
    id: 517,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Implement a function to check if a string is a valid email address."
  },
  {
    id: 518,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a program to find the sum of digits in a number."
  },
  {
    id: 519,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Implement a function to reverse the words in a string."
  },
  {
    id: 520,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a function to check if a number is a perfect square."
  },
  {
    id: 521,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a function to find the first missing positive integer in an array."
  },
  {
    id: 522,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Write a program to find the maximum depth of a binary tree."
  },
  {
    id: 523,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a function to detect a loop in a directed graph."
  },
  {
    id: 524,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Write a function to find the longest consecutive sequence in an array."
  },
  {
    id: 525,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a function to perform a post-order traversal of a binary tree."
  },
  {
    id: 526,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Write a function to find the shortest superstring containing all given strings."
  },
  {
    id: 527,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Implement a function to solve the job scheduling problem with deadlines."
  },
  {
    id: 528,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Write a program to find the maximum flow in a flow network."
  },
  {
    id: 529,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Implement a function to solve the minimum cost path problem in a graph."
  },
  {
    id: 530,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Write a function to find the longest repeating subsequence in a string."
  },
  {
    id: 531,
    category: 'System Design',
    difficulty: 'Easy',
    question: "What is the role of a proxy server in system design?"
  },
  {
    id: 532,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Explain the concept of a distributed system."
  },
  {
    id: 533,
    category: 'System Design',
    difficulty: 'Easy',
    question: "What is the purpose of a health check in a system?"
  },
  {
    id: 534,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Describe the role of a caching layer in system design."
  },
  {
    id: 535,
    category: 'System Design',
    difficulty: 'Easy',
    question: "What is the difference between synchronous and asynchronous communication?"
  },
  {
    id: 536,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a system for real-time user activity tracking."
  },
  {
    id: 537,
    category: 'System Design',
    difficulty: 'Medium',
    question: "How would you design a system for processing large-scale data imports?"
  },
  {
    id: 538,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a system for handling user subscriptions."
  },
  {
    id: 539,
    category: 'System Design',
    difficulty: 'Medium',
    question: "How would you design a system for real-time inventory updates?"
  },
  {
    id: 540,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a system for processing user-generated content."
  },
  {
    id: 541,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for real-time anomaly detection in financial transactions."
  },
  {
    id: 542,
    category: 'System Design',
    difficulty: 'Hard',
    question: "How would you design a system for distributed content moderation?"
  },
  {
    id: 543,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for real-time route optimization in logistics."
  },
  {
    id: 544,
    category: 'System Design',
    difficulty: 'Hard',
    question: "How would you design a system for distributed data aggregation?"
  },
  {
    id: 545,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for real-time sentiment analysis of social media data."
  },
  {
    id: 546,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "How do you handle feedback that you disagree with?"
  },
  {
    id: 547,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "Describe a time when you had to meet a tight deadline."
  },
  {
    id: 548,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "What is your approach to staying organized in a project?"
  },
  {
    id: 549,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "How do you ensure clear communication with your team?"
  },
  {
    id: 550,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "Describe a time when you learned from a peer."
  },
  {
    id: 551,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Tell me about a time when you had to deal with a difficult stakeholder."
  },
  {
    id: 552,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Describe a situation where you had to debug a complex issue."
  },
  {
    id: 553,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "How would you handle a situation where a project is falling behind schedule?"
  },
  {
    id: 554,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Tell me about a time when you optimized a process in your team."
  },
  {
    id: 555,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Describe a situation where you had to work with a new technology under pressure."
  },
  {
    id: 556,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Tell me about a time when you had to lead a cross-functional team."
  },
  {
    id: 557,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Describe a situation where you had to manage a crisis in a project."
  },
  {
    id: 558,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "How would you handle a situation where a key team member leaves mid-project?"
  },
  {
    id: 559,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Tell me about a time when you had to make a trade-off between speed and quality."
  },
  {
    id: 560,
    category: 'Behavioral',
    difficulty: 'Hard',
    question: "Describe a situation where you had to advocate for a technical solution."
  },
  {
    id: 561,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "What is the purpose of the `defer` attribute in a script tag?"
  },
  {
    id: 562,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "Explain the role of the `rel` attribute in HTML."
  },
  {
    id: 563,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "What is the difference between `sessionStorage` and `localStorage`?"
  },
  {
    id: 564,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "Describe how to create a responsive image using CSS."
  },
  {
    id: 565,
    category: 'Frontend',
    difficulty: 'Easy',
    question: "What is the purpose of the `fetch` API in JavaScript?"
  },
  {
    id: 566,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "How would you implement a custom slider component in React?"
  },
  {
    id: 567,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Design a dropdown menu with accessibility features."
  },
  {
    id: 568,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Explain how to handle client-side routing in a single-page application."
  },
  {
    id: 569,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "How would you implement a custom error boundary in React?"
  },
  {
    id: 570,
    category: 'Frontend',
    difficulty: 'Medium',
    question: "Design a breadcrumb navigation component."
  },
  {
    id: 571,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "How would you implement a real-time code editor with syntax highlighting?"
  },
  {
    id: 572,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "Design a system for lazy-loading components in a large web app."
  },
  {
    id: 573,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "How would you implement a custom state management library?"
  },
  {
    id: 574,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "Design a real-time polling system for a web application."
  },
  {
    id: 575,
    category: 'Frontend',
    difficulty: 'Hard',
    question: "How would you implement a custom grid system with resizable columns?"
  },
  {
    id: 576,
    category: 'Backend',
    difficulty: 'Easy',
    question: "What is the role of a serializer in a backend framework?"
  },
  {
    id: 577,
    category: 'Backend',
    difficulty: 'Easy',
    question: "Explain the concept of a rate limiter in a backend."
  },
  {
    id: 578,
    category: 'Backend',
    difficulty: 'Easy',
    question: "What is the purpose of a health endpoint in an API?"
  },
  {
    id: 579,
    category: 'Backend',
    difficulty: 'Easy',
    question: "Describe the role of a task queue in a backend."
  },
  {
    id: 580,
    category: 'Backend',
    difficulty: 'Easy',
    question: "What is the difference between a monolithic and modular backend?"
  },
  {
    id: 581,
    category: 'Backend',
    difficulty: 'Medium',
    question: "How would you design a system for handling webhook callbacks?"
  },
  {
    id: 582,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Explain how to implement a custom middleware for logging requests."
  },
  {
    id: 583,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Design a system for processing real-time user feedback."
  },
  {
    id: 584,
    category: 'Backend',
    difficulty: 'Medium',
    question: "How would you implement a system for handling large-scale data exports?"
  },
  {
    id: 585,
    category: 'Backend',
    difficulty: 'Medium',
    question: "Explain how to handle database deadlocks in a backend."
  },
  {
    id: 586,
    category: 'Backend',
    difficulty: 'Hard',
    question: "Design a system for real-time order processing in an e-commerce backend."
  },
  {
    id: 587,
    category: 'Backend',
    difficulty: 'Hard',
    question: "How would you implement a system for distributed rate limiting?"
  },
  {
    id: 588,
    category: 'Backend',
    difficulty: 'Hard',
    question: "Design a system for handling real-time user sessions at scale."
  },
  {
    id: 589,
    category: 'Backend',
    difficulty: 'Hard',
    question: "Explain how to implement a system for real-time data synchronization."
  },
  {
    id: 590,
    category: 'Backend',
    difficulty: 'Hard',
    question: "Design a system for processing large-scale batch jobs."
  },
  {
    id: 591,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "What is the purpose of a cloud-based queue service?"
  },
  {
    id: 592,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "Explain the concept of a cloud-based database service."
  },
  {
    id: 593,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "What is the role of a cloud provider’s VPC?"
  },
  {
    id: 594,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "Describe the purpose of a cloud-based caching service."
  },
  {
    id: 595,
    category: 'Cloud',
    difficulty: 'Easy',
    question: "What is the difference between a cloud function and a container?"
  },
  {
    id: 596,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "How would you design a cloud-based system for real-time notifications?"
  },
  {
    id: 597,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "Explain how to implement a cloud-based logging system."
  },
  {
    id: 598,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "Design a system for processing large-scale data in the cloud."
  },
  {
    id: 599,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "How would you implement a cloud-based authentication system?"
  },
  {
    id: 600,
    category: 'Cloud',
    difficulty: 'Medium',
    question: "Explain how to use a cloud provider’s CDN for content delivery."
  },
  {
    id: 601,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Design a cloud-based system for real-time video processing."
  },
  {
    id: 602,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "How would you implement a cloud-based system for distributed AI training?"
  },
  {
    id: 603,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Design a system for real-time monitoring of cloud resources."
  },
  {
    id: 604,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Explain how to handle cloud-based data archival and retrieval."
  },
  {
    id: 605,
    category: 'Cloud',
    difficulty: 'Hard',
    question: "Design a system for secure cloud-based file sharing."
  },
  {
    id: 606,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "What is the purpose of a deployment manifest in Kubernetes?"
  },
  {
    id: 607,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "Explain the role of a pipeline trigger in CI/CD."
  },
  {
    id: 608,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "What is the difference between a pod and a container in Kubernetes?"
  },
  {
    id: 609,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "Describe the purpose of a service account in DevOps."
  },
  {
    id: 610,
    category: 'DevOps',
    difficulty: 'Easy',
    question: "What is the role of a configuration file in infrastructure as code?"
  },
  {
    id: 611,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "How would you design a system for automated dependency updates?"
  },
  {
    id: 612,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "Explain how to implement a multi-stage CI/CD pipeline."
  },
  {
    id: 613,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "Design a system for managing container images in a registry."
  },
  {
    id: 614,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "How would you implement a system for automated rollback in Kubernetes?"
  },
  {
    id: 615,
    category: 'DevOps',
    difficulty: 'Medium',
    question: "Explain how to use a service mesh for observability."
  },
  {
    id: 616,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Design a system for automated cost optimization in a DevOps pipeline."
  },
  {
    id: 617,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "How would you implement a system for distributed tracing in a DevOps environment?"
  },
  {
    id: 618,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Design a system for real-time compliance monitoring in DevOps."
  },
  {
    id: 619,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Explain how to handle multi-tenant isolation in a Kubernetes cluster."
  },
  {
    id: 620,
    category: 'DevOps',
    difficulty: 'Hard',
    question: "Design a system for automated resource provisioning in a hybrid cloud."
  },
  {
    id: 621,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "What is the purpose of a layout resource in Android?"
  },
  {
    id: 622,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "Explain the role of a segue in iOS development."
  },
  {
    id: 623,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "What is the difference between a foreground and background service in Android?"
  },
  {
    id: 624,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "Describe the purpose of a constraint layout in Android."
  },
  {
    id: 625,
    category: 'Mobile',
    difficulty: 'Easy',
    question: "What is the role of a delegate in iOS development?"
  },
  {
    id: 626,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "How would you design a mobile app for handling in-app purchases?"
  },
  {
    id: 627,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "Explain how to implement a custom transition animation in iOS."
  },
  {
    id: 628,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "Design a mobile app for real-time fitness tracking."
  },
  {
    id: 629,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "How would you handle data persistence in a mobile app?"
  },
  {
    id: 630,
    category: 'Mobile',
    difficulty: 'Medium',
    question: "Explain how to implement a custom keyboard in an Android app."
  },
  {
    id: 631,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Design a mobile app for real-time language translation."
  },
  {
    id: 632,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "How would you implement a system for offline maps in a mobile app?"
  },
  {
    id: 633,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Design a mobile app for real-time collaborative editing."
  },
  {
    id: 634,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Explain how to optimize a mobile app for low-bandwidth environments."
  },
  {
    id: 635,
    category: 'Mobile',
    difficulty: 'Hard',
    question: "Design a mobile app for secure video conferencing."
  },
  {
    id: 636,
    category: 'Database',
    difficulty: 'Easy',
    question: "What is the purpose of a database cursor?"
  },
  {
    id: 637,
    category: 'Database',
    difficulty: 'Easy',
    question: "Explain the concept of a self-join in SQL."
  },
  {
    id: 638,
    category: 'Database',
    difficulty: 'Easy',
    question: "What is the role of a database sequence?"
  },
  {
    id: 639,
    category: 'Database',
    difficulty: 'Easy',
    question: "Describe the purpose of a check constraint in a database."
  },
  {
    id: 640,
    category: 'Database',
    difficulty: 'Easy',
    question: "What is the difference between a table and a view in a database?"
  },
  {
    id: 641,
    category: 'Database',
    difficulty: 'Medium',
    question: "How would you design a database schema for a healthcare system?"
  },
  {
    id: 642,
    category: 'Database',
    difficulty: 'Medium',
    question: "Explain how to implement a database for handling time-zone data."
  },
  {
    id: 643,
    category: 'Database',
    difficulty: 'Medium',
    question: "Design a database schema for a real-time voting system."
  },
  {
    id: 644,
    category: 'Database',
    difficulty: 'Medium',
    question: "How would you handle database schema changes in a live application?"
  },
  {
    id: 645,
    category: 'Database',
    difficulty: 'Medium',
    question: "Explain how to implement a database for audit logging."
  },
  {
    id: 646,
    category: 'Database',
    difficulty: 'Hard',
    question: "Design a database for a real-time supply chain management system."
  },
  {
    id: 647,
    category: 'Database',
    difficulty: 'Hard',
    question: "How would you implement a database for high-frequency trading?"
  },
  {
    id: 648,
    category: 'Database',
    difficulty: 'Hard',
    question: "Design a database for a distributed search indexing system."
  },
  {
    id: 649,
    category: 'Database',
    difficulty: 'Hard',
    question: "Explain how to handle database sharding for a global application."
  },
  {
    id: 650,
    category: 'Database',
    difficulty: 'Hard',
    question: "Design a database for a real-time fraud detection system."
  },
  {
    id: 651,
    category: 'Security',
    difficulty: 'Easy',
    question: "What is the purpose of a salt in password hashing?"
  },
  {
    id: 652,
    category: 'Security',
    difficulty: 'Easy',
    question: "Explain the concept of a security audit."
  },
  {
    id: 653,
    category: 'Security',
    difficulty: 'Easy',
    question: "What is the role of a private key in encryption?"
  },
  {
    id: 654,
    category: 'Security',
    difficulty: 'Easy',
    question: "Describe the purpose of a security patch."
  },
  {
    id: 655,
    category: 'Security',
    difficulty: 'Easy',
    question: "What is the difference between a vulnerability and an exploit?"
  },
  {
    id: 656,
    category: 'Security',
    difficulty: 'Medium',
    question: "How would you implement secure session handling in a web application?"
  },
  {
    id: 657,
    category: 'Security',
    difficulty: 'Medium',
    question: "Design a system for secure user onboarding."
  },
  {
    id: 658,
    category: 'Security',
    difficulty: 'Medium',
    question: "Explain how to mitigate session hijacking attacks."
  },
  {
    id: 659,
    category: 'Security',
    difficulty: 'Medium',
    question: "How would you implement secure data validation in an API?"
  },
  {
    id: 660,
    category: 'Security',
    difficulty: 'Medium',
    question: "Design a system for secure user role management."
  },
  {
    id: 661,
    category: 'Security',
    difficulty: 'Hard',
    question: "Design a system for secure real-time payment processing."
  },
  {
    id: 662,
    category: 'Security',
    difficulty: 'Hard',
    question: "How would you implement a system for secure data encryption at scale?"
  },
  {
    id: 663,
    category: 'Security',
    difficulty: 'Hard',
    question: "Design a system for detecting and mitigating phishing attacks."
  },
  {
    id: 664,
    category: 'Security',
    difficulty: 'Hard',
    question: "Explain how to secure a serverless architecture."
  },
  {
    id: 665,
    category: 'Security',
    difficulty: 'Hard',
    question: "Design a system for secure user data deletion under GDPR."
  },
  {
    id: 666,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a function to find the minimum element in an array."
  },
  {
    id: 667,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Implement a function to check if a string contains unique characters."
  },
  {
    id: 668,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a program to find the LCM of two numbers."
  },
  {
    id: 669,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Implement a function to count vowels in a string."
  },
  {
    id: 670,
    category: 'DSA',
    difficulty: 'Easy',
    question: "Write a function to check if a number is even or odd."
  },
  {
    id: 671,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a function to find the kth node from the end of a linked list."
  },
  {
    id: 672,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Write a program to find the diameter of a binary tree."
  },
  {
    id: 673,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a function to find the intersection point of two linked lists."
  },
  {
    id: 674,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Write a function to find the majority element in an array."
  },
  {
    id: 675,
    category: 'DSA',
    difficulty: 'Medium',
    question: "Implement a function to check if a binary tree is a BST."
  },
  {
    id: 676,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Write a function to find the minimum spanning tree of a graph."
  },
  {
    id: 677,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Implement a function to solve the coin change problem."
  },
  {
    id: 678,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Write a program to find the shortest path in a weighted directed acyclic graph."
  },
  {
    id: 679,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Implement a function to solve the longest increasing path in a matrix."
  },
  {
    id: 680,
    category: 'DSA',
    difficulty: 'Hard',
    question: "Write a function to find the maximum product subarray."
  },
  {
    id: 681,
    category: 'System Design',
    difficulty: 'Easy',
    question: "What is the purpose of a load testing tool in system design?"
  },
  {
    id: 682,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Explain the concept of a microservice."
  },
  {
    id: 683,
    category: 'System Design',
    difficulty: 'Easy',
    question: "What is the role of a monitoring system in a distributed architecture?"
  },
  {
    id: 684,
    category: 'System Design',
    difficulty: 'Easy',
    question: "Describe the purpose of a service registry."
  },
  {
    id: 685,
    category: 'System Design',
    difficulty: 'Easy',
    question: "What is the difference between a push and pull model in system design?"
  },
  {
    id: 686,
    category: 'System Design',
    difficulty: 'Medium',
    question: "How would you design a system for real-time user authentication?"
  },
  {
    id: 687,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a system for handling real-time user reviews."
  },
  {
    id: 688,
    category: 'System Design',
    difficulty: 'Medium',
    question: "How would you design a system for processing large-scale user uploads?"
  },
  {
    id: 689,
    category: 'System Design',
    difficulty: 'Medium',
    question: "Design a system for real-time order tracking."
  },
  {
    id: 690,
    category: 'System Design',
    difficulty: 'Medium',
    question: "How would you design a system for handling user preferences?"
  },
  {
    id: 691,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for real-time recommendation engine."
  },
  {
    id: 692,
    category: 'System Design',
    difficulty: 'Hard',
    question: "How would you design a system for distributed user analytics?"
  },
  {
    id: 693,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for real-time ad serving."
  },
  {
    id: 694,
    category: 'System Design',
    difficulty: 'Hard',
    question: "How would you design a system for distributed payment processing?"
  },
  {
    id: 695,
    category: 'System Design',
    difficulty: 'Hard',
    question: "Design a system for real-time user behavior tracking."
  },
  {
    id: 696,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "How do you approach documenting your code?"
  },
  {
    id: 697,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "Describe a time when you had to work on a tight budget."
  },
  {
    id: 698,
    category: 'Behavioral',
    difficulty: 'Easy',
    question: "What is your approach to handling repetitive tasks?"
  },
  {
    id: 699,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Tell me about a time when you had to prioritize user experience over technical perfection."
  },
  {
    id: 700,
    category: 'Behavioral',
    difficulty: 'Medium',
    question: "Describe a situation where you had to collaborate with a non-technical team."
  }
];
import React from 'react';
import CourseCard from './CourseCard';
import './App.css';

function App() {
  const courses = [
    {
      image: 'https://adminappapis-publicdatabucket3968349e-bea8cnueqwrl.s3.ap-south-1.amazonaws.com/courses/aws-solutions-architect-associate/Aws-Solutions-Architect-Associate.jpg',
      badgeText: 'Cloud Computing',
      title: 'AWS Solutions Architect...',
      description: 'Gain practical hands-on experience and leverage architectura...',
    },
    {
      image: 'https://adminappapis-publicdatabucket3968349e-bea8cnueqwrl.s3.ap-south-1.amazonaws.com/courses/azure-administration/Azure-Administration.jpg',
      badgeText: 'Cloud Computing',
      title: 'Azure Administration',
      description: 'The Microsoft Azure training is in-depth training for the Az...',
    },
    {
      image: 'https://adminappapis-publicdatabucket3968349e-bea8cnueqwrl.s3.ap-south-1.amazonaws.com/courses/azure-devops/Azure-Devops.jpg',
      badgeText: 'DevOps',
      title: 'AWS Solutions Architect...',
      description: 'Azure DevOps is a set of cloud-based services provided by Mi...',
    },
    {
      image: 'https://adminappapis-publicdatabucket3968349e-bea8cnueqwrl.s3.ap-south-1.amazonaws.com/courses/core-java/Core-Java.jpg',
      badgeText: 'Programming',
      title: 'Java/J2EE',
      description: 'Become proficient in Java programming, enabling you to write...',
    },
    {
      image: 'https://adminappapis-publicdatabucket3968349e-bea8cnueqwrl.s3.ap-south-1.amazonaws.com/courses/devops-master-course/Devops-Master-Course.jpg',
      badgeText: 'DevOps',
      title: 'DevOps Master Course',
      description: 'Comprehensive training covering the principles, practices, a...',
    },
    {
      image: 'https://adminappapis-publicdatabucket3968349e-bea8cnueqwrl.s3.ap-south-1.amazonaws.com/courses/kubernetes/Kubernetes.jpg',
      badgeText: 'Containers',
      title: 'Kubernetes Master Course',
      description: 'Comprehensive Kubernetes course covering architecture, deplo...',
    },
    {
      image: 'https://adminappapis-publicdatabucket3968349e-bea8cnueqwrl.s3.ap-south-1.amazonaws.com/courses/python-scripting/Python-Scripting.jpg',
      badgeText: 'Programming',
      title: 'Python Scripting',
      description: 'Become proficient in Python scripting, enabling you to write...',
    },
    {
      image: 'https://adminappapis-publicdatabucket3968349e-bea8cnueqwrl.s3.ap-south-1.amazonaws.com/courses/react-js/React-Js.jpg',
      badgeText: 'Programming',
      title: 'React JS',
      description: 'The ReactJS Course trains learners to build dynamic web apps...',
    },
    {
      image: 'https://adminappapis-publicdatabucket3968349e-bea8cnueqwrl.s3.ap-south-1.amazonaws.com/courses/terraform-certification/Terraform-Certification.jpg',
      badgeText: 'Infrastructure Automation',
      title: 'Terraform Certification',
      description: 'Terraform Certification Course: In-depth training on Terrafo...',
    }
  ];

  // Example usage of map, filter, and reduce
  const filteredCourses = courses.filter(course => course.badgeText === 'DevOps');
  const courseTitles = courses.map(course => course.title);
  const totalCourses = courses.reduce((total, course) => total + 1, 0);

  console.log('Filtered Courses:', filteredCourses);
  console.log('Course Titles:', courseTitles);
  console.log('Total Courses:', totalCourses);

  return (
    <div className="app">
      <div className="course-grid">
        {filteredCourses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            badgeText={course.badgeText}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
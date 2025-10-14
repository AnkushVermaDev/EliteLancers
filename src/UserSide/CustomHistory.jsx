import React from 'react'
import Userheader from './Userheader';
import { useNavigate } from 'react-router-dom';
const CustomHistory = () => {

  const navigate = useNavigate();
   const userinformation=
    {

      userid:15162,
      Name:"Ankush Verma",
      specialrights:1

    }

     const currentarray = [
    { id: 1, title: "Migrating project - ShadowChat", status: "In progress", EstimateDeadLine: "23-11-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 2, title: "Redesign UI - TaskFlow", status: "Completed", EstimateDeadLine: "12-07-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 3, title: "Deploy API Gateway - CloudBridge", status: "Pending", EstimateDeadLine: "09-02-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 4, title: "Database Optimization - SkyDB", status: "In progress", EstimateDeadLine: "15-05-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 5, title: "Testing Suite - DevOpsKit", status: "Completed", EstimateDeadLine: "22-04-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 6, title: "Frontend Migration - NovaApp", status: "Pending", EstimateDeadLine: "30-11-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 7, title: "Security Patch - TitanCore", status: "In progress", EstimateDeadLine: "08-03-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 8, title: "Integrate AI Bot - ChatHive", status: "Completed", EstimateDeadLine: "19-08-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 9, title: "Refactor Backend - StreamX", status: "Pending", EstimateDeadLine: "01-10-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 10, title: "Cloud Migration - AlphaSync", status: "In progress", EstimateDeadLine: "25-09-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 11, title: "Launch Campaign - Brandify", status: "Completed", EstimateDeadLine: "10-01-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 12, title: "Bug Fixing - SmartCart", status: "Pending", EstimateDeadLine: "18-06-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 13, title: "Update Dashboard - VisionPro", status: "In progress", EstimateDeadLine: "29-07-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 14, title: "Implement CI/CD - DeployMax", status: "Completed", EstimateDeadLine: "12-03-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 15, title: "User Onboarding - EngageHub", status: "In progress", EstimateDeadLine: "03-09-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 16, title: "Data Cleanup - InfoNet", status: "Pending", EstimateDeadLine: "11-12-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 17, title: "Analytics Integration - Insight360", status: "Completed", EstimateDeadLine: "05-05-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 18, title: "Server Migration - EdgeLink", status: "In progress", EstimateDeadLine: "09-08-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 19, title: "API Testing - CloudWave", status: "Pending", EstimateDeadLine: "27-02-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 20, title: "Mobile Optimization - FitTrack", status: "Completed", EstimateDeadLine: "21-11-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 21, title: "Redesign Landing Page - ClickBoost", status: "In progress", EstimateDeadLine: "17-03-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 22, title: "Migrate Auth System - LoginX", status: "Completed", EstimateDeadLine: "04-10-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 23, title: "Deploy Notification System - Alertify", status: "Pending", EstimateDeadLine: "14-01-2027", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 24, title: "Enhance Security - SafeNet", status: "In progress", EstimateDeadLine: "28-05-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 25, title: "Implement GraphQL - QueryLab", status: "Completed", EstimateDeadLine: "02-06-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 26, title: "AI Recommendation Engine - SmartSuggest", status: "In progress", EstimateDeadLine: "19-09-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 27, title: "Update Documentation - DevDocs", status: "Pending", EstimateDeadLine: "13-11-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 28, title: "Performance Audit - SpeedCore", status: "Completed", EstimateDeadLine: "09-04-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 29, title: "Backend Revamp - DataStream", status: "In progress", EstimateDeadLine: "25-07-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 30, title: "Cloud Cost Optimization - BudgetOps", status: "Pending", EstimateDeadLine: "08-02-2027", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 31, title: "Integrate Payment Gateway - PayFlex", status: "Completed", EstimateDeadLine: "12-12-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 32, title: "Upgrade Node Version - CodeFlow", status: "In progress", EstimateDeadLine: "16-06-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 33, title: "UI Enhancement - ShopEase", status: "Pending", EstimateDeadLine: "23-03-2027", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 34, title: "API Rate Limiting - GateKeeper", status: "Completed", EstimateDeadLine: "19-01-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 35, title: "Performance Testing - LoadPro", status: "In progress", EstimateDeadLine: "04-04-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 36, title: "Add Localization - WorldWideApp", status: "Pending", EstimateDeadLine: "28-08-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 37, title: "SEO Improvements - SearchBoost", status: "Completed", EstimateDeadLine: "06-09-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 38, title: "Integrate Analytics - Insightly", status: "In progress", EstimateDeadLine: "31-07-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 39, title: "Migrate Storage - DataVault", status: "Pending", EstimateDeadLine: "21-10-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 40, title: "Deploy Microservices - CloudMesh", status: "Completed", EstimateDeadLine: "09-05-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 41, title: "Implement Monitoring - WatchTower", status: "In progress", EstimateDeadLine: "11-11-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 42, title: "Add Dark Mode - NightUI", status: "Pending", EstimateDeadLine: "07-01-2027", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 43, title: "Upgrade Framework - Reactify", status: "Completed", EstimateDeadLine: "16-03-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 44, title: "Improve Logging - LogSense", status: "In progress", EstimateDeadLine: "19-09-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 45, title: "Add Role Management - AuthManager", status: "Pending", EstimateDeadLine: "22-02-2027", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 46, title: "Serverless Migration - CloudZero", status: "Completed", EstimateDeadLine: "14-07-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 47, title: "Develop Plugin System - Extendify", status: "In progress", EstimateDeadLine: "01-06-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 48, title: "Data Visualization - ChartView", status: "Pending", EstimateDeadLine: "30-09-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 49, title: "Integrate WebSockets - StreamChat", status: "Completed", EstimateDeadLine: "03-10-2025", page: "history", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" },
    { id: 50, title: "Optimize Cache - Speedify", status: "In progress", EstimateDeadLine: "20-12-2026", page: "current", url: "https://www.creativedigitalinfotech.com/images/services/software-development-company-in-dehradun.jpg" }
  ];


  return (
    <div className="bg-black w-full min-h-screen text-white p-6">
  <Userheader userinfo={userinformation}/>

  {currentarray.length > 0 ? (
    currentarray
      .filter((item) => item.page === "history" && item.status === "Completed")
      .map((item) => (
        <div
          key={item.id}
          className="mt-5 w-full max-w-4xl mx-auto border border-gray-700 rounded-lg flex items-center justify-between p-4 hover:bg-gray-900 transition-all duration-300"
          onClick={()=>navigate('/user/info',{state:{userinformation,item}})}
        >
          {/* Image */}
          <div className="flex items-center gap-4">
            <img
              src={item.url}
              alt={item.title}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-gray-500"
            />
            <div>
               <h1 className="text-base sm:text-lg font-semibold">{item.title}</h1>
               <h3 className='px-5 text-sm text-yellow-500'>Dilevery: {item.EstimateDeadLine}</h3>
            </div>
           
          </div>

          {/* Status */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mb-1"></div>
            <h1 className="text-sm text-gray-300">{item.status}</h1>
          </div>
        </div>
      ))
  ) : (
    <div className="text-center text-gray-400 mt-10 text-lg">
      No Record Found
    </div>
  )}
</div>

  )
}

export default CustomHistory

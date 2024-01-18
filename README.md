# Anime Recommendation System

![image](https://github.com/mozaldy/wamonime/assets/96912274/fb759ef6-6470-4b70-aa35-1a2a725d681d)

Welcome to the Anime Recommendation System! This is a full-stack web application that provides personalized anime recommendations based on user preferences.

# Table of Contents

1. [Introduction](#introduction)

   - [Problem Statement](#problem-statement)
   - [Recommendation Engine](#recommendation-engine)
   - [About Dataset](#about-dataset)

2. [Project Summary](#project-summary)

   - [Objectives of the Project](#objectives-of-the-project)
   - [Meet and Greet Data - Konnichiwa (こんにちわ)](#meet-and-greet-data---konnichiwa-こんにちわ)
   - [Analyze the Data - Byakugan (白ガン)](#analyze-the-data---byakugan-白ガン)
   - [Preparing Data for Consumption - Sonaeru (備える)](#preparing-data-for-consumption---sonaeru-備える)
   - [Recommendation Building Phase - Tsukuru (作る)](#recommendation-building-phase---tsukuru-作る)

3. [Technologies Used](#technologies-used)
4. [Features](#features)
5. [Getting Started](#getting-started)
   - [Front-end (Vue.js - Client)](#front-end-vuejs---client)
   - [Back-end (Flask - Server)](#back-end-flask---server)
   - [Consuming the REST API](#consuming-the-rest-api)

## Introduction

The notebook follows a boy whose stumbled upon this amazing dataset unintentionally. With the ability of machine learning, he explores the dataset in search of 'what to watch next?' using content based and collaborative filtering.

### Problem statement

Every streaming content has its own viewers and each content has it's rating. Viewers leave some good ratings for the content if they like it. But where does it apply? Viewers can spend hours scrolling through hundreds, sometimes thousands of anime's never finding an content they like. Business need to be provided suggestions based on their likes and needs in order to create a better streaming environment that boosts revenue and increases the time spent on a website.

### Recommendation engine

In the vast world of streaming content, each show or movie has its own unique set of viewers and ratings. Viewers express their appreciation for content by leaving ratings, but the real challenge lies in finding where these ratings apply. Endless hours can be spent scrolling through countless anime titles, never quite finding the perfect match. Businesses need a way to provide personalized suggestions based on viewers' preferences and needs to enhance the streaming experience, boost revenue, and keep users engaged on their platforms.
About Dataset
This data set contains information on user preference data from 73,516 users on 12,294 anime. Each user is able to add anime to their completed list and give it a rating and this data set is a compilation of those ratings.
Anime Recommendations Database

### Project summary

- Objectives of the project
- Meet and greet data - Konnichiwa (こんにちわ)
- Analyze the data- Byakugan (白ガン)
- Preparing data for consumption- Sonaeru (備える)
- Recommendation building phase - Tsukuru (作る)

#### This project aims to harness the potential of data and machine learning to transform the way anime enthusiasts discover their next favorite series or film.

## Technologies Used

- **Front-end:** Vue.js (Client)
- **Back-end:** Flask (Server) - REST API

## Features

- **User Authentication:** Secure user authentication system to personalize recommendations for each user.
- **Anime Database:** A comprehensive database of anime titles and information.
- **Recommendation Algorithm:** Advanced recommendation algorithm to suggest anime based on user preferences and viewing history.
- **User Feedback:** Allows users to provide feedback on recommended anime, improving the recommendation algorithm over time.

## Getting Started

### Front-end (Vue.js - Client)

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run serve
   ```

4. Access the application at [http://localhost:8080](http://localhost:8080).

### Back-end (Flask - Server)

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   pip install flask
   ```

3. Run the development server:

   ```bash
   flask run
   ```

4. Access the application at [http://localhost:5000](http://localhost:8080).

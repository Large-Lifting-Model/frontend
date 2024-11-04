import React from "react";

const isDevelopmentMode = process.env.NODE_ENV === 'development';

class AppAPI {
  
  static useTestServer = import.meta.env.VITE_USE_TEST_SERVER == "1";
  static testUserID = "12903781273"
  static testServer = 'http://localhost:3885/'
  static prodServer = 'http://34.65.243.247/api/'
  static server = AppAPI.useTestServer ? AppAPI.testServer : AppAPI.prodServer

  static TestRoutes = {
    'PROFILE': 'profile/'
  }

  static ProdRoutes = {
    'PROFILE': 'users/profile/'
  }

  static getProfileID() {
    return AppAPI.useTestServer ? AppAPI.testUserID : ""
  }

  static getRoute(pageName) {
    return AppAPI.useTestServer ? AppAPI.TestRoutes[pageName] : AppAPI.ProdRoutes[pageName]
  }

  static testUser = {
    first_name: "testUser_fName",
    last_name: "testUser_lname",
    email: "testUser_e@mail"
  };

  static emptyUser = {
    first_name: "",
    last_name: "",
    email: ""
  };

  static testHealth = {
    dob: "2002-11-20",
    gender: "Male",
    height: 172,
    weight: 90,
    favourite_workout_type: "weights",
    workout_experience: "medium",
    fitness_goal: "hypertrophy",
    injuries: "bad left knee",
    other_considerations: "none"
  }

  static emptyHealth = {
    dob: "",
    gender: "",
    height: 0,
    weight: 0,
    favourite_workout_type: "",
    workout_experience: "",
    fitness_goal: "",
    injuries: "",
    other_considerations: ""
  }

  static vitestUser = {
    first_name: "vitest_fName",
    last_name: "vitest_lname",
    email: "vitest_e@mail"
  }

  static testProfile = {
    id: AppAPI.testUserID.toString(),
    "user": AppAPI.testUser,
    "health_data": AppAPI.testHealth
  }

  static emptyProfile = {
    id: "",
    "user": AppAPI.emptyUser,
    "health_data": AppAPI.emptyHealth
  }

  static url(pageName) { return AppAPI.server + AppAPI.getRoute(pageName) + AppAPI.getProfileID() }

  static getOrCreateProfileIfTesting = async () => {
		try {
			const gotProfile = await AppAPI.get("PROFILE")
      return gotProfile
		} catch (error) { // If it has been deleted, re-create it.
      if (AppAPI.useTestServer) {
			  return await AppAPI.post("PROFILE", AppAPI.testProfile)
      } else {
        throw new Error(error)
      }
		}
	}

  static #formattedError(response, pageName) {
    const errorString = "[" + response.status + " " + response.statusText + "]\n" + AppAPI.url(pageName)
    console.info("errorstring: " + errorString)
    return errorString
  }

  static post = async (pageName, data) => {
    const response = await fetch(AppAPI.url(pageName), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Indicate JSON content
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error(AppAPI.#formattedError(response, pageName));
    return data
  }

  static get = async (pageName) => {

    const response = await fetch(AppAPI.url(pageName));
		if (!response.ok) throw new Error(AppAPI.#formattedError(response, pageName));
		const data = response.json();
    return data
  }

  static put = async (pageName, data) => {
    const response = await fetch(AppAPI.url(pageName), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error(AppAPI.#formattedError(response, pageName));
    return data
  }

  static delete = async (pageName) => {
    const response = await fetch(AppAPI.url(pageName), {
      method: 'DELETE',
      headers: {
      },
    })
    if (!response.ok) throw new Error(AppAPI.#formattedError(response, pageName));
  }

  constructor() {
  }
}
export default AppAPI;
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { handleErrors } from "../../helper/helpers";
import { baseUrl } from "../../helper/baseurl";
import { setAlert } from "../utils";
import { setUser } from ".";
import axiosInstance from '../../../axiosConfig';

export const generateCode =
  (data: { email: string }) => async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(
        `${baseUrl.auth}/forgot-password`,
        data
      );
      dispatch(
        setAlert({
          msg: response.data.message,
          type: "success",
        })
      );
      return true;
    } catch (err) {
      handleErrors(err, dispatch);
      return false;
    }
  };

export const getUserProfile = () => async (dispatch: Dispatch) => {
  try {
    const url = `${baseUrl.profile}`; // Construct the URL
    console.log("Fetching user profile from: ", url); // Log the URL
    const response = await axios.get(url);
    console.log("User profile response: ", response);
    dispatch(setUser(response.data));
  } catch (err: any) {
    console.error("Error fetching user profile: ", err);
    handleErrors(err, dispatch);
  }
};

export const updateUserProfile =
  (data: {
    full_name: string;
    // email: string;
    location: string;
    tech_skills: string;
    bio: string;
    visa_of_interest: string;
  }) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(`${baseUrl.profile}`, data);
      console.log("UpdateUser profile response: ", response.data);
      dispatch(
        setAlert({
          msg: response.data.message,
          type: "success",
        })
      );
      return true;
    } catch (err: any) {
      console.error("Error updating user profile: ", err);
      if (err.response) {
        console.error("Response data: ", err.response.data);
        console.error("Response status: ", err.response.status);
        console.error("Response headers: ", err.response.headers);
      } else if (err.request) {
        console.error("Request data: ", err.request);
      } else {
        console.error("Error message: ", err.message);
      }
      handleErrors(err, dispatch);
      return false;
    }
  };

export const postScreen = (data: any) => async (dispatch: Dispatch) => {
  try {
    const response = await axiosInstance.post('/post.php', data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Full Response from server:", response);

    if (response.data && response.data.status === "success") {
      console.log("Post submitted successfully:", response.data.message);
      return response.data.message; // Return the message or handle it as needed
    } else {
      console.error("Unexpected response structure:", response.data);
      throw new Error("Unexpected response structure");
    }
  } catch (err) {
    console.error("Error in postScreen action:", err.message);
    if (err.response) {
      console.error("Response data:", err.response.data);
      console.error("Response status:", err.response.status);
      console.error("Response headers:", err.response.headers);
    }
  }
};

export const fetchPosts = () => async (dispatch: Dispatch) => {
  const endpoint = '/fetch_post.php'; // Ensure this matches your PHP script URL
  console.log("Fetching posts from endpoint:", endpoint); // Log the endpoint

  try {
    const response = await axiosInstance.get(endpoint); // Use the endpoint in the API call
    console.log("Full response:", response); // Log the full response

    if (response.data.status === 'success') {
      console.log("Fetched posts:", response.data.posts); // Log the fetched posts
      return response.data.posts; // Return the posts data
    } else {
      console.error("Error fetching posts:", response.data.message);
      dispatch(setAlert({ msg: response.data.message, type: "error" })); // Dispatch an alert if there's an error
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    }
    dispatch(setAlert({ msg: "Failed to fetch posts.", type: "error" })); // Dispatch an alert for the error
    throw error; // Rethrow the error for handling in the component
  }
};

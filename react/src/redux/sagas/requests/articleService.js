import fetchError from "../../../helper/customException";
import ax from "axios";

const axios = ax.create({
  baseURL: "http://localhost:5000/api/v1/article",
});

async function getArticlesService() {
  try {
    const response = await axios.get("/");
    if (!response.data.success) {
      throw response;
    }
    const json_response = await response.data;
    return json_response;
  } catch (err) {
    if (typeof err.text === "function") {
      let errorMessage = await err.text();
      throw new fetchError(err.status, errorMessage);
    } else {
      throw new Error(err);
    }
  }
}

async function addArticleService(data) {
  try {
    const response = await axios.post("/", data);
    if (!response.data.success) {
      throw response;
    }
    const json_response = await response.data;
    return json_response;
  } catch (err) {
    if (typeof err.text === "function") {
      let errorMessage = await err.text();
      throw new fetchError(err.status, errorMessage);
    } else {
      throw new Error(err);
    }
  }
}

async function updateArticleService(id, data) {
  try {
    const response = await axios.put(`/${id}`, data);
    if (!response.data.success) {
      throw response;
    }
    const json_response = await response.data;
    return json_response;
  } catch (err) {
    if (typeof err.text === "function") {
      let errorMessage = await err.text();
      throw new fetchError(err.status, errorMessage);
    } else {
      throw new Error(err);
    }
  }
}

async function deleteArticleService(id) {
  try {
    const response = await axios.delete(`/${id}`);
    if (!response.data.success) {
      throw response;
    }
    const json_response = await response.data;
    return json_response;
  } catch (err) {
    if (typeof err.text === "function") {
      let errorMessage = await err.text();
      throw new fetchError(err.status, errorMessage);
    } else {
      throw new Error(err);
    }
  }
}

async function deleteArticlesService() {
  try {
    const response = await axios.get("/deleteAll");
    if (!response.data.success) {
      throw response;
    }
    const json_response = await response.data;
    return json_response;
  } catch (err) {
    if (typeof err.text === "function") {
      let errorMessage = await err.text();
      throw new fetchError(err.status, errorMessage);
    } else {
      throw new Error(err);
    }
  }
}

export {
  getArticlesService,
  addArticleService,
  updateArticleService,
  deleteArticleService,
  deleteArticlesService,
};

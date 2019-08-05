import axios from "axios";
import {
  GET_ERRORS,
  GET_BACKLOG,
  GET_PROJECT_TASK,
  DELETE_PROJECT_TASK
} from "./types";

export const addProjectTask = (
  backlogId,
  projectTask,
  history
) => async dispatch => {
  try {
    await axios.post(`/api/backlog/${backlogId}`, projectTask);
    history.push(`/projectBoard/${backlogId}`);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getBacklog = backlogId => async dispatch => {
  try {
    const res = await axios.get(`/api/backlog/${backlogId}`);
    dispatch({
      type: GET_BACKLOG,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProjectTask = (backlogId, PTId, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/backlog/${backlogId}/${PTId}`);
    dispatch({
      type: GET_PROJECT_TASK,
      payload: res.data
    });
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    history.push(`/dashboard`);
  }
};

export const updateProjectTask = (
  backlogId,
  PTId,
  updatedProjectTask,
  history
) => async dispatch => {
  try {
    await axios.patch(`/api/backlog/${backlogId}/${PTId}`, updatedProjectTask);
    history.push(`/projectBoard/${backlogId}`);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteProjectTask = (backlogId, PTId) => async dispatch => {
  if (
    window.confirm(
      `Are you sure? You are deleting project task ${PTId}, this action cannot be undone.`
    )
  ) {
    await axios.delete(`/api/backlog/${backlogId}/${PTId}`);
    dispatch({
      type: DELETE_PROJECT_TASK,
      payload: PTId
    });
  }
};

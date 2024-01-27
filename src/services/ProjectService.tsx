// import { ResponseBase } from "../models/response-base.model";
import * as apiHandler from "./ApiHandler";
import { ProjectSummary } from '../models/ProjectSummary';

// export const createProject = (projectName: string): Promise<any> => {
//   return apiHandler.api().post("/projects", { name: projectName });
// };

export const getAll = (): Promise<ProjectSummary[]> => {
  return apiHandler.api().get("/project");
};

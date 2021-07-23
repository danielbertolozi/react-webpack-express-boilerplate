import axios, { AxiosInstance, AxiosResponse } from "axios";

export const baseURL = process.env.SERVICE_URL;

type SampleResponse = {
  content: string;
};

export class BackendConnector {
  private static instance: BackendConnector;
  public static getInstance(): BackendConnector {
    if (!this.instance) {
      this.instance = new BackendConnector();
    }
    return this.instance;
  }
  private api: AxiosInstance;
  private constructor() {
    this.api = axios.create({
      baseURL: baseURL + "/api/v1",
    });
  }
  public async performTestRequest(): Promise<AxiosResponse<SampleResponse>> {
    return this.api.get<SampleResponse>("/sample");
  }
}

const apiUrl = "http://localhost:3000";

type FetchOptions<T> = {
    method: "GET" | "POST" | "PUT" | "DELETE";
    headers?: HeadersInit;
    body?: T;
  }

export const handleResponse = async (res: Response) => {
  if (!res.ok) {
    throw new Error(`Request failed with status: ${res.status}`);
  }
  return res.json();
};

export const makeApiRequest = async <T>(path: string, options?: FetchOptions<T>) :Promise<T> => {
  const fetchOptions = {
    method: options?.method || "GET",
    headers: options?.headers || {},
    body: options?.body ? JSON.stringify(options.body) : undefined
  };

  const url = `${apiUrl}${path}`; 

  const res = await fetch(url, fetchOptions); 
  return handleResponse(res); 
};
